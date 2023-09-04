/**
 * @description 单位极限：万
 */
export const limitUnit = (val, unit) => {
    let numStr = "";
    val = val.toString() || "0";
    // chrome 56不支持后行断言
    let regexp = val.includes('.') ? /(\d)(?=(\d{3})+\..*$)/g : /(\d)(?=(\d{3})+$)/g
    if (+val > 9999) {
        numStr = `${(Math.round(+val / 100) / 100)
            .toString()
            .replace(regexp, "$1,")}${unit}`;
    } else {
        numStr = val.replace(regexp, "$1,");
    }
    return numStr;
};
