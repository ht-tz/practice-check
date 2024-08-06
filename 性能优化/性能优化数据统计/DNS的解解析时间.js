/*
 * @Author: htz
 * @Date: 2024-07-22 23:13:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-22 23:14:55
 * @Description: DNS的解析时间
 */
let performanceEntires = performance.getEntriesByType('navigation')
let entryData = performanceEntires[0]
let dnsTime = entryData.domainLookupEnd - entryData.domainLookupStart
console.log(dnsTime)
