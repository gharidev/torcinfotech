!function(e,A,n){function s(e,A){return typeof e===A}function t(e){var A=c.className,n=f._config.classPrefix||"";if(p&&(A=A.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");A=A.replace(o,"$1"+n+"js$2")}f._config.enableClasses&&(A+=" "+n+e.join(" "+n),p?c.className.baseVal=A:c.className=A)}function i(e,A){if("object"==typeof e)for(var n in e)u(e,n)&&i(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),a=f[o[0]];if(2==o.length&&(a=a[o[1]]),void 0!==a)return f;A="function"==typeof A?A():A,1==o.length?f[o[0]]=A:(!f[o[0]]||f[o[0]]instanceof Boolean||(f[o[0]]=new Boolean(f[o[0]])),f[o[0]][o[1]]=A),t([(A&&0!=A?"":"no-")+o.join("-")]),f._trigger(e,A)}return f}var l=[],r=[],o={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var n=this;setTimeout(function(){A(n[e])},0)},addTest:function(e,A,n){r.push({name:e,fn:A,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},f=function(){};f.prototype=o,f=new f;var u,a,c=A.documentElement,p="svg"===c.nodeName.toLowerCase();u=s(a={}.hasOwnProperty,"undefined")||s(a.call,"undefined")?function(e,A){return A in e&&s(e.constructor.prototype[A],"undefined")}:function(e,A){return a.call(e,A)},o._l={},o.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),f.hasOwnProperty(e)&&setTimeout(function(){f._trigger(e,f[e])},0)},o._trigger=function(e,A){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(A)},0),delete this._l[e]}},f._q.push(function(){o.addTest=i}),f.addAsyncTest(function(){function n(n,e,o){function A(e){var A=!(!e||"load"!==e.type)&&1==a.width;i(n,"webp"===n&&A?new Boolean(A):A),o&&o(e)}var a=new Image;a.onerror=A,a.onload=A,a.src=e}var o=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],e=o.shift();n(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var A=0;A<o.length;A++)n(o[A].name,o[A].uri)})}),function g(){var e,A,n,o,a,t;for(var i in r)if(r.hasOwnProperty(i)){if(e=[],(A=r[i]).name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(n=0;n<A.options.aliases.length;n++)e.push(A.options.aliases[n].toLowerCase());for(o=s(A.fn,"function")?A.fn():A.fn,a=0;a<e.length;a++)1===(t=e[a].split(".")).length?f[t[0]]=o:(!f[t[0]]||f[t[0]]instanceof Boolean||(f[t[0]]=new Boolean(f[t[0]])),f[t[0]][t[1]]=o),l.push((o?"":"no-")+t.join("-"))}}(),t(l),delete o.addTest,delete o.addAsyncTest;for(var d=0;d<f._q.length;d++)f._q[d]();e.Modernizr=f}(window,document);