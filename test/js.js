module.exports = {
    entry: {
        main: {import: './src/main.js', dependOn: 'shared'}, // 第一个入口起点
        app: {import: './src/app.js', dependOn: 'shared'}, // 第二个入口起点
        shared: ['dayjs', 'lodash'] // 共享的库
    },

    cache: { // w5 的持久化缓存功能
        type: 'filesystem', // // 配置持久缓存cache:filesystem, 来缓存生成的webpack模块和chunk，来改善构建速度
        buildDependencies: {
            config: [__filename] // 在配置文件变化时使缓存失效
        },
        name: 'development-cache' // 缓存目录的名称，可根据不同环境指定不同名称
    },
    plugins: [
        // 将css文件抽取到单独的文件当中 -，这样的好处就是独立的css文件可以被浏览器的缓存，再次访问的时候减少加载时间
        new MiniCssExtractPlugin({ // 使用MiniCssExtractPlugin插件
                filename: "css/[name]_[id].css",  // 打包后的css文件放到css文件夹中
                chunkFilename: "css/[name]_[id].css"
            }
        ),
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules", // 默认值
            cache: true, // 开启缓存
            // 缓存目录
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/.eslintcache"
            ),
        }),

    ],
    rules:[
        {
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"), // 也可以用包含
            loader: "babel-loader",
            options: { // 对babel-loader编译的换粗结果进行缓存
                cacheDirectory: true, // 开启babel编译缓存
                cacheCompression: false, // 缓存文件不要压缩
            },
        }
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true, //拆分出来的文件名称
            minSize: 20000, // 生成 chunk 的最小体积（以 bytes 为单位）
            maxSize: 100000, // 将大于maxSize的包，拆分成不小于minSize的包（以 bytes 为单位）
            cacheGroups: { // 用于对拆分的包进行分组


                vendor: {  // 地第三库优先抽离， 将来自node_modules目录的模块提取到一个叫vendors的bundles的bundle中
                    test: /[\\/]node_modules[\\/]/, // 通过正则匹配node_modules
                    name: 'vendors', // 用在filename中的name占位符
                    reuseExistingChunk: true, //在代码分割的时候复用已经存在的代码块，这种策略，不仅能减文件体积的输出，还能提高缓存率
                    filename: 'vender_[name]_[id].js', //打包体积
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1, // 至少被引用一次
                    priority: 1,
                },
                utils: {
                    test: /[\\/]utils[\\/]/, // 匹配utils的路径
                    priority: -20, // 缓存优先级
                    reuseExistingChunk: true,
                    name: 'utils', // 将utils的代码抽离到utils的chunk文件中
                },
                common: {
                    name: "common", // chunk的名称
                    priority: 0, // 优先级
                    minSize: 3000, // 最小尺寸，默认值是 3000
                    minChunks: 2, // 最小 chunk ，默认值是 1 // 模块至少复用两次
                }
            },
        },
        // webpack的运行代码包括模块加载和解析逻辑，这部分代码每次构建的时候都可能发生变化，如果和业务代码打包在一起，会导致业务代码频繁的更新 ，缓存失效
        // 因此需要将这部分代码单独抽离出来，以减少业务代码的体积，提高缓存命中率
        runtimeChunk: {
            name: 'runtime'
        }

    },
}