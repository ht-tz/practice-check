

import axios from 'axios';
import Vue from 'vue';
export default {
    methods: {
        /**
         * @description 使用axios支持流文件
         * @method axiosDownLoad
         * @params url 接口url
         */
        axiosDownLoad(url, _fileName) {
            Vue.prototype.$Spin.show();
            let token = localStorage.getItem('psi_token');
            //axios添加token
            axios.defaults.headers.common['X-Subject-Token'] = token
                .replace(/%20/g, '+')
                .replace(/%2F/g, '/');
            axios({
                url,
                method: 'GET',
                responseType: 'blob'
            }).then(res => {
                Vue.prototype.$Spin.hide();
                //Blob 对象，包含属性size和type
                const blob = res.data;
                //新建FileReader对象，读取文件内容
                const reader = new FileReader();
                //读取文件，获取DataURL;参数应该是一个二进制格式(图片或者其它可以嵌入到文档的类型)
                //使用readAsDataURL会返回一个url,这个值就保存在事件对象的result里,img通过加载这个地址,完成图片的加载
                reader.readAsDataURL(blob);
                //filename
                var contentDisposition = res.headers['content-disposition'];
                var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*');
                var result = patt.exec(contentDisposition);
                var filename = result && result[1];
                //文件读取成功完成时触发
                reader.onload = e => {
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    var reg = /^["](.*)["]$/g;
                    //重命名
                    if (_fileName) {
                        _fileName = (_fileName.indexOf('.') !== -1) ? _fileName.split('.')[0] : _fileName;
                        a.download = `${_fileName}.${this.findType(
                            decodeURI(filename.replace(reg, '$1'))
                        )}`;
                    } else {
                        a.download = decodeURI(filename.replace(reg, '$1')); //下载后文件名
                    }
                    // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
                    a.href = this.dataURIToBlob(e.target.result); //由于数据量太大导致chrome导出出现网络错误（由于url长度限制）
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                };
            });
        },
        //生成base64 长度太大 ,达到了a标签的href 上限，所以报错下载失败
        // 解决办法:将base64 dataURI转换为Blob 文件对象
        dataURIToBlob(dataURI) {
            //解码使用 base-64 编码的字符串
            var binStr = atob(dataURI.split(',')[1]),
                len = binStr.length,
                //8 位无符号整数值的类型化数组
                arr = new Uint8Array(len);

            for (var i = 0; i < len; i++) {
                //返回指定位置的字符的 Unicode 编码,返回值是 0 - 65535 之间的整数
                arr[i] = binStr.charCodeAt(i);
            }
            //blob 存储着大量的二进制数据
            let blobRes = new Blob([arr], { type: 'application/octet-stream' });
            //结果中包含一个对象的URL，该URL可用于指定源object(blobRes)的内容
            //源object用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
            return URL.createObjectURL(blobRes);
        },
        /**
         * 获取文件名后缀
         * @param {文件名} name
         */
        findType(name) {
            const index = name.lastIndexOf('.');
            return name.substring(index + 1);
        },
        /**
         * @description 导出excel文件
         * @method exportMethod
         * @params url 接口url
         */
        exportMethod(data) {
            Vue.prototype.$Spin.show();
            let token = localStorage.getItem('psi_token');
            //axios添加token
            axios.defaults.headers.common['X-Subject-Token'] = token
                .replace(/%20/g, '+')
                .replace(/%2F/g, '/');
            axios({
                method: data.method,
                url: data.url,
                responseType: 'blob',
                data: data.data
            })
                .then(res => {
                    Vue.prototype.$Spin.hide()
                    if (res.headers && !res.headers['content-disposition']) {
                        this.$Notice.error({
                            title: '错误',
                            desc: '导出内容为空'
                        });
                        return
                    }
                    const link = document.createElement('a');
                    let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' });
                    link.style.display = 'none';
                    link.href = URL.createObjectURL(blob);
                    console.log(res.headers);
                    let fileNameStr = res.headers['content-disposition'];
                    if (fileNameStr.indexOf('filename=') > -1) {
                        fileNameStr = fileNameStr.split('=')[1];
                    }
                    fileNameStr = decodeURIComponent(fileNameStr);
                    link.download = fileNameStr; //下载后文件名
                    // link.download = data.fileName; //下载的文件名
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch((res, error) => {
                    Vue.prototype.$Spin.hide();
                    this.$Notice.error({
                        title: '错误',
                        desc: '网络连接错误'
                    });
                    console.log(error);
                });
        }
    }
};
