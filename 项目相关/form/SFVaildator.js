/**
 * 表单校验规范，如果符合的请直接使用。如果没有请联系达尔文前端团队增加。
 */
import supportedRegExps from "./regExps";
export const validFn = vue => {
    return {
        //isd登录名
        isdLoginName: (msg = "isd.loginName", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.isdName,
                    message: vue.t("i.validation.regExp.isdLoginName"),
                    trigger: "blur"
                }
            ];
        },
        //登录密码
        isdPsw: (msg = "isd.psw", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.isdPsw,
                    message: vue.t("i.validation.regExp.isdPsw"),
                    trigger: "blur"
                }
            ];
        },
        //ip地址
        ip: (msg = "device.Ipaddress", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.pleaseInputIp", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.ip,
                    message: vue.t("i.validation.regExp", [vue.t(msg)]),
                    trigger: "blur"
                }
            ];
        },
        //'必须为非负整数'
        pureNum: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.pureNum,
                    message: vue.t("i.validation.regExp.pureNum"),
                    trigger: "blur"
                }
            ];
        },
        //必须为正整数
        positiveInt: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.positiveInt,
                    message: vue.t("i.validation.regExp.positiveInt"),
                    trigger: "blur"
                }
            ];
        },
        //必须为1-8正整数
        positiveInt1_8: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.positiveInt1_8,
                    message: vue.t("i.validation.regExp.positiveInt"),
                    trigger: "blur"
                }
            ];
        },
        //车牌号
        carNum: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.carNum,
                    message: vue.t("i.validation.regExpCarNum"),
                    trigger: "blur"
                }
            ];
        },
        //车牌号
        carNum2: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.carNum2,
                    message: vue.t("i.validation.regExpCarNum2"),
                    trigger: "blur"
                }
            ];
        },
        //'仅允许<b>-_.;()（）</b>或字母数字'
        fieldPass: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.fieldPass,
                    message: vue.t("i.validation.regExp.fieldPass"),
                    trigger: "blur"
                }
            ];
        },
        //'仅允许输入文字、字母、数字'
        userLoginName: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.userLoginName,
                    message: vue.t("i.validation.regExp.userLoginName"),
                    trigger: "blur"
                }
            ];
        },
        //'仅允许输入文字、字母、数字'
        treeName: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.treeName,
                    // message: "",
                    message: vue.t("i.validation.treeName"),
                    trigger: "blur"
                }
            ];
        },
  
//仅允许汉字 字母 数字_-,不能以_-开头
personName: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.personName,
            message: vue.t("i.validation.regExp.personName"),
            trigger: "blur"
        }
    ];
},
// n+m正则
numAndNum: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.numAndNum,
            message: vue.t("i.validation.regExp.numAndNum"),
            trigger: "blur"
        }
    ];
},
//'仅允许<b>文字字母数字 -_.;#（）[] 半角加号</b>和<b>全角加号</b>以及<b>字符中间有空格</b>'
commonCharacter: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.commonCharacter,
            message: vue.t("i.validation.regExp.commonCharacter"),
            trigger: "blur"
        }
    ];
},
//'仅允许<b>文字字母数字</b>'
nationCharacter: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.nationCharacter,
            message: vue.t("i.validation.regExp.nationCharacter"),
            trigger: "blur"
        }
    ];
},
// 编码只能输入大小写字母,数字,_,-
codeCharacter: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.codeCharacter,
            message: vue.t("i.validation.regExp.codeCharacter"),
            trigger: "blur"
        }
    ];
}, // 编码只能输入大小写字母,数字,_,-或邮箱
codeCharacterOrEmail: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.codeCharacterOrEmail,
            message: vue.t("i.validation.regExp.codeCharacterOrEmail"),
            trigger: "blur"
        }
    ];
},
/**ftp地址*/
ftpPath: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.ftpPath,
            message: vue.t("i.validation.regExpFtp"),
            trigger: "blur"
        }
    ];
},
/**mac地址*/
mac: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.mac,
            message: vue.t("i.validation.regExpMac"),
            trigger: "blur"
        }
    ];
},
/***手机号码**/
phone: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.phone,
            message: vue.t("i.validation.regExpPhone"),
            trigger: "blur"
        }
    ];
},
/***座机号码**/
tell: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.tell,
            message: vue.t("i.validation.regExpTell"),
            trigger: "blur"
        }
    ];
},
// 描述\备注专用,在CHAR的基础上增加可以开头空格,回车换行符\uff0c\u3002为中文的
memoCharacterEnter: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            required: isRequired,
            pattern: supportedRegExps.memoCharacterEnter,
            message: vue.t("i.validation.regExp.memoCharacterEnter"),
            trigger: "blur"
        }
    ];
},
// 仅允许字母数字_字符
sn: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.sn,
            message: vue.t("i.validation.sn"),
            trigger: "blur"
        }
    ];
},

//'仅允许文字字母数字-_.;#(),\/\\（）[]<br/>半角加号和、全角加号以及允许字符中间有空格',
hikdomain: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.hikdomain,
            message: vue.t("i.validation.regExp.hikdomain"),
            trigger: "blur"
        }
    ];
},

// 仅允许字母或数字
numWord: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.numWord,
            message: vue.t("i.validation.regExp.numWord"),
            trigger: "blur"
        }
    ];
},

// 密码必须同时包含数字和字母
backupPass: (msg = "", isRequired = true) => {
    return [
        {
            required: isRequired,
            message: vue.t("i.validation.mustInput", [vue.t(msg)]),
            trigger: "blur"
        },
        {
            type: "pattern",
            pattern: supportedRegExps.backupPass,
            message: vue.t("i.validation.regExp.backupPass"),
            trigger: "blur"
        }
    ];
},

        // 仅允许文字、字母、数字和字符中间空格
        fewCharacter: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.fewCharacter,
                    message: vue.t("i.validation.regExp.fewCharacter"),
                    trigger: "blur"
                }
            ];
        },

        idCard: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.idCard,
                    message: vue.t("i.validation.regExp.idCard"),
                    trigger: "blur"
                }
            ];
        },

        /**校验邮箱是否合法*/
        email: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.email,
                    message: vue.t("emailError"),
                    trigger: "blur"
                }
            ];
        },
        gpsX: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.gpsX,
                    message: vue.t("i.validation.gpsX"),
                    trigger: "blur"
                }
            ];
        },
        gpsY: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.gpsY,
                    message: vue.t("i.validation.gpsY"),
                    trigger: "blur"
                }
            ];
        },
        /**端口*/
        port: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.port,
                    message: vue.t("i.validation.port"),
                    trigger: "blur"
                }
            ];
        },
        /**设备名称 -中文字母数字（）*/
        deviceName: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.deviceName,
                    message: vue.t("i.validation.deviceName"),
                    trigger: "blur"
                }
            ];
        },
        /**数字编码 -数字*/
        intercomDevIndex2: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.intercomDevIndex2,
                    message: vue.t("i.validation.intercomDevIndex"),
                    trigger: "blur"
                }
            ];
        },
        /**数字编码 -数字*/
        secConDev: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.secConDevIndex,
                    message: vue.t("i.validation.secConDev"),
                    trigger: "blur"
                }
            ];
        },
        /**数字编码 -数字*/
        intercomDevIndex3: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.intercomDevIndex3,
                    message: vue.t("i.validation.intercomDevIndex"),
                    trigger: "blur"
                }
            ];
        },
        /**数字编码 -数字\-*/
        intercomDevIndex6: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.intercomDevIndex6,
                    message: vue.t("i.validation.intercomDevIndex"),
                    trigger: "blur"
                }
            ];
        }, /**密码校验**/
        pswExp: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.pswExp,
                    message: vue.t("i.validation.intercomDevIndex"),
                    trigger: "blur"
                }
            ];
        },
        /**设备编号**/
        int10: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.int10,
                    message: vue.t("i.validation.int10"),
                    trigger: "blur"
                }
            ];
        },
        /**0-255之间的整数**/
        numCodeExp: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.numCodeExp,
                    message: vue.t("i.validation.numCodeExpTip"),
                    trigger: "blur"
                }
            ];
        },
        // 仅允许文字、字母、数字和下划线
        name: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.name,
                    message: vue.t("i.validation.regExp.name"),
                    trigger: "blur"
                }
            ];
        },
        //
        usedLayersRules: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.usedLayers,
                    message: vue.t("i.validation.regExp.usedLayers"),
                    trigger: "blur"
                }
            ];
        },

        // 只能有两位小数点，不超过999999
        checkMoney: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    pattern: supportedRegExps.decmal3,
                    message: vue.t("i.validation.regExp.decmal3"),
                    trigger: "blur"
                }
            ];
        },
        memoCharacter2: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [vue.t(msg)]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    required: isRequired,
                    pattern: supportedRegExps.memoCharacter,
                    message: vue.t("i.validation.memoCharacter"),
                    trigger: "blur"
                }
            ];
        },
        //仅允许输入数字、字母、中文、（）
        frequencyName: (msg = "", isRequired = true) => {
            return [
                {
                    required: isRequired,
                    message: vue.t("i.validation.mustInput", [msg]),
                    trigger: "blur"
                },
                {
                    type: "pattern",
                    required: isRequired,
                    pattern: supportedRegExps.frequencyName,
                    message: vue.t("i.validation.regExp.frequencyName"),
                    trigger: "blur"
                }
            ];
        }
    };
};
