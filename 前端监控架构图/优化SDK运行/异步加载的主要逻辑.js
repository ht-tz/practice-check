/**
 * 1. 新增的脚本默认会带async属性，所以会异步加载, 不会阻塞页面的渲染逻辑。一定程度上提升首屏体验
 */


;(function(cdnPath, bid , document, globalName ){
    const script = document.createElement('script');
    script.src = cdnPath + '?bid='+bid+'globalName='+globalName
    script.crossOrigin = 'anonymous'
    document.getElementsByTagName('head')[0].appendChild(script);
})("xxxx,'test",document,'monitorSdk')