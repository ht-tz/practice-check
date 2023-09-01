export function printArray(obj) {
	if (Array.isArray(obj)) {
		//判断是不是数组
		return obj;
	}
	for (var k in obj) {
		//遍历对象和数组
		if (typeof obj[k] === 'object') {
			return printArray(obj[k]);
		}
	}
}
/**
 * 函数防抖
 */
export function debounce(fn, delay) {
	// 记录上一次的延时器
	var timer = null;
	var _delay = delay || 200;
	return function() {
		var args = arguments;
		var that = this;
		// 清除上一次延时器
		clearTimeout(timer);
		timer = setTimeout(function() {
			fn.apply(that, args);
		}, _delay);
	};
}
