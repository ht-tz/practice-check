/**
 * @descript  判断页面是否卡顿
 * @param FPSList  采集的帧率
 * @param below  低于多少算卡顿
 * @param number below 的个数
 */
const isLowFps = (FPSList, below, number) => {
    let count = 0
    for (let i = 0; i < FPSList.length; i++) {
        if (FPSList[i] < below) {
            count++
        } else {
            count = 0
        }

        if (count >= number) {
            return true
        }
    }
    return false
}