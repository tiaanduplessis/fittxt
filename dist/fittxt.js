var t=function(t,n){var e,o;return function(){var r=this,i=arguments;o?(clearTimeout(e),e=setTimeout(function(){Date.now()-o>=n&&(t.apply(r,i),o=Date.now())},n-(Date.now()-o))):(t.apply(r,i),o=Date.now())}},n=window.requestAnimationFrame||function(t){return setTimeout(t,0)};module.exports=function(e,o){void 0===o&&(o={});var r=o.factor;void 0===r&&(r=8);var i=o.min;void 0===i&&(i=Number.NEGATIVE_INFINITY);var a=o.max;void 0===a&&(a=Number.POSITIVE_INFINITY);var u=o.throttleTime;function c(t,e){var o=t.clientWidth;n(function(){t.style.fontSize=Math.max(Math.min(o/e,parseFloat(a)),parseFloat(i))})}void 0===u&&(u=200),Array.isArray(e)||(e=[e]),(e=e.map(function(t){return"string"==typeof t?document.querySelector(t):t})).forEach(function(n){var e=t(function(){return c(n,r)},u);window.addEventListener("resize",e),window.addEventListener("orientationchange",e),c(n,r)})};
//# sourceMappingURL=fittxt.js.map
