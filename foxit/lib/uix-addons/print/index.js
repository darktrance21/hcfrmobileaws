!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("UIExtension")):"function"==typeof define&&define.amd?define(["UIExtension"],t):"object"==typeof exports?exports.PrintUIXAddon=t(require("UIExtension")):e.PrintUIXAddon=t(e.UIExtension)}(self,(function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r,o=t.isTouchDevice=(r=" -webkit- -moz- -o- -ms- ".split(" "),!!("ontouchstart"in window||navigator.maxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch)||(i=["(",r.join("touch-enabled),("),"heartz",")"].join(""),!!window.matchMedia&&window.matchMedia(i).matches)),a=navigator.userAgent.toLowerCase(),s=t.isMac=/macintosh|mac os x/.test(a),l=t.isIOS=/ipad|iphone|ipod/.test(a),p=t.isIPHONE=/iphone/.test(a),u=t.isIPAD=/ipad/.test(a),d=t.isIPOD=/ipod/.test(a),c=t.isAndroid=/android/.test(a),f=t.isBlackBerry=/blackberry/.test(a),g=t.isWebOS=/webos/.test(a),m=t.isKindle=/silk|kindle/.test(a),v=t.isTablet=/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(a),h=t.isMobile=!v&&(/mobile/.test(a)||l||c||f||g||m),b=t.isDesktop=!(h||v||c||p||u||d||m||g),_=t.isMiPad=/(MI(.*|\s*)PAD).*/i.test(a),y=t.isXiaomi=!_&&/MI(\s+|\d+?|HM|xiaomi).*/i.test(a),E=t.isHuawei=/HUAWEI/i.test(navigator.userAgent),O=t.isLinux=/Linux/i.test(a),w=t.isWindows=!O&&/Windows(\s+NT)?/i.test(a),D=t.isMacOS=/MacIntosh|(mac os)/i.test(a);t.DEVICE_DETACTION={mac:s,ios:l,iphone:p,ipad:u,ipod:d,android:c,blackberry:f,webos:g,kindle:m,tablet:v,mobile:h,desktop:b,xiaomi:y,huawei:E,touch:o,linux:O,windows:w,macos:D}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=navigator.userAgent.toLowerCase(),r=/opera|opr/.test(i),o=/msie/.test(i),a=/trident/.test(i),s=/\sapplewebkit\//.test(i),l=/chrome/.test(i),p=/safari/.test(i),u=/firefox/.test(i),d=/edg\//.test(i),c=t.isIE=(a||o)&&!r&&"msSaveBlob"in navigator,f=t.isIEAtLeast11=!o&&a&&!r,g=t.isEdge=i.indexOf("edge")>-1,m=t.isOpera=r,v=t.isWebkit=s,h=t.isChromiumEdge=!m&&l&&!!window.chrome&&d,b=t.isChrome=!m&&l&&!!window.chrome&&!d,_=t.isSafari=!/huawei/.test(i)&&!m&&p&&!l,y=t.isGecko="Gecko"==navigator.product&&!v&&!m,E=t.isFirefox=!b&&!m&&!_&&u,O=t.isMaxthon=/maxthon/.test(i),w=t.isQuirksMode="BackCompact"==document.CompactMode,D=t.isQQ=/tencenttraveler/.test(i)||/qqbrowser/.test(i),P=t.isSougou=/metasr/.test(i)||/sogou/.test(i),C=t.isBaidu=/baidubrowser/.test(i),I=t.isUC=/ucbrowser/.test(i),T=t.isLiebao=/liebao/.test(i),A=t.isMiuiBrowser=/miuibrowser/.test(i),x=t.isHuaweiBrowser=/huaweibrowser/.test(i)||/huaweialp/.test(i),N=t.is360=function(){if(D||I||P||A||T||O)return!1;if(-1===i.indexOf("chrome"))return!1;var e=function(e,t){var n=navigator.mimeTypes;for(var i in n)if(n[i][e]==t)return!0;return!1}("type","application/vnd.chromium.remoting-viewer");return!window.chrome||e}();t.isIE8=!!document.documentMode&&document.documentMode<8,t.isIE8Compact=8==document.documentMode,t.isIE9Compact=9==document.documentMode,t.isIE10Compact=10==document.documentMode,t.BROWSER_DETECTION={ie:c,ieAtLeast11:f,edge:g,"chromium-edge":h,opera:m,webkit:v,chrome:b,safari:_,gecko:y,firefox:E,maxthon:O,quirksMode:w,"quirks-mode":w,qq:D,sougou:P,baidu:C,liebao:T,uc:I,miui:A,huawei:x,360:N}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),r=l(n(4)),o=l(n(5)),a=l(n(8)),s=l(n(12));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var r=n[i],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}}(e,t))}var c=i.Controller,f=function(e){function t(){return p(this,t),u(this,e.apply(this,arguments))}return d(t,e),t.getName=function(){return"print"},t.getLoader=function(){return r.default},t.initOnLoad=function(){var e=i.modular.module("print",[]);e.registerController(o.default),e.registerPreConfiguredComponent("contextmenu-item-print",{template:'<contextmenu-item name="fv--contextmenu-item-print" @controller="print:ShowPrintDialogController" shortcut="Ctrl + P" @hide-on-sr>print:button-tooltip.title</contextmenu-item>'}),e.registerPreConfiguredComponent("print-button",{template:'<xbutton @tooltip name="print-button" icon-class="fv__icon-toolbar-print" @controller="print:ShowPrintDialogController">print:button-tooltip.title</xbutton>',config:[{target:"print-button",tooltip:{title:"print:button-tooltip.title"}}]});var t=function(e){function t(){return p(this,t),u(this,e.apply(this,arguments))}return d(t,e),t.prototype.mounted=function(){var e=this.component.findClosestComponent((function(e){return"print-dialog"===e.name}));this.printDialogController=e.controller},t}(c);e.registerFragment("print-dialog",{template:(0,a.default)(),config:[{target:"print-dialog",callback:s.default},{target:"fv--print-hide-header-footer",callback:function(e){function t(){return p(this,t),u(this,e.apply(this,arguments))}return d(t,e),t.prototype.mounted=function(){var t=this;e.prototype.mounted.call(this),this.component.on("change",(function(){t.printDialogController.hideHeaderFooter=t.component.getValue()})),this.component.setValue(this.printDialogController.hideHeaderFooter)},t}(t)}]})},t}(i.UIXAddon);t.default=f},function(e,t){e.exports=null},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));n(6);var o=n(7),a=n(1),s=n(2);function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var r=n[i],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}}(e,t))}var p=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return l(t,e),t.getName=function(){return"ShowPrintDialogController"},t.prototype.mounted=function(){var t=this;e.prototype.mounted.call(this);this.getPDFUI().getKeyboardEventBinder(r.UIConsts.PDFUI_BINDER).then((function(e){try{e.registerKeybinding("print-command",a.isMac?"Meta+P":"Ctrl+P")}catch(e){return}t.addDestroyHook(e.before("print-command",(function(e){e.preventDefault(),t.component.isLocked||t.handle()})))}))},t.prototype.handle=function(){var e=this;(0,o.supportedPrint)()?(this.getPDFUI().activeElement(null),this.getPDFUI().getPDFViewer().then((function(t){var n=e.getComponentByName("print-dialog"),i=n.getComponentByName("fv--print-header-footer-container");s.isChrome||s.isFirefox||s.isChromiumEdge?(i.show(),n.element.querySelector("[name=fv--print-hide-header-footer]").checked=t.getPrintSetting("showHeaderFooter")):i.hide();n.element.querySelector(".fv__ui-quality-alert").style.display="none",n.getComponentByName("print-dropdown-quality").setValue(t.getPrintSetting("quality")),n.open(document.body)}))):this.getPDFUI().alert("print:dialog.unsupported.message","print:dialog.unsupported.title")},i(t,null,[{key:"permission",get:function(){return 4}}]),t}(r.Controller);t.default=p},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportedPrint=function(){return!i.isMobile||r.isChrome||r.isSafari};var i=n(1),r=n(2)},function(e,t,n){n(9);e.exports=function(e){"use strict";e=e||{};return'<layer name="print-dialog" class="fv__ui-print-layer center" append-to="body" @draggable>\n    <layer-header title="print:dialog.printDialog.title"></layer-header>\n    <div class="fv__ui-print-dialog" @stop-drag>\n        <div class="fv__ui-print-dialog-body">\n            <div class="fv__ui-print-item" name="range-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.range"></div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="all"/><span data-i18n="print:dialog.printDialog.all"></span></label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="current"/><span data-i18n="print:dialog.printDialog.current"></span></label>\n                </div>\n                <div class="fv__ui-print-range fv__ui-force-hide">\n                    <label>\n                        <input name="print-range" type="radio" value="fromTo"/>\n                        <span data-i18n="print:dialog.printDialog.from"></span>\n                        <input class="print-common-input" type="number" min="1" name="range-from"/>\n                        <span data-i18n="print:dialog.printDialog.to"></span>\n                        <input class="print-common-input" type="number" name="range-to"/>\n                    </label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="assign"/><span data-i18n="print:dialog.printDialog.assign"></span><input class="print-common-input" type="text" name="range-assign"/><span>1,2,5-8</span></label>\n                </div>\n            </div>\n            <div class="fv__ui-print-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.comments"></div>\n                <div class="fv__ui-print-comments">\n                    <label><input name="print-comments" type="checkbox" value=""/><span data-i18n="print:dialog.printDialog.printComments"></span></label>\n                </div>\n            </div>\n            <div class="fv__ui-print-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.moreOptions"></div>\n                <div class="fv__ui-print-more-options" name="fv--print-page-size-container">\n                    <div class="fv__ui-print-item-title-sub" data-i18n="print:dialog.printDialog.quality"></div>\n                    <slider class="fv__print-quality" unit=\'%\' max="1000" min="100" step="1" value="100"\n                            name="print-dropdown-quality" @stop-drag></slider>\n                </div>\n                <div class="fv__ui-quality-alert" data-i18n="print:dialog.printDialog.alert"></div>\n                <div  name="fv--print-header-footer-container" class="fv__ui-print-more-options">\n                    <label>\n                        <input name="fv--print-hide-header-footer" type="checkbox">\n                        <span data-i18n="print:dialog.printDialog.headerAndFooter"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class="fv__ui-print-dialog-footer">\n            <div class="fv__ui-print-dialog-btns">\n                <button class="fv__ui-print-btn fv__ui-print-dialog-cancel" data-i18n="print:dialog.cancel" name="print-dialog-close-btn"></button>\n                <button class="fv__ui-print-btn fv__ui-print-dialog-ok" data-i18n="print:dialog.ok" name="print-dialog-ok-btn"></button>\n            </div>\n        </div>\n    </div>\n</layer>','<layer name="print-dialog" class="fv__ui-print-layer center" append-to="body" @draggable>\n    <layer-header title="print:dialog.printDialog.title"></layer-header>\n    <div class="fv__ui-print-dialog" @stop-drag>\n        <div class="fv__ui-print-dialog-body">\n            <div class="fv__ui-print-item" name="range-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.range"></div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="all"/><span data-i18n="print:dialog.printDialog.all"></span></label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="current"/><span data-i18n="print:dialog.printDialog.current"></span></label>\n                </div>\n                <div class="fv__ui-print-range fv__ui-force-hide">\n                    <label>\n                        <input name="print-range" type="radio" value="fromTo"/>\n                        <span data-i18n="print:dialog.printDialog.from"></span>\n                        <input class="print-common-input" type="number" min="1" name="range-from"/>\n                        <span data-i18n="print:dialog.printDialog.to"></span>\n                        <input class="print-common-input" type="number" name="range-to"/>\n                    </label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="assign"/><span data-i18n="print:dialog.printDialog.assign"></span><input class="print-common-input" type="text" name="range-assign"/><span>1,2,5-8</span></label>\n                </div>\n            </div>\n            <div class="fv__ui-print-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.comments"></div>\n                <div class="fv__ui-print-comments">\n                    <label><input name="print-comments" type="checkbox" value=""/><span data-i18n="print:dialog.printDialog.printComments"></span></label>\n                </div>\n            </div>\n            <div class="fv__ui-print-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.moreOptions"></div>\n                <div class="fv__ui-print-more-options" name="fv--print-page-size-container">\n                    <div class="fv__ui-print-item-title-sub" data-i18n="print:dialog.printDialog.quality"></div>\n                    <slider class="fv__print-quality" unit=\'%\' max="1000" min="100" step="1" value="100"\n                            name="print-dropdown-quality" @stop-drag></slider>\n                </div>\n                <div class="fv__ui-quality-alert" data-i18n="print:dialog.printDialog.alert"></div>\n                <div  name="fv--print-header-footer-container" class="fv__ui-print-more-options">\n                    <label>\n                        <input name="fv--print-hide-header-footer" type="checkbox">\n                        <span data-i18n="print:dialog.printDialog.headerAndFooter"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class="fv__ui-print-dialog-footer">\n            <div class="fv__ui-print-dialog-btns">\n                <button class="fv__ui-print-btn fv__ui-print-dialog-cancel" data-i18n="print:dialog.cancel" name="print-dialog-close-btn"></button>\n                <button class="fv__ui-print-btn fv__ui-print-dialog-ok" data-i18n="print:dialog.ok" name="print-dialog-ok-btn"></button>\n            </div>\n        </div>\n    </div>\n</layer>'}},function(e,t,n){"use strict";e.exports=n(10)},function(e,t,n){"use strict";(function(t){
/*! art-template@runtime | https://github.com/aui/art-template */
var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},i=Object.create(n),r=/["&'<>]/;i.$escape=function(e){return function(e){var t=""+e,n=r.exec(t);if(!n)return e;var i="",o=void 0,a=void 0,s=void 0;for(o=n.index,a=0;o<t.length;o++){switch(t.charCodeAt(o)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==o&&(i+=t.substring(a,o)),a=o+1,i+=s}return a!==o?i+t.substring(a,o):i}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},i.$each=function(e,t){if(Array.isArray(e))for(var n=0,i=e.length;n<i;n++)t(e[n],n);else for(var r in e)t(e[r],r)},e.exports=i}).call(this,n(11))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=n(13);function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var r=n[i],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}}(e,t))}var s=r.PDFViewCtrl.Deps.jQuery,l=(r.PDFViewCtrl.Events,function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return i.startIndex=0,i.endIndex=0,i.pageCount=0,i.fromToArray=[],i}return a(t,e),t.prototype.mounted=function(){var t=this;e.prototype.mounted.call(this),this.$closeBtn=s(this.component.getComponentByName("print-dialog-close-btn").element),this.$okBtn=s(this.component.getComponentByName("print-dialog-ok-btn").element),this.$range=s(this.component.getComponentByName("range-item").element),this.$rangeFrom=s(this.component.getComponentByName("range-from").element),this.$rangeTo=s(this.component.getComponentByName("range-to").element),this.$rangeAssign=s(this.component.getComponentByName("range-assign").element),this.$printComments=s(this.component.getComponentByName("print-comments").element),this.component.on(o.COMPONENT_EVENTS.SHOWN,(function(){t.getPDFUI().getPDFViewer().then((function(e){t.hideHeaderFooter=e.getPrintSetting("hideHeaderFooter"),t.pageSize=e.getPrintSetting("pageSize")})),t.getPDFUI().getCurrentPDFDoc().then((function(e){t.pageCount=e.getPageCount()}))})),this.component.on(o.COMPONENT_EVENTS.HIDDEN,(function(){[t.$rangeFrom,t.$rangeTo,t.$rangeAssign].forEach((function(e){return e.removeClass("fv__print-error")}))})),this._bindEvent()},t.prototype._bindEvent=function(){var e=this,t=this,n=this.getPDFUI();this.$range.find("[value='current']").prop({checked:"checked"}),o(),a(),l(),this.$closeBtn.on("click",(function(){e.component.hide()})),this.$range.find("[name='print-range']").on("change",(function(t){var n=t.target.value;switch(l(),n){case"fromTo":e.$rangeFrom.prop({disabled:!1}),e.$rangeTo.prop({disabled:!1}),a();break;case"assign":e.$rangeAssign.prop({disabled:!1}),o();break;default:a(),o()}})),this.$rangeFrom.on("input",(function(n){var i=n.target.value;i>t.pageCount?e.$rangeFrom.val(t.pageCount):i>t.$rangeTo.val()&&t.$rangeTo.val(i)})),this.$rangeTo.on("input",(function(n){n.target.value>t.pageCount&&e.$rangeTo.val(t.pageCount)})),this.$okBtn.on("click",(function(){n.getPDFDocRender().then((function(n){var r={fromToArray:[]},o=r.rangeType=e.$range.find("[name='print-range']:checked").val();switch(o){case"all":r.startIndex=0,r.endIndex=t.pageCount-1;break;case"current":r.startIndex=n.getCurrentPageIndex(),r.endIndex=r.startIndex;break;case"fromTo":if(r.startIndex=t.$rangeFrom.val()-1,r.endIndex=t.$rangeTo.val()-1,r.startIndex<0||r.startIndex>t.pageCount-1)return void e.showError(t.$rangeFrom);if(r.endIndex<0||r.endIndex>t.pageCount-1)return void e.showError(t.$rangeTo);break;default:var a=t.$rangeAssign.val();if(new RegExp(/[^\d\-,]/).test(a))return void e.showError(t.$rangeAssign);for(var s=a.split(","),l=0;l<s.length;l++){var p=s[l];if(p.indexOf("-")>-1){var u=p.split("-"),d=i(u,3),c=d[0],f=d[1];if(d[2]||""===f)return void e.showError(t.$rangeAssign);var g=Math.min(+c,+f),m=Math.max(+c,+f);if(g<1||m>t.pageCount)return void e.showError(t.$rangeAssign);r.fromToArray.push([g,m])}else{if(p<1||p>t.pageCount)return void e.showError(t.$rangeAssign);r.fromToArray.push([+p,+p])}}}var v=e.$printComments.prop("checked");r.printType=v?["page","annot"]:["page"];var h=0;if("assign"===o)for(var b=0;b<r.fromToArray.length;b++){h+=r.fromToArray[b][1]-r.fromToArray[b][0]+1}else h=r.endIndex-r.startIndex+1;r.total=h;var _=e.component.getComponentByName("print-dropdown-quality").getValue();r.quality=_,r.hideHeaderFooter=!e.component.element.querySelector("[name=fv--print-hide-header-footer]").checked,e.component.hide(),e.getPDFUI().printPDFDocument(r)}))}));var r=this.component.getComponentByName("print-dropdown-quality");function o(){t.$rangeFrom.prop({disabled:!0}),t.$rangeTo.prop({disabled:!0})}function a(){t.$rangeAssign.prop({disabled:!0})}function l(){s(".fv__print-error").removeClass("fv__print-error")}r.on("change",(function(t){var n=s(e.component.element).find(".fv__ui-quality-alert");r.getValue()>500?n.show():n.hide()}))},t.prototype.showError=function(e){e.addClass("fv__print-error")},t}(r.Controller));t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ORIENTATION_VERTICAL="vertical",t.ORIENTATION_HORIZONTAL="horizontal",t.ROOT_MODULE_NAME="",t.WEBPDF_VIEWER_COMPONENT_NAME="pdf-viewer",t.NAMESPACE_SEPERATOR=":",t.PDFUI_BINDER="pdfui-event-binder",t.MODAL_LAYER_BINDER="pdfui-default-modal-binder",t.KEY_MAP_OPEN_SIDEBAR="pdfui-open-sidebar",t.KEY_MAP_CLOSE_SIDEBAR="pdfui-close-sidebar",t.KEY_MAP_OPEN_QUICK_SEARCH="pdfui-open-quick-search",t.KEY_MAP_EXIT_TO_HAND_STATE="pdfui-exit-to-hand-state",t.KEY_MAP_EXIT_LAYER="pdfui-exit-modal-layer",t.KEY_MAP_COPY_ANNOT="pdfui-copy-annot",t.COMPONENT_BROADCAST_LOCALIZE="localize",t.FRAGMENT_ACTION={BEFORE:"before",AFTER:"after",APPEND:"append",PREPEND:"prepend",INSERT:"insert",FILL:"fill",REPLACE:"replace",EXT:"ext",REMOVE:"remove"},t.FRAGMENT_SELECT_HANDLER={THROW_ERROR_IF_NOT_FOUND:"throw",LOG_MESSAGE_IF_NOT_FOUND:"warn",IGNORE_IF_NOT_FOUND:"ignore"},t.COMPONENT_EVENTS={DISABLE:"disable",ENABLE:"enable",ACTIVE:"active",DEACTIVE:"deactive",SHOWN:"shown",HIDDEN:"hidden",DESTROYED:"destroyed",REMOVED:"removed",CHILD_INSERTED:"child_inserted",INSERTED:"inserted",MOUNTED:"mounted",CLOSED:"closed",EXPAND:"expand",BEFORE_EXPAND:"before_expand",RESIZESTART:"resizestart",RESIZE:"resize",COLLAPSE:"collapse"}}]).default}));