!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).businessTool={})}(this,function(e){"use strict";function t(e,t,n){var o=new Date;o.setDate(o.getDate()+n),document.cookie=e+"="+t+"; expires="+o.toUTCString()}function n(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function i(e){return window.scrollTo(0,e),e}const s=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};const o={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"Caps Lock",27:"Escape",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",42:"Print Screen",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"Right Click",96:"Numpad 0",97:"Numpad 1",98:"Numpad 2",99:"Numpad 3",100:"Numpad 4",101:"Numpad 5",102:"Numpad 6",103:"Numpad 7",104:"Numpad 8",105:"Numpad 9",106:"Numpad *",107:"Numpad +",109:"Numpad -",110:"Numpad .",111:"Numpad /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Num Lock",145:"Scroll Lock",182:"My Computer",183:"My Calculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};e.addClass=function(e,t){n(e,t)||(e.className+=" "+t)},e.deepClone=function n(o){let r;if(null==o||"object"!=typeof o)return o;if(o instanceof Date)return(r=new Date).setTime(o.getTime()),r;if(o instanceof Array){r=[];for(let e=0,t=o.length;e<t;e++)r[e]=n(o[e]);return r}if(o instanceof Object){r={};for(const e in o)o.hasOwnProperty(e)&&(r[e]=n(o[e]));return r}throw new Error("Unable to copy values! Its type isn't supported.")},e.digitUppercase=function(n){var t=["角","分"],o=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],r=[["元","万","亿"],["","拾","佰","仟"]],e=n<0?"欠":"";n=Math.abs(n);let a="";for(let e=0;e<t.length;e++)a+=(o[Math.floor(10*n*Math.pow(10,e))%10]+t[e]).replace(/零./,"");a=a||"整",n=Math.floor(n);for(let e=0;e<r[0].length&&0<n;e++){let t="";for(let e=0;e<r[1].length&&0<n;e++)t=o[n%10]+r[1][e]+t,n=Math.floor(n/10);a=t.replace(/(零.)*零$/,"").replace(/^$/,"零")+r[0][e]+a}return e+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},e.formatPassTime=function(e){var e=(new Date).getTime()-e,t=Math.floor(e/864e5),n=Math.floor(e/36e5),e=Math.floor(e/6e4),o=Math.floor(t/30),r=Math.floor(o/12);return r?r+"年前":o?o+"个月前":t?t+"天前":n?n+"小时前":e?e+"分钟前":"刚刚"},e.formatRemainTime=function(e){var t=new Date,e=new Date(e).getTime()-t.getTime();let n=0,o=0,r=0,a=0;return 0<=e&&(n=Math.floor(e/1e3/3600/24),o=Math.floor(e/1e3/60/60%24),r=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3%60)),n+"天 "+o+"小时 "+r+"分钟 "+a+"秒"},e.getBrowserInfo=function(){var n={},o=navigator.userAgent.toLowerCase(),r=[{name:"ie",value:/rv:([\d.]+)\) like gecko/},{name:"ie",value:/msie ([\d\.]+)/},{name:"edge",value:/edge\/([\d\.]+)/},{name:"firefox",value:/firefox\/([\d\.]+)/},{name:"opera",value:/(?:opera|opr).([\d\.]+)/},{name:"chrome",value:/chrome\/([\d\.]+)/},{name:"safari",value:/version\/([\d\.]+).*safari/}];for(let e=0,t=r.length;e<t;e++){var a=r[e],i=o.match(a.value);if(i){n.name=a.name,n.version=i[1];break}}return n},e.getCookieByName=function(t){var n=document.cookie.replace(/\s/g,"").split(";");for(let e=0;e<n.length;e++){var o=n[e].split("=");if(o[0]===t)return decodeURIComponent(o[1])}return""},e.getKeyName=function(e){return o[e]||(console.log("Unknow Key(Key Code:"+e+")"),"")},e.getOSInfo=function(){var e="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",t="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"";return/iphone/i.test(e)||/ipad/i.test(e)||/ipod/i.test(e)?"ios":/android/i.test(e)?"android":/win/i.test(t)&&/phone/i.test(e)?"windowsphone":/mac/i.test(t)?"macos":/win/i.test(t)?"windows":/linux/i.test(t)?"linux":void 0},e.getScrollTop=a,e.hasClass=n,e.hasSupportWebP=function(){return!![].map&&0===document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")},e.isColor=function(e){return/^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(e)},e.isEmail=function(e){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)},e.isEmptyObject=function(e){return!(!e||"object"!=typeof e||Array.isArray(e))&&!Object.keys(e).length},e.isIdCard=function(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)},e.isLeapYear=function(e){return 0==e%4&&(e%100!=0||e%400==0)},e.isPhoneNum=function(e){return/^(\+?0?86\-?)?1[3456789]\d{9}$/.test(e)},e.isSameDay=function(e,t){t=t||new Date;var n=e.getFullYear(),o=e.getMonth()+1,e=e.getDate(),r=t.getFullYear(),a=t.getMonth()+1;return e===t.getDate()&&o===a&&n===r},e.isUrl=function(e){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(e)},e.monthDays=function(e){var t=(e=new Date(e)).getFullYear(),e=e.getMonth()+1;return new Date(t,e,0).getDate()},e.parseQueryString=function(e=window.location.href){if(-1===e.indexOf("?"))return{};if(""===(e="?"===e[0]?e.substr(1):e.substring(e.lastIndexOf("?")+1)))return{};var n=e.split("&"),o={};for(let e=0,t=n.length;e<t;e++){var r=n[e].split("=");o[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||"")}return o},e.randomColor=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},e.randomNum=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.removeClass=function(e,t){n(e,t)&&(t=new RegExp("(\\s|^)"+e+"(\\s|$)"),e.className=e.className.replace(t," "))},e.removeCookiesByName=function(e){t(e,"1",-1)},e.replacePhoneNum=function(e){return e=e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")},e.requestAnimFrame=s,e.scrollTo=function e(t,n){if(n<0)i(t);else{const o=t-a();if(0!=o){const r=o/n*10;s(function(){Math.abs(r)>Math.abs(o)?i(a()+o):(i(a()+r),0<o&&a()>=t||o<0&&a()<=t||e(t,n-16))})}}},e.setCookie=t,e.setScrollTop=i,e.stringfyQueryString=function(e){if(!e)return"";var t=[];for(const o in e){var n=e[o];if(n instanceof Array)for(let e=0;e<n.length;++e)t.push(encodeURIComponent(o+"["+e+"]")+"="+encodeURIComponent(n[e]));else t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]))}return t.join("&")},e.timeLeft=function(i,s){if(i&&s){let e,t;e=i instanceof Date?i:new Date(i.replace(/-/g,"/"));i=(t=s instanceof Date?s:new Date(s.replace(/-/g,"/"))).getTime()-e.getTime();let n=0,o=0,r=0,a=0;return 0<=i&&(n=Math.floor(i/1e3/3600/24),o=Math.floor(i/1e3/60/60%24),r=Math.floor(i/1e3/60%60),a=Math.floor(i/1e3%60)),{d:n,h:o,m:r,s:a}}},e.trim=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},Object.defineProperty(e,"__esModule",{value:!0})});
