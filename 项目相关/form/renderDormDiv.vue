getDisabledSeconds(item) {
    if (item.maxTimeParam) {
        let maxTime = this.form[item.maxTimeParam];
        let currentTime = this.form[item.paramName];
        let maxhour = Number(maxTime.split(":")[0]);
        let maxMinute = Number(maxTime.split(":")[1]);
        let maxSecond = Number(maxTime.split(":")[2]);
        let currenthour = Number(currentTime.split(":")[0]);
        let currentMinute = Number(currentTime.split(":")[1]);
        let maxSeconds = [];
        if (
            maxTime &&
            currenthour === maxhour &&
            maxMinute === currentMinute
        ) {
            for (let i = maxSecond; i < 59; i++) {
                maxSeconds.push(i);
            }
        }
        return maxSeconds;
    } else if (item.minTimeParam) {
        let minTime = this.form[item.minTimeParam];
        let currentTime = this.form[item.paramName];
        let minhour = Number(minTime.split(":")[0]);
        let minMinute = Number(minTime.split(":")[1]);
        let minSecond = Number(minTime.split(":")[2]);
        let currenthour = Number(currentTime.split(":")[0]);
        let currentMinute = Number(currentTime.split(":")[1]);
        let minSeconds = [];
        if (
            minTime &&
            minhour === currenthour &&
            currentMinute === minMinute
        ) {
            for (let i = 0; i < minSecond; i++) {
                minSeconds.push(i);
            }
        }
        return minSeconds;
    } else {
        return [];
    }
},
/**
 * 最大最小时间判断
 */
options(item) {
    if (item.maxDateParam) {
        return {
            disabledDate: date => {
                return (
                    (date &&
                        date.valueOf() >
                            new Date(
                                this.form[item.maxDateParam]
                            ).valueOf()) ||
                    (date &&
                        date.valueOf() <
                            new Date()
                                .setDate(
                                    new Date(
                                        item.currentTime
                                    ).getDate() - 1
                                )
                                .valueOf())
                );
            }
        };
    } else if (item.minDateParam) {
        return {
            disabledDate: date => {
                return (
                    (date &&
                        date.valueOf() <
                            new Date(
                                this.form[item.minDateParam]
                            ).valueOf()) ||
                    (date &&
                        date.valueOf() <
                            new Date()
                                .setDate(
                                    new Date(
                                        item.currentTime
                                    ).getDate() - 1
                                )
                                .valueOf())
                );
            }
        };
    }
},
/**
 *全部表单验证
 */
validate(callback) {
    this.$refs[this.formValidate].validate(valid => {
        callback(valid, this.getValues());
    });
},
/**
 *指定表单验证
 */
validateField(prop, callback) {
    this.$refs[this.formValidate].validateField(prop, valid => {
        let form = this.getValues();
        callback(valid, form[prop]);
    });
},
/**
 *表单清空
 */
resetFields() {
    this.$refs[this.formValidate].resetFields();
    return this.form;
},
/**
 * 处理函数，如果用户有传入对应的处理函数则使用，否则直接返回
 */
handleFun(args, fn, item) {
    // 此判断针对于时间选择框，如果从秒、分、时倒叙开始选择、上面disabled这些方法就有bug，所以判断如果最大时间小于了最小时间，则对最大时间清空
    if (item && item.dateType === "timePicker") {
        let date =
            new Date().toLocaleDateString().replace(/\//g, "-") + " ";
        if (
            item.dateType &&
            item.dateType === "timePicker" &&
            item.minTimeParam &&
            this.form[item.minTimeParam]
        ) {
            if (
                new Date(date + this.form[item.paramName]).valueOf() <
                new Date(date + this.form[item.minTimeParam]).valueOf()
            ) {
                this.form[item.paramName] = "";
            }
        } else if (
            item.dateType &&
            item.dateType === "timePicker" &&
            item.maxTimeParam &&
            this.form[item.maxTimeParam]
        ) {
            if (
                new Date(date + this.form[item.paramName]).valueOf() >
                new Date(date + this.form[item.maxTimeParam]).valueOf()
            ) {
                this.form[item.paramName] = "";
            }
        }
    }
    if (typeof fn === "function") {
        return fn.apply(this, args);
    } else {
        return;
    }
},
/**
 * 设置form中的value值
 */
setValues(value) {
    if (value.constructor === Object) {
        for (let key in value) {
            this.$set(
                this.form,
                key,
                typeof value[key] == "string"
                    ? value[key].trim()
                    : value[key]
            );
        }
    }
},
/**
 * 获取form中的值，默认获取全部，传入数组字符串获取指定
 */
getValues(data) {
    let that = this;
    // 使用变量，少去触发data数据
    let form = that.form;
    for (let [key, value] of this.dateTimeValMap) {
        value = value.replace(/y/gi, "Y").replace(/d/gi, "D");
        if (
            form[key] &&
            !isNaN(Date.parse(form[key])) &&
            form[key] instanceof Date
        ) {
            form[key] = moment(form[key]).format(value);
        } else if (form[key] && Array.isArray(form[key])) {
            form[key] = form[key].map(
                i =>
                    (i =
                        !isNaN(Date.parse(i)) && i instanceof Date
                            ? moment(i).format(value)
                            : i)
            );
        }
    }
    if (data && Array.isArray(data)) {
        let obj = {};
        data.forEach(key => {
            obj[key] = this.form[key];
        });
        return obj;
    } else {
        return this.form;
    }
},
setParamTarget(paramName, key, value) {
    let index = this.formList.findIndex(i => i.paramName === paramName);
    if (index > -1) {
        if (Array.isArray(key)) {
            key.forEach((i, idx) => {
                if (value[idx] !== undefined) {
                    this.formList[index][i] = value[idx];
                }
            });
        } else {
            this.formList[index][key] = value;
        }
    }
}
},
created() {},
mounted() {}
};