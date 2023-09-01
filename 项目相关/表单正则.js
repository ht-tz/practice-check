/**
 * 表单相关正则
 */
const RegExps = {
    //仅允许汉字 字母 数字_-,不能以_-开头
    //isd用户名&&登录名
    isdName: /^[a-zA-Z0-9_@.\\s\\u4E00-\\u9FA5]{0,20}$/,
    //isd密码规则
    isdPsw: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
    ip: /^$|^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/,
    domain: /^([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))[\\\/]*/,
    role: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF\w-()（）+]{1,}$/,
    pureNum: /^$|^\d+$/, // 非负整数
    pswExp: /(?!^(\d+|[a-zA-Z]+|[~`!@#$%^*()/\-_=+<>|{}?.,\[\]\\]+)$)^[\w~`!@#$%^*()/\-_=+<>|{}?.,\[\]\\]+$/,
    pswExp1: /^[a-zA-Z0-9~`!@#$%^*()/\-_=+<>|{}?.,]{6,16}$/,
    port: /(^[1-9]\d{0,3}$)|(^[1-5]\d{4}$)|(^6[0-4]\d{3}$)|(^65[0-4]\d{2}$)|(^655[0-2]\d$)|(^6553[0-5]$)/,
    positiveInt: /^$|^[1-9][\d]*$/, // 正整数。
    positiveInt1_8: /^([1-8])$/, // 正整数。
    // carNum 感觉不太好用 增加一个carNum3 详情解析见 http://www.qilin668.com/a/5e1edf12ce73e33.html
    carNum3: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/,
    carNum2: /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[A-Z0-9.]){1,10}$/,
    /** 大使馆车牌:‘使’+三位国家代码+三位内部编号; 警车、领事馆：浙AXXXX领*/
    /** 武警车牌:‘WJ’+两位数字代码+五位车牌编号*/
    carNum: /^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF]{1}[a-zA-Z]{1}[a-zA-Z0-9]{5,6})$|^([\u4F7F][0-9]{6,7})$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF]{1}[a-zA-Z0-9]{5}[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF]{1,2})$|^(WJ[0-9]{2}[a-zA-Z0-9]{5,6})$/,
    fieldPass: /^$|^[a-zA-Z0-9\w\-\(\).（）;]{1,}$/, // 密码不能是中文
    // userLoginName: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）@;#+]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）@;#+])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）@;#+ ])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）@;#+])+$/,
    userLoginName: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\-\_.@]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\-\_.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\-\_.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\-\_.@])+$/,
    //'仅允许输入文字、字母、数字-'
    treeName: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-.@]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-.@])+$/,
    commonCharacter: /^[\u4E00-\u9FA5a-zA-Z0-9\w\-\(\).（）#\*]*$|^([\u4E00-\u9FA5a-zA-Z0-9\w\-\(\).（）#\*])+([\u4E00-\u9FA5a-zA-Z0-9\w\-\(\).（）#\* ])+([\u4E00-\u9FA5a-zA-Z0-9\w\-\(\).（）#\*])+$/,
    nationCharacter: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9])+$/,
    codeCharacter: /^[a-zA-Z0-9-_]{1,}$/, // 编码只能输入大小写字母,数字,_,-
    codeCharacterOrEmail: /^[a-zA-Z0-9-_]{1,}$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@([a-zA-Z0-9-])+.[a-zA-Z0-9-]{1,5}(\.?[a-z0-9]{1,}))$/, // 编码只能输入大小写字母,数字,_,-或邮箱
    ftpPath: /^$|^(ftp:\/\/([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})(:[\d]{1,4})?(\/){1}$/,
    mac: /^[\da-fA-F]{2}([:]{1}[\da-fA-F]{2}){5}$/,
    // email:/^$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@([a-zA-Z0-9-])+.[a-zA-Z0-9-]{1,5}(\.?[a-z0-9]{1,}))$/,
    // 将email改为jq自带校验 DTS000086086	【用户管理】【电子邮件】格式限制有误
    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
    tell: /^(([0\+][0-9]{2,3}-)?(0[0-9]{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
    memoCharacterEnter: /^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\r\n.:：,（++）;# \uff0c\u3002])*$/, // 描述\备注专用,在CHAR的基础上增加可以开头空格,回车换行符\uff0c\u3002为中文的
    // searchChar: /^((?!<>&:\?\(\)\|\*\"\/\\).)*$/, // 格式是：/^((?!。。。).)*$/，。。。代表要同时不存在的字符：<>   &   :   \?  \(  \)  \|   \*  \"  \/  \\
    sn: /^$|^[a-zA-Z0-9_]{1,}$/, // 仅允许字母数字_字符
    hikdomain: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）,\/\\;# \_.@]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）,\/\\;# \_.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）,\/\\;# \_.@])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-\(\).（）,\/\\;# \_.@])+$/, // 允许字符串中间有空格，不允许头或尾有空格，不允许半角加号，因为级联时会丢失
    numWord: /^[a-zA-Z0-9]*$/,
    backupPass: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,}$/,
    // FEW_CHAR仅支持各国文字unicode区块、字母、数字、字符中间空格
    fewCharacter: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9 ])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9])$/,
    idCard: /^[a-zA-Z0-9]{1,}$/, // 证件ID只能输入大小写字母和数字
    gpsX: /^[\-\+]?(0?\d{1,2}\.\d{1,12}|1[0-7]?\d{1}\.\d{1,12}|180\.0{1,12})$/, // 经度 -180.0～+180.0（整数部分为0～180，必须输入1到12位小数）
    gpsY: /^[\-\+]?([0-8]?\d{1}\.\d{1,12}|90\.0{1,12})$/, // 纬度 -90.0～+90.0（整数部分为0～90，必须输入1到12位小数
    nomarlName: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\.\-@#()]*$/,
    channelNameRex: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9.＋\w\_\-@#()]*$/,
    numAndNum: /([1-9]|[1][0-6]){1,2}\+[1-4]/,
    deviceName: /^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-. @()（）]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-. @()（）])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-. @()（）])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\w\_\-. @()（）])+$/,
    intercomDevIndex2: /^[0-9]+$/,
    intercomDevIndex3: /^[0-9]\d{2,5}$/,
    intercomDevIndex6: /^[0-9\-\/]+$/,
    int10: /^\d{10}$/,
    numCodeExp: /(^[0-9]$)|(^[1-9][0-9]$)|(^[2][0-5][0-5]$)|(^[1][0-9][0-9]$)/,
    name: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/, // 中文字母数字下划线
    usedLayers: 　 /^((((-)?[1-9][0-9]*~(-)?[1-9][0-9]*)|((-)?[1-9][0-9]*)),)*(((-)?[1-9][0-9]*~(-)?[1-9][0-9]*)|((-)?[1-9][0-9]*))$/gi,
    decmal3: "(^[1-9]\\d*\\.\\d{1,2}$)|(^0\\.\\d{1,2}$)|(^[1-9]\\d*$)|(^0$)", //金额,小数部分最多2位,可以是0.00,也可以是0
    personName: /^(?!_|-|·)[\u4E00-\u9FA5\w\-·]*$/,
    memoCharacter: /^(?![\s\S]*?[\'\"\(\)\&<>])[\s\S]*$/,
    //仅包含文字、字母、数字、（）
    frequencyName: /^$|^[A-Za-z0-9\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF\（）]{1,}$/,
  }
  
  export default RegExps
