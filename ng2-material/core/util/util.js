var lang_1 = require("angular2/src/facade/lang");
var lang_2 = require("angular2/src/facade/lang");
function debounce(func, wait, scope) {
    var timer;
    return function debounced() {
        var context = scope, args = Array.prototype.slice.call(arguments);
        clearTimeout(timer);
        timer = setTimeout(function () {
            timer = undefined;
            func.apply(context, args);
        }, wait || 10);
    };
}
exports.debounce = debounce;
function throttle(func, delay, scope) {
    var recent;
    return function throttled() {
        var context = scope;
        var args = arguments;
        var now = new Date().getTime();
        if (!recent || (now - recent > delay)) {
            func.apply(context, args);
            recent = now;
        }
    };
}
exports.throttle = throttle;
function rAF(callback) {
    window.requestAnimationFrame(callback);
}
exports.rAF = rAF;
function parseTabIndexAttribute(attr) {
    return lang_1.isPresent(attr) ? lang_2.NumberWrapper.parseInt(attr, 10) : 0;
}
exports.parseTabIndexAttribute = parseTabIndexAttribute;
//# sourceMappingURL=util.js.map