/*
 * @Author: htz
 * @Date: 2024-07-05 22:50:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-05 22:53:02
 * @Description: sourceMap文件关键解析
 */

/******************                sourceMap文件解析获取源代码的位置                   *******************/
const { SourceMapConsumer } = require('source-map')

// 假设 sourceMap 是从服务器获取的 .map 文件内容
async function parseSourceMap(sourceMap, line, column) {
    const consumer = await new SourceMapConsumer(sourceMap)
    const originalPosition = consumer.originalPositionFor({
        line: line,
        column: column,
    })

    console.log(originalPosition)
    consumer.destroy()
}

// 示例调用
const sourceMap = fetch('path/to/your/file.js.map').then((response) => response.json())
parseSourceMap(sourceMap, lineno, colno)

/******************               自动捕获sourceMap还原错误                  *******************/
window.addEventListener('error', async function (event) {
    const { filename, lineno, colno } = event

    // 假设你的 Source Map 文件和源文件放在同一个目录下，且以 `.map` 关键点
    const sourceMapUrl = `${filename}.map`
    try {
        const response = await fetch(sourceMapUrl)
        const sourceMap = await response.json()
        const { SourceMapConsumer } = await import('source-map')

        const consumer = await new SourceMapConsumer(sourceMap)
        const originalPosition = consumer.originalPositionFor({
            line: lineno,
            column: colno,
        })

        console.log('Original Position: ', originalPosition)
        consumer.destroy()
    } catch (error) {
        console.error('Failed to fetch or parse source map:', error)
    }
})
