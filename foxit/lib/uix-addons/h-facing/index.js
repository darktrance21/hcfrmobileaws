!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("UIExtension")):"function"==typeof define&&define.amd?define(["UIExtension"],t):"object"==typeof exports?exports.HFacingViewModeAddon=t(require("UIExtension")):e.HFacingViewModeAddon=t(e.UIExtension)}(self,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));n(2);var i=s(n(3)),r=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var i=n[o],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&void 0===e[i]&&Object.defineProperty(e,i,r)}}(e,t))}o.Controller,o.PDFViewCtrl.Events;var c=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return d(t,e),t.getName=function(){return"h-facing"},t.getLoader=function(){return i.default},t.initOnLoad=function(){o.modular.module("h-facing",[]).registerPreConfiguredComponent("h-facing-button",{template:'\n            <xbutton @tooltip name="h-facing-button" icon-class="fv__icon-toolbar-h-facing-page">h-facing:buttons.title</xbutton>\n            ',config:[{target:"h-facing-button",tooltip:{title:"h-facing:buttons.title"},callback:function(e){function t(n){return l(this,t),a(this,e.call(this,n,r.default.getName()))}return d(t,e),t}(o.controllers.ViewModeController)}]})},t.prototype.init=function(t){e.prototype.init.call(this,t),t.getPDFViewer().then((function(e){e.getViewModeManager().register(r.default)}))},t}(o.UIXAddon);t.default=c},function(e,t,n){},function(e,t){e.exports=null},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var i=n[o],r=Object.getOwnPropertyDescriptor(t,i);r&&r.configurable&&void 0===e[i]&&Object.defineProperty(e,i,r)}}(e,t))}var r=o.PDFViewCtrl,s=o.PDFViewCtrl.Deps,l=(o.UIEvents,s.jQuery),a=o.PDFViewCtrl.Events,d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return o.pdfViewer=n.pdfViewer,o.start=o.start.bind(o),o.end=o.end.bind(o),o.mousedown=o.mousedown.bind(o),o.mouseup=o.mouseup.bind(o),o.keydown=o.keydown.bind(o),o.keyup=o.keyup.bind(o),o.panning=!1,o.panType=null,o.animating=!1,o.lastElement=null,o.appendLast=o.appendLast.bind(o),o}return i(t,e),t.getName=function(){return"h-facing-view-mode"},t.prototype.getItems=function(){return this.docRender.$container.find(".fv__pdf-view-mode-item")},t.prototype.disableScroll=function(){this.docRender.pdfViewer.eventEmitter.emit(a.disableScroll)},t.prototype.enableScroll=function(){this.docRender.pdfViewer.eventEmitter.emit(a.enableScroll)},t.prototype.into=function(){var e=this;this.renderSize(),this.disableScroll();var t=this.constructor.getName(),n=["<style>",".fv__pdf-viewer,.fv__pdf-viewer-layout,.fv__pdf-viewer-container,.fv__pdf-doc-layout{","height:100%;","}","."+t+"{","display:flex;","width:fit-content;","min-height:100%;","}","."+t+" .fv__pdf-view-mode-item{","display: -webkit-box;","display: -ms-flexbox;","display: -webkit-flex;","display: flex;","align-items:center;","}","."+t+" .fv__pdf-view-mode-item:nth-child(2n+1){","margin-right:10px;","-ms-justify-content: end;","-webkit-justify-content: end;","justify-content: end;","}","."+t+" .fv__pdf-view-mode-item:nth-child(2n){","-ms-justify-content: flex-start;","-webkit-justify-content: flex-start;","justify-content: flex-start;","}","."+t+" .fv__pdf-page-layout{","margin:0;","}","."+t+" .fv__pdf-page-layout.fv__rendering{","min-width:128px;","}","</style>"].join("");this.appendLast(),this.$style=l(n),this.docRender.pagesRender.$ui.append(this.$style),this.docRender.$container.addClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-y":"unset","overflow-x":"scroll"});var o=this.docRender.viewerRender.scrollWrap;this.scrollHost=o.getScrollHost(),this.scrollHost.addEventListener("mousedown",this.mousedown),l(window).on("keydown",this.keydown),l(window).on("keyup",this.keyup),l(window).on("mouseup",this.mouseup),this.pdfViewer.eventEmitter.on(a.fitWidthResizeViewport,this.resize=function(){e.renderSize()}),this.pdfViewer.eventEmitter.on(a.zoomToSuccess,this.zoom=function(){e.renderSize()}),this.pdfViewer.eventEmitter.on(a.pageAdded,this.appendLast),this.pdfViewer.eventEmitter.on(a.pageRemoved,this.appendLast);var i=this.hammer=new Hammer.Manager(this.scrollHost,{recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_ALL}]]}),r=0,s=0;i.on("panstart",(function(){var t=e.allInVisible();e.leftIn=t.leftIn,e.rightIn=t.rightIn,e.panning=!0})),i.on("panmove",(function(t){if(e.panning){var n=t.deltaX,o=t.deltaY,i=e.docRender.doc.getPageCount(),l=e.docRender.viewerRender.scrollWrap,a=l.getScrollLeft(),d=e.scrollHost.clientWidth+a,c=(l.getScrollTop(),e.docRender.getCurrentPageIndex()),f=c%2==0?c:c-1,u=f+1,h=e.getItems(),p=h.get(f).offsetLeft,g=null,v=r-n,m=s-o;g=i%2==1&&u>=i?e.lastElement.get(0).offsetLeft+e.lastElement.width():h.get(u).offsetLeft+h.eq(u).width(),r=n,s=o;var y=g-d,w=p-a;v>=0&&v>y&&(v=y),v<0&&v<w&&(v=w),l.scrollBy(v,m)}})),i.on("panend",(function(){1===e.panType?e.toNext():2===e.panType&&e.toPrev(),e.panning=!1,e.panType=null,r=0,s=0})),i.on("panleft",(function(){e.panning&&e.rightIn&&!e.animating&&(e.panType=1)})),i.on("panright",(function(){e.panning&&e.leftIn&&!e.animating&&(e.panType=2)})),this._unwatchScrollEvent=o.addScrollEventListener((function(){clearTimeout(e.scrollEventTimer),e.scrollEventTimer=setTimeout((function(){var t=e.docRender.pagesRender;t&&t.renderVisiblePages().then((function(){e.docRender.setCurrentPageIndex(e.getCurrentPageIndex())}),(function(){}))}),30)}))},t.prototype.appendLast=function(){var e=this.docRender.doc.getPageCount();e%2==1?(this.lastElement=l("<div class='fv__pdf-view-mode-item-blank'></div>"),this.getItems().eq(e-1).after(this.lastElement)):this.lastElement&&(this.lastElement.remove(),this.lastElement=null)},t.prototype.renderViewMode=function(e,t,n,o,i){var r=this.docRender.pagesRender.$ui.height(),s=e.index,l=this.scrollHost,a=l.clientWidth;l.clientHeight;if(s%2==0){var d=this.docRender.doc.getPageCount()-1,c=o,f=this.getItems().eq(s),u=this.getItems().eq(s+1),h=this.pdfViewer.getPDFPageRender(s+1),p=h?h.getShowWidth():0;this.lastElement&&s===d&&(p=o),a-(c+p+10)>0?(f.css({width:a/2-5}),u.css({width:a/2-5}),s===d&&this.lastElement&&this.lastElement.css({width:a/2-5})):(f.css({width:""}),u.css({width:""}),s===d&&this.lastElement&&this.lastElement.css({width:o}))}},t.prototype.renderSize=function(){var e=this.docRender.getCurrentPageIndex();this.getVisibleIndexes().length>1&&e%2==1&&this.docRender.goToPage(e-1,{x:0,y:0}),this.docRender.goToPage(e,{x:0,y:0})},t.prototype.mousedown=function(e){var t=this.scrollHost,n=l(t).offset(),o=n.top,i=n.left,r=i+t.clientWidth,s=o+t.clientHeight;this.dragging=!0;var a=e.clientX,d=e.clientY;return this.scrollType=i<=a&&a<=r&&o<=d&&d<=s?0:r<a&&o<d?1:2,this.client={x:a,y:d},this.start(),!1},t.prototype.mouseup=function(e){this.dragging,this.client,this.panning;2===this.scrollType&&this.end()},t.prototype.keydown=function(e){var t=e.keyCode;if(37!==t&&39!==t&&17!==t||this.start(),35===t||36===t||34===t||33===t)return!1},t.prototype.keyup=function(e){var t=e.keyCode;if(37!==t&&39!==t&&17!==t||this.end(),e.preventDefault(),e.stopPropagation(),33===t&&this.toPrev(),34===t&&this.toNext(),35===t){var n=this.docRender.doc.getPageCount()-1;n=n%2==0?n:n-1,this.docRender.goToPage(n,{x:0,y:0})}36===t&&this.docRender.goToPage(0,{x:0,y:0})},t.prototype.start=function(){this.scrollPageIndex=this.docRender.getCurrentPageIndex()},t.prototype.end=function(){var e=this.getVisibleIndexes();if(!(e.length<=2&&e[0]%2==0)){var t=e.indexOf(this.scrollPageIndex),n=e.length-1,o=null;t>-1?t<n/2?(o=(o=e[n])%2==0?o:o-1,this.docRender.goToPage(o,{x:0,y:0})):(o=(o=e[0])%2==0?o:o-1,this.docRender.goToPage(o,{x:0,y:0})):e[0]>t?(o=(o=e[n])%2==0?o:o-1,this.docRender.goToPage(o,{x:0,y:0})):e[n]<t&&(o=(o=e[0])%2==0?o:o-1,this.docRender.goToPage(o,{x:0,y:0}))}},t.prototype.toNext=function(){var e=this.docRender.getCurrentPageIndex();this.animation(e+1,!1)},t.prototype.toPrev=function(){var e=this.docRender.getCurrentPageIndex();this.animation(e-1,!0)},t.prototype.animation=function(e,t){var n=this.docRender,o=n.doc.getPageCount();if(!(e<0||e>=o)){var i=null,r=null;e%2==0?(i=e,r=e+1):(i=e-1,r=e);var s=n.viewerRender.scrollWrap,l=this.scrollHost.clientWidth,a=this.getItems(),d=(a.get(i).offsetLeft,a.get(r).offsetLeft+a.eq(r).width()),c=s.getScrollLeft(),f=s.getScrollTop(),u=t?-l:l,h=30,p=d-c;!t&&p>l&&(u=p),t&&p<0&&(u-=p);var g=u/h;this.animating=!0;var v=this,m=setInterval((function(){h>0?(c+=g,s.scrollTo(c,f),h--):(clearInterval(m),v.animating=!1,n.setCurrentPageIndex(e))}),10)}},t.prototype.allInVisible=function(){var e=this.docRender.doc.getPageCount(),t=this.docRender.getCurrentPageIndex(),n=null,o=null;t%2==0?(n=t,o=t+1):(n=t-1,o=t);var i=this.getItems(),r=this.docRender.viewerRender.scrollWrap,s=this.scrollHost.clientWidth,l=this.scrollHost.clientHeight,a=(r.getScrollTop(),r.getScrollLeft()),d=a+s,c=i.get(n).offsetLeft,f=null;f=e%2==1&&o>=e?this.lastElement.get(0).offsetLeft+this.lastElement.width():i.get(o).offsetLeft+i.eq(o).width();var u=!1,h=!1;return Math.abs(a-c)<=1&&(u=!0),Math.abs(d-f)<=1&&(h=!0),{leftIn:u,rightIn:h}},t.prototype.jumpToPage=function(e,t){var n=t.x,o=void 0===n?0:n,i=t.y,r=void 0===i?0:i,s=this.getItems();e>=s.length?e=s.length-1:e<0&&(e=0);var l=s[e],a=l.offsetLeft+o,d=l.offsetTop+r;this.docRender.viewerRender.scrollWrap.scrollTo(a,d)},t.prototype.getCurrentPageIndex=function(){for(var e=this.docRender.$ui,t=this.getItems(),n=this.docRender.viewerRender.scrollWrap,o=(n.getScrollTop(),e.height(),n.getScrollLeft()),i=o+e.width(),r=void 0,s=[],a=0;a<t.length;a++){var d=t[a],c=d.offsetLeft,f=l(d).width(),u=c+f;c<=o&&u>o&&u<i?s.push({index:a,width:u-o}):c>=o&&u<i?s.push({index:a,width:f}):c<=o&&u>i?r=a:c>=o&&c<i&&u>i&&s.push({index:a,width:i-c})}if(null==r)for(var h=0,p=0;p<s.length;p++)s[p].width>h&&(h=s[p].width,r=s[p].index);return r},t.prototype.getFitHeight=function(e){var t=this.docRender.viewerRender.scrollWrap;return t.getHeight()-t.getScrollOffsetTop()},t.prototype.getFitWidth=function(e){var t=this.docRender.viewerRender.scrollWrap;return(t.getWidth()-t.getScrollOffsetLeft())/2-5},t.prototype.getVisibleIndexes=function(){var e=this.docRender.viewerRender.scrollWrap,t=e.getScrollLeft()-e.getScrollOffsetLeft(),n=this.docRender.$ui.width(),o=t+n,i=[];return this.getItems().each((function(e,n){var r=n.offsetLeft,s=n.offsetWidth+r;t<s&&o>r&&i.push(e)})),i},t.prototype.getNextPageIndex=function(){var e=this.docRender.doc.getPageCount()-1,t=this.docRender.getCurrentPageIndex(),n=this.getVisibleIndexes(),o=0;return o=t%2==1||1===n.length?t+1:t+2,Math.min(e,Math.max(0,o))},t.prototype.getPrevPageIndex=function(){var e=this.docRender.doc.getPageCount()-1,t=this.docRender.getCurrentPageIndex(),n=this.getVisibleIndexes(),o=0;return o=t%2==0?1===n.length?t-1:t-2:1===n.length?t-1:t-3,Math.min(e,Math.max(0,o))},t.prototype.out=function(){this.enableScroll(),this.lastElement&&(this.lastElement.remove(),this.lastElement=null),this.scrollHost.removeEventListener("mousedown",this.mousedown),l(window).off("mouseup",this.mouseup),l(window).off("keydown",this.keydown),l(window).off("keyup",this.keyup),this.hammer.destroy(),this.pdfViewer.eventEmitter.off(a.zoomToSuccess,this.zoom),this.pdfViewer.eventEmitter.off(a.fitWidthResizeViewport,this.resize),this.docRender.$container.removeClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-x":"","overflow-y":""}),this.$style&&this.$style.remove();for(var e=this.getItems(),t=0;t<e.length;t++)e.eq(t).css({width:""})},t}(r.IViewMode);t.default=d}]).default}));