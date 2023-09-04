/**
 * 正则表达式
 *
 * @module  validator
 * @description 正则校验表达式集合
 * @author
 * @version 2.0
 */

/* eslint-disable */
export default {
    /*
     * @description 图片格式
     * 1、限制文件格式为图片
     * 2、图片类别为jpg、jpeg、png、bmp;
     * */
    UploadImageFormat: /^$|^image\/bmp|jpeg|jpg|png$/,
    /*
     * @description 资源格式（包含图片和视频）
     * 1、限制上传资源类别为jpg,png,jpeg,gif,mp4,ogg,webm
     * */
    UploadResources: /^$|^jpg|png|jpeg|gif|mp4|ogg|webm$/,
    /*
     * @description 视频格式（上传视频）
     * 1、限制视频类别为mp4,ogg,webm
     * */
    UploadVideoFormat: /^$|^mp4|ogg|webm$/,
    /*
     * @description 联系号码
     * 1.允许3-4位区号或者三到四位区号加-或三到四位区号加空 ，后面为7-8位数字
     * 2.允许11位手机号码，第一位为1，后十位为0-9范围内数字
     * */
    contactPhone: /^$|^(\(\d{3,4}\)|\d{3,4}-|\d{3,4}\s)?\d{7,8}$|^(1[0-9]{10})$/,
    /*
     * @description 固定电话号码
     * 1.允许3-4位区号或者三到四位区号加-或三到四位区号加空 ，后面为7-8位数字
     * */
    phone: /^$|^(\(\d{3,4}\)|\d{3,4}-|\d{3,4}\s)?\d{7,8}$/,
    /*
     * @description 手机号码
     * 1.共11位;第一位为1;后十位为0-9范围内数字;
     * */
    telephone: /^$|^1[0-9]{10}$/,
    /*
     * @description 身份证号码
     * 1.身份证号码共15位或者18位字符；
     * 2.15位时全为0-9范围内数字；
     * 3.18位前17位为0-9范围内数字，最后一位是校验位，可能为数字或字符X或字符x；
     * */
    identityCard: /^$|((^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$))/,
    /*
     * @description 车牌号码
     * 1.可以包含英文大写字母、数字、-、·
     * 2.第一位和最后一位仅允许为英文大写字母或数字
     * 3.中间位仅允许为英文大写字母、数字、-、·
     * 4.-、·最多可以出现一次，且不能同时出现
     * */
    carNum: /^$|^[A-Z\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa][A-Z0-9\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa]*(?:·|-)?[A-Z0-9\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa]*$/,
    /*
     * @description 关键字
     * 1.仅允许文字字母数字 -_.;#（）[] 半角加号和全角加号以及字符中间有空格和全角０-９。·；
     * */
    keyWord: /^$|^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-.（）;#+０-９。·]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-.（）;#+０-９。·])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-.（）;#+０-９。·])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋\[\]\w\-.（）;#+０-９。·])+$/,
    /*
     * @description 密码
     * 1.密码为8-16个字符
     * 2.密码必须包含英文字母和数字
     * 3.特殊字符是可选的 特殊符号包含. _ ~ ! @ # $ ^ & * - % () ?
     * */
    passWord: /^$|^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z!_~.@#$%^& ()-*?0-9]{8,16}$/,
    /*
     * @description  MAC地址
     * 1.一般MAC地址包含两种格式：XX-XX-XX-XX-XX-XX或者XX:XX:XX:XX:XX:XX
     * 2.X为a到f或0到9中的任意一位字符
     * */
    mac: /^$|^([\da-fA-F]{2}([-]{1}[\da-fA-F]{2}){5})|([\da-fA-F]{2}([:]{1}[\da-fA-F]{2}){5})$/,
    /*
     * @description  MAC地址
     * 1.格式：XX-XX-XX-XX-XX-XX
     * 2.X为a到f或0到9中的任意一位字符
     * */
    mac1: /^$|^([\da-fA-F]{2}([-]{1}[\da-fA-F]{2}){5})$/,
    /*
     * @description  MAC地址
     * 1.格式：XX:XX:XX:XX:XX:XX
     * 2.X为a到f或0到9中的任意一位字符
     * */
    mac2: /^$|^([\da-fA-F]{2}([:]{1}[\da-fA-F]{2}){5})$/,
    /*
     * @description   经度
     * 1.经度 -180.0～+180.0（整数部分为0～180，必须输入1到12位小数）
     * */
    gpsX: /^$|^[\-\+]?(0?\d{1,2}\.\d{1,12}|1[0-7]?\d{1}\.\d{1,12}|180\.0{1,12})$/,
    /*
     * @description   纬度
     * 1.纬度 -90.0～+90.0（整数部分为0～90，必须输入1到12位小数）
     * */
    gpsY: /^$|^[\-\+]?([0-8]?\d{1}\.\d{1,12}|90\.0{1,12})$/,
    /*
     * @description    身高
     * 1.1-３位 正整数   以cm为单位
     * */
    stature: /^$|^(?:[1-9][0-9]?|[1-9][0-9][0-9])$/,
    /*
     * @description     年龄
     * 1.1-３位 正整数
     * */
    age: /^$|^(?:[1-9][0-9]?|[1-9][0-9][0-9])$/,
    /*
     * @description      RFID
     * 1.两种组成：八位A-F、0-9数字组成;八位A-F、0-9数字 两位A-Z、0-9数字组成;
     * */
    rfid: /^$|^[A-F0-9]{8}$|^[A-F0-9]{8}[A-Z\d]{2}$/,
    /*
     * @description      名称
     * 1.仅包含文字、字母、数字、下划线、-、（）、()、·、*
     * */
    definition: /^$|^[A-Za-z0-9\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa_\-（）()·*]{1,}$/,
    /*
     * @description       邮箱
     * 1.可以由大小写字母，数字，"．_ - @" 组成
     * 2.必须包含一个并且只有一个符号“@”
     * 3.第一个字符不得是“．_ - @＂，结尾不得是字符“．_ - @＂
     * 4." - _ ." 不允许连续使用”
     * 5.不允许出现“@.”或者.@
     * */
    email: /^$|^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/,
    /*
     * @description      用户名
     * 1.仅允许文字字母数字@ -_.;#（）[] 半角加号、全角加号以及字符中间有空格
     * */
    userLoginName: /^$|^[\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9_@.\[\]\-（）;#+＋]*$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9_@.\[\]\-（）;#+＋])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9_@.\[\]\-（）;#+＋ ])+([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9_@.\[\]\-（）;#+＋])+$/,
    /*
     * @description      通用
     * 1.仅允许文字字母数字.:：,_（）{}{}()０-９。·;#；‘  ’  "  "   “  ”  '  ' ?？！\!【】\[\]、……\$\&*-=——\| 《》^%@~<>￥/全角０-９ 空格　回车换行
     * */
    memoCharacterEnter: /^$|^([\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa-zA-Z0-9＋+\[\]\w\-\(\)\r\n.:：,_（）{}{}()０-９。·;#；\‘\’\"\"\“\”\'\'\?\？\！\!\【\】\[\]\、\……\$\&*-=——\| 《》^%@~<>￥\/\uff0c\u3002])*$/,
    /*
     * @description      姓名
     * 1.仅包含文字、字母、数字、下划线、-、·
     * */
    fullName: /^$|^[A-Za-z0-9\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFFa_-·]{1,}$/,
    /*
     * @description      各类以正整数为校验的字符  可扩展
     * 1.正整数
     * */
    positiveInt: /^$|^[1-9][\d]*$/,
    /*
     * @description      各类以非负整数为校验的字符  可扩展
     * 1.非负整数
     * */
    pureNum: /^$|^\d+$/,
    /*
    * @description     ip地址
    * 1.空或者0.0.0.0-255.255.255.255
        （地址0.0.0.0由于表示本地地址，只能作为源地址使用，不能作为目标地址，因此排除）
    * */
    ip: /^$|^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/,
    /*
     * @description       导出设置
     * 1.校验是否含有不合法字符
     * */
    exportCharacter: /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im,
    /*
     * @description     端口
     * 1、0-65535
     * */
    port: /^$|^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
    /*
     * @description     url
     * 1、支持http://(https://)+ip+端口
     * */
    url: /^$|^(http:|https:)\/\/(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/,
    /*
     * @description     主机名
     * 1、0-65535
     * */
    domain: /^$|^([\w-]+\.)+((com)|(net)|(org)|(gov\.cn)|(info)|(cc)|(com\.cn)|(net\.cn)|(org\.cn)|(name)|(biz)|(tv)|(cn)|(mobi)|(name)|(sh)|(ac)|(io)|(tw)|(com\.tw)|(hk)|(com\.hk)|(ws)|(travel)|(us)|(tm)|(la)|(me\.uk)|(org\.uk)|(ltd\.uk)|(plc\.uk)|(in)|(eu)|(it)|(jp))[\\\/]*/,
    /*
     * @description     文字
     *
     * */
    character: /^$|^\u0370-\u1BFF\u1E00-\u1FFF\u2150-\u218F\u2460-\u24FF\u2c00-\u2FFF\u3040-\u30FF\u3130-\u4DBF\u4E00-\uFDFF\uFE10-\uFE1F\uFE50-\uFEFF$/
};
