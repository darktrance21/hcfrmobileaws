!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("UIExtension")):"function"==typeof define&&define.amd?define(["UIExtension"],t):"object"==typeof exports?exports.HSingleViewModeAddon=t(require("UIExtension")):e.HSingleViewModeAddon=t(e.UIExtension)}(self,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));n(2);var r=s(n(3)),i=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e,t))}o.Controller,o.PDFViewCtrl.Events;var d=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return c(t,e),t.getName=function(){return"h-single"},t.getLoader=function(){return r.default},t.initOnLoad=function(){o.modular.module("h-single",[]).registerPreConfiguredComponent("h-single-button",{template:'\n            <xbutton @tooltip name="h-single-button" icon-class="fv__icon-toolbar-h-single-page">h-single:buttons.title</xbutton>\n            ',config:[{target:"h-single-button",tooltip:{title:"h-single:buttons.title"},callback:function(e){function t(n){return l(this,t),a(this,e.call(this,n,i.default.getName()))}return c(t,e),t}(o.controllers.ViewModeController)}]})},t.prototype.init=function(t){e.prototype.init.call(this,t),t.getPDFViewer().then((function(e){e.getViewModeManager().register(i.default)}))},t}(o.UIXAddon);t.default=d},function(e,t,n){},function(e,t){e.exports=null},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e,t))}var i=o.PDFViewCtrl,s=o.PDFViewCtrl.Deps,l=(o.UIEvents,s.jQuery),a=s.Hammer,c=o.PDFViewCtrl.Events,d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return o.pdfViewer=n.pdfViewer,o.start=o.start.bind(o),o.end=o.end.bind(o),o.mousedown=o.mousedown.bind(o),o.mouseup=o.mouseup.bind(o),o.keydown=o.keydown.bind(o),o.keyup=o.keyup.bind(o),o.panning=!1,o.animating=!1,o.panType=null,o.scrollable=!1,o}return r(t,e),t.getName=function(){return"h-single-view-mode"},t.prototype.getItems=function(){return this.docRender.$container.find(".fv__pdf-view-mode-item")},t.prototype.disableScroll=function(){this.pdfViewer.eventEmitter.emit(c.disableScroll)},t.prototype.enableScroll=function(){this.pdfViewer.eventEmitter.emit(c.enableScroll)},t.prototype.into=function(){var e=this;this.disableScroll();var t=this.constructor.getName(),n=["<style>",".fv__pdf-viewer,.fv__pdf-viewer-layout,.fv__pdf-viewer-container,.fv__pdf-doc-layout{","height:100%;","}","."+t+"{","display:flex;","width:fit-content;","min-height:100%;","}","."+t+" .fv__pdf-view-mode-item{","display: -webkit-box;","display: -ms-flexbox;","display: -webkit-flex;","display: flex;","-ms-flex-pack: center;","-ms-flex-align: center;","-ms-justify-content: center;","-webkit-justify-content: center;","justify-content: center;","align-items:center;","}","."+t+" .fv__pdf-page-layout.fv__rendering{","min-width:128px;","}","</style>"].join("");this.$style=l(n),this.docRender.pagesRender.$ui.append(this.$style),this.docRender.$container.addClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-y":"unset","overflow-x":"scroll"});var o=this.pdfViewer.getStateHandlerManager();this.scrollable="hand"===o.getCurrentStates().getStateName(),this.pdfViewer.eventEmitter.on(c.switchStateHandler,this.switchSH=function(t){e.scrollable="hand"===t.getStateName(),e.disableScroll()});var r=this.docRender.viewerRender.scrollWrap;this.scrollHost=r.getScrollHost(),this.scrollHost.addEventListener("mousedown",this.mousedown),l(window).on("keydown",this.keydown),l(window).on("keyup",this.keyup),l(window).on("mouseup",this.mouseup),this.pdfViewer.eventEmitter.on(c.fitWidthResizeViewport,this.resize=function(){}),this.pdfViewer.eventEmitter.on(c.zoomToSuccess,this.zoom=function(){var t=e.docRender.getCurrentPageIndex();e.docRender.goToPage(t,{x:0,y:0})});var i=this.hammer=new a.Manager(this.scrollHost,{recognizers:[[a.Pan,{direction:a.DIRECTION_ALL}]]}),s=0,d=0;i.on("panstart",(function(){if(e.scrollable){var t=e.allInVisible();e.leftIn=t.leftIn,e.rightIn=t.rightIn,e.panning=!0}})),i.on("panmove",(function(t){if(e.scrollable&&e.panning&&!e.animating){var n=t.deltaX,o=t.deltaY,r=e.docRender.viewerRender.scrollWrap,i=r.getScrollLeft(),l=e.scrollHost.clientWidth+i,a=(r.getScrollTop(),e.docRender.getCurrentPageIndex()),c=e.getItems(),f=c.get(a).offsetLeft,u=f+c.eq(a).width(),p=s-n,h=d-o;s=n,d=o;var g=u-l,y=f-i;p>=0&&p>g&&(p=g),p<0&&p<y&&(p=y),r.scrollBy(p,h)}})),i.on("panend",(function(){e.scrollable&&(1===e.panType?e.toNext():2===e.panType&&e.toPrev(),e.panning=!1,e.panType=null,s=0,d=0)})),i.on("panleft",(function(){e.scrollable&&e.panning&&e.rightIn&&!e.animating&&(e.panType=1)})),i.on("panright",(function(){e.scrollable&&e.panning&&e.leftIn&&!e.animating&&(e.panType=2)})),this._unwatchScrollEvent=r.addScrollEventListener((function(){clearTimeout(e.scrollEventTimer),e.scrollEventTimer=setTimeout((function(){var t=e.docRender.pagesRender;t&&t.renderVisiblePages().then((function(){e.docRender.setCurrentPageIndex(e.getCurrentPageIndex())}),(function(){}))}),30)}))},t.prototype.toNext=function(){var e=this.docRender.getCurrentPageIndex();this.animation(e+1,!1)},t.prototype.toPrev=function(){var e=this.docRender.getCurrentPageIndex();this.animation(e-1,!0)},t.prototype.animation=function(e,t){var n=this.docRender,o=n.doc.getPageCount();if(!(e<0||e>=o)){this.animating=!0;var r=n.viewerRender.scrollWrap,i=this.scrollHost.clientWidth,s=this.getItems(),l=s.get(e).offsetLeft,a=l+s.eq(e).width(),c=r.getScrollLeft(),d=r.getScrollTop(),f=t?-i:i,u=30,p=0;p=t?a-c:l-c,!t&&p>i&&(f=p),t&&p<0&&(f-=p);var h=f/u,g=this,y=setInterval((function(){u>0?(c+=h,r.scrollTo(c,d),u--):(clearInterval(y),g.animating=!1,n.setCurrentPageIndex(e))}),10)}},t.prototype.allInVisible=function(){var e=this.docRender.getCurrentPageIndex(),t=this.getItems(),n=this.docRender.viewerRender.scrollWrap,o=this.scrollHost.clientWidth,r=this.scrollHost.clientHeight,i=(n.getScrollTop(),n.getScrollLeft()),s=i+o,l=t.get(e).offsetLeft,a=l+t.eq(e).width(),c=!1,d=!1;return Math.abs(i-l)<=1&&(c=!0),Math.abs(s-a)<=1&&(d=!0),{leftIn:c,rightIn:d}},t.prototype.renderViewMode=function(e,t,n,o,r){var i=e.index,s=this.getItems().eq(i),l=(this.docRender.pagesRender.$ui.height(),this.scrollHost),a=l.clientWidth,c=(l.clientHeight,s.find(".fv__pdf-page-layout").width());s.find(".fv__pdf-page-layout").height();c<a?s.css({width:a}):s.css({width:""})},t.prototype.mousedown=function(e){var t=this.scrollHost,n=l(t).offset(),o=n.top,r=n.left,i=r+t.clientWidth,s=o+t.clientHeight;this.dragging=!0;var a=e.clientX,c=e.clientY;return this.scrollType=r<=a&&a<=i&&o<=c&&c<=s?0:i<a&&o<c?1:2,this.client={x:a,y:c},this.start(),!1},t.prototype.mouseup=function(e){this.dragging,this.client,this.panning;2===this.scrollType&&this.end()},t.prototype.keydown=function(e){var t=e.keyCode;if(37!==t&&39!==t||this.start(),35===t||36===t||34===t||33===t)return!1},t.prototype.keyup=function(e){var t=e.keyCode;if(37!==t&&39!==t||this.end(),e.preventDefault(),e.stopPropagation(),33===t&&this.toPrev(),34===t&&this.toNext(),35===t){var n=this.docRender.doc.getPageCount();this.docRender.goToPage(n-1,{x:0,y:0})}36===t&&this.docRender.goToPage(0,{x:0,y:0})},t.prototype.start=function(){this.scrollPageIndex=this.docRender.getCurrentPageIndex()},t.prototype.end=function(){var e=this.getVisibleIndexes();if(1!==e.length){var t=e.indexOf(this.scrollPageIndex),n=e.length-1;t>-1?t<n/2?this.docRender.goToPage(e[n],{x:0,y:0}):this.docRender.goToPage(e[0],{x:0,y:0}):e[0]>t?this.docRender.goToPage(e[n],{x:0,y:0}):e[n]<t&&this.docRender.goToPage(e[0],{x:0,y:0})}},t.prototype.prev=function(e){var t=this.getItems(),n=this.scrollHost.clientWidth,o=t.eq(e).width()-n;o>=1?this.jumpToPage(e,{x:o,y:0}):this.jumpToPage(e,{x:0,y:0})},t.prototype.jumpToPage=function(e,t){var n=t.x,o=void 0===n?0:n,r=t.y,i=void 0===r?0:r,s=this.getItems();e>=s.length?e=s.length-1:e<0&&(e=0);var l=s[e],a=l.offsetLeft+o,c=l.offsetTop+i;this.docRender.viewerRender.scrollWrap.scrollTo(a,c)},t.prototype.getCurrentPageIndex=function(){for(var e=this.docRender.$ui,t=this.getItems(),n=this.docRender.viewerRender.scrollWrap,o=(n.getScrollTop(),e.height(),n.getScrollLeft()),r=o+e.width(),i=void 0,s=[],a=0;a<t.length;a++){var c=t[a],d=c.offsetLeft,f=l(c).width(),u=d+f;d<=o&&u>o&&u<r?s.push({index:a,width:u-o}):d>=o&&u<r?s.push({index:a,width:f}):d<=o&&u>r?i=a:d>=o&&d<r&&u>r&&s.push({index:a,width:r-d})}if(null==i)for(var p=0,h=0;h<s.length;h++)s[h].width>p&&(p=s[h].width,i=s[h].index);return i},t.prototype.getFitHeight=function(e){var t=this.docRender.viewerRender.scrollWrap;return t.getHeight()-t.getScrollOffsetTop()},t.prototype.getFitWidth=function(e){var t=this.docRender.viewerRender.scrollWrap;return t.getWidth()-t.getScrollOffsetLeft()},t.prototype.getVisibleIndexes=function(){var e=this.docRender.viewerRender.scrollWrap,t=e.getScrollLeft()-e.getScrollOffsetLeft(),n=this.docRender.$ui.width(),o=t+n,r=[];return this.getItems().each((function(e,n){var i=n.offsetLeft,s=n.offsetWidth+i;t<s&&o>i&&r.push(e)})),r},t.prototype.getNextPageIndex=function(){var e=this.docRender.doc.getPageCount(),t=this.getCurrentPageIndex();return t<e-1&&t++,t},t.prototype.getPrevPageIndex=function(){var e=this.getCurrentPageIndex();return e>0&&e--,e},t.prototype.out=function(){this.enableScroll(),this.scrollable=!1,this.pdfViewer.eventEmitter.off(c.fitWidthResizeViewport,this.resize),this.scrollHost.removeEventListener("mousedown",this.mousedown),l(window).off("mouseup",this.mouseup),l(window).off("keydown",this.keydown),l(window).off("keyup",this.keyup),this.hammer.destroy(),this.pdfViewer.eventEmitter.off(c.fitWidthResizeViewport,this.resize),this.pdfViewer.eventEmitter.off(c.switchStateHandler,this.switchSH),this.pdfViewer.eventEmitter.off(c.zoomToSuccess,this.zoom),this.docRender.$container.removeClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-x":"","overflow-y":""}),this.$style&&this.$style.remove();for(var e=this.getItems(),t=0;t<e.length;t++)e.eq(t).css({width:""})},t}(i.IViewMode);t.default=d}]).default}));