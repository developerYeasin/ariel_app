!function(r){"use strict";var h={cache:{},support:{},objects:{},init:function(e){return this.each(function(){r(this).unbind("click.lightcase").bind("click.lightcase",function(t){t.preventDefault(),r(this).lightcase("start",e)})})},start:function(t){h.origin=lightcase.origin=this,h.settings=lightcase.settings=r.extend(!0,{idPrefix:"lightcase-",classPrefix:"lightcase-",attrPrefix:"lc-",transition:"elastic",transitionOpen:null,transitionClose:null,transitionIn:null,transitionOut:null,cssTransitions:!0,speedIn:250,speedOut:250,width:null,height:null,maxWidth:800,maxHeight:500,forceWidth:!1,forceHeight:!1,liveResize:!0,fullScreenModeForMobile:!0,mobileMatchExpression:/(iphone|ipod|ipad|android|blackberry|symbian)/,disableShrink:!1,fixedRatio:!0,shrinkFactor:.75,overlayOpacity:.9,slideshow:!1,slideshowAutoStart:!0,breakBeforeShow:!1,timeout:5e3,swipe:!0,useKeys:!0,useCategories:!0,useAsCollection:!1,navigateEndless:!0,closeOnOverlayClick:!0,title:null,caption:null,showTitle:!0,showCaption:!0,showSequenceInfo:!0,inline:{width:"auto",height:"auto"},ajax:{width:"auto",height:"auto",type:"get",dataType:"html",data:{}},iframe:{width:800,height:500,frameborder:0},flash:{width:400,height:205,wmode:"transparent"},video:{width:400,height:225,poster:"",preload:"auto",controls:!0,autobuffer:!0,autoplay:!0,loop:!1},attr:"data-rel",href:null,type:null,typeMapping:{image:"jpg,jpeg,gif,png,bmp",flash:"swf",video:"mp4,mov,ogv,ogg,webm",iframe:"html,php",ajax:"json,txt",inline:"#"},errorMessage:function(){return'<p class="'+h.settings.classPrefix+'error">'+h.settings.labels.errorMessage+"</p>"},labels:{errorMessage:"Source could not be found...","sequenceInfo.of":" of ",close:"Close","navigator.prev":"Prev","navigator.next":"Next","navigator.play":"Play","navigator.pause":"Pause"},markup:function(){h.objects.body.append(h.objects.overlay=r('<div id="'+h.settings.idPrefix+'overlay"></div>'),h.objects.loading=r('<div id="'+h.settings.idPrefix+'loading" class="'+h.settings.classPrefix+'icon-spin"></div>'),h.objects.case=r('<div id="'+h.settings.idPrefix+'case" aria-hidden="true" role="dialog"></div>')),h.objects.case.after(h.objects.close=r('<a href="#" class="'+h.settings.classPrefix+'icon-close"><span>'+h.settings.labels.close+"</span></a>"),h.objects.nav=r('<div id="'+h.settings.idPrefix+'nav"></div>')),h.objects.nav.append(h.objects.prev=r('<a href="#" class="'+h.settings.classPrefix+'icon-prev"><span>'+h.settings.labels["navigator.prev"]+"</span></a>").hide(),h.objects.next=r('<a href="#" class="'+h.settings.classPrefix+'icon-next"><span>'+h.settings.labels["navigator.next"]+"</span></a>").hide(),h.objects.play=r('<a href="#" class="'+h.settings.classPrefix+'icon-play"><span>'+h.settings.labels["navigator.play"]+"</span></a>").hide(),h.objects.pause=r('<a href="#" class="'+h.settings.classPrefix+'icon-pause"><span>'+h.settings.labels["navigator.pause"]+"</span></a>").hide()),h.objects.case.append(h.objects.content=r('<div id="'+h.settings.idPrefix+'content"></div>'),h.objects.info=r('<div id="'+h.settings.idPrefix+'info"></div>')),h.objects.content.append(h.objects.contentInner=r('<div class="'+h.settings.classPrefix+'contentInner"></div>')),h.objects.info.append(h.objects.sequenceInfo=r('<div id="'+h.settings.idPrefix+'sequenceInfo"></div>'),h.objects.title=r('<h4 id="'+h.settings.idPrefix+'title"></h4>'),h.objects.caption=r('<p id="'+h.settings.idPrefix+'caption"></p>'))},onInit:{},onStart:{},onBeforeCalculateDimensions:{},onAfterCalculateDimensions:{},onBeforeShow:{},onFinish:{},onResize:{},onClose:{},onCleanup:{}},t,h.origin.data?h.origin.data("lc-options"):{}),h.objects.document=r("html"),h.objects.body=r("body"),h._callHooks(h.settings.onInit),h.objectData=h._setObjectData(this),h._addElements(),h._open(),h.dimensions=h.getViewportDimensions()},get:function(t){return h.objects[t]},getObjectData:function(){return h.objectData},_setObjectData:function(t){var e=r(t),e={this:r(t),title:h.settings.title||e.attr(h._prefixAttributeName("title"))||e.attr("title"),caption:h.settings.caption||e.attr(h._prefixAttributeName("caption"))||e.children("img").attr("alt"),url:h._determineUrl(),requestType:h.settings.ajax.type,requestData:h.settings.ajax.data,requestDataType:h.settings.ajax.dataType,rel:e.attr(h._determineAttributeSelector()),type:h._verifyDataType(h._determineUrl()),isPartOfSequence:h.settings.useAsCollection||h._isPartOfSequence(e.attr(h.settings.attr),":"),isPartOfSequenceWithSlideshow:h._isPartOfSequence(e.attr(h.settings.attr),":slideshow"),currentIndex:r(h._determineAttributeSelector()).index(e),sequenceLength:r(h._determineAttributeSelector()).length};return e.sequenceInfo=e.currentIndex+1+h.settings.labels["sequenceInfo.of"]+e.sequenceLength,e.prevIndex=e.currentIndex-1,e.nextIndex=e.currentIndex+1,e},_prefixAttributeName:function(t){return"data-"+h.settings.attrPrefix+t},_determineLinkTarget:function(){return h.settings.href||r(h.origin).attr(h._prefixAttributeName("href"))||r(h.origin).attr("href")},_determineAttributeSelector:function(){var t,e=r(h.origin),i="";return void 0!==h.cache.selector?i=h.cache.selector:!0===h.settings.useCategories&&e.attr(h._prefixAttributeName("categories"))?(t=e.attr(h._prefixAttributeName("categories")).split(" "),r.each(t,function(t,e){0<t&&(i+=","),i+="["+h._prefixAttributeName("categories")+'~="'+e+'"]'})):i="["+h.settings.attr+'="'+e.attr(h.settings.attr)+'"]',h.cache.selector=i},_determineUrl:function(){var n,t=h._verifyDataUrl(h._determineLinkTarget()),a=0,o=0,c="";return r.each(t,function(t,e){var i,s;"video"===h._verifyDataType(e.url)?(i=document.createElement("video"),s=h._verifyDataType(e.url)+"/"+h._getFileUrlSuffix(e.url),"probably"!==c&&c!==i.canPlayType(s)&&""!==i.canPlayType(s)&&(c=i.canPlayType(s),n=e.url)):h._devicePixelRatio()>=e.density&&e.density>=o&&h._matchMedia()("screen and (min-width:"+e.width+"px)").matches&&e.width>=a&&(a=e.width,o=e.density,n=e.url)}),n},_normalizeUrl:function(t){function e(t){var n={width:0,density:0};return t.trim().split(/\s+/).forEach(function(t,e){if(0===e)return n.url=t;var i=t.substring(0,t.length-1),s=t[t.length-1],e=parseInt(i,10),t=parseFloat(i);"w"===s&&a.test(i)?n.width=e:"h"===s&&a.test(i)?n.height=e:"x"!==s||isNaN(t)||(n.density=t)}),n}var a=/^\d+$/;return 0===t.indexOf("data:")?[e(t)]:t.split(",").map(e)},_isPartOfSequence:function(t,e){var i=r("["+h.settings.attr+'="'+t+'"]');return new RegExp(e).test(t)&&1<i.length},isSlideshowEnabled:function(){return h.objectData.isPartOfSequence&&(!0===h.settings.slideshow||!0===h.objectData.isPartOfSequenceWithSlideshow)},_loadContent:function(){h.cache.originalObject&&h._restoreObject(),h._createObject()},_createObject:function(){var i;switch(h.objectData.type){case"image":(i=r(new Image)).attr({src:h.objectData.url,alt:h.objectData.title});break;case"inline":(i=r('<div class="'+h.settings.classPrefix+'inlineWrap"></div>')).html(h._cloneObject(r(h.objectData.url))),r.each(h.settings.inline,function(t,e){i.attr(h._prefixAttributeName(t),e)});break;case"ajax":i=r('<div class="'+h.settings.classPrefix+'inlineWrap"></div>'),r.each(h.settings.ajax,function(t,e){"data"!==t&&i.attr(h._prefixAttributeName(t),e)});break;case"flash":i=r('<embed src="'+h.objectData.url+'" type="application/x-shockwave-flash"></embed>'),r.each(h.settings.flash,function(t,e){i.attr(t,e)});break;case"video":(i=r("<video></video>")).attr("src",h.objectData.url),r.each(h.settings.video,function(t,e){i.attr(t,e)});break;default:(i=r("<iframe></iframe>")).attr({src:h.objectData.url}),r.each(h.settings.iframe,function(t,e){i.attr(t,e)})}h._addObject(i),h._loadObject(i)},_addObject:function(t){h.objects.contentInner.html(t),h._loading("start"),h._callHooks(h.settings.onStart),!0===h.settings.showSequenceInfo&&h.objectData.isPartOfSequence?(h.objects.sequenceInfo.html(h.objectData.sequenceInfo),h.objects.sequenceInfo.show()):(h.objects.sequenceInfo.empty(),h.objects.sequenceInfo.hide()),!0===h.settings.showTitle&&void 0!==h.objectData.title&&""!==h.objectData.title?(h.objects.title.html(h.objectData.title),h.objects.title.show()):(h.objects.title.empty(),h.objects.title.hide()),!0===h.settings.showCaption&&void 0!==h.objectData.caption&&""!==h.objectData.caption?(h.objects.caption.html(h.objectData.caption),h.objects.caption.show()):(h.objects.caption.empty(),h.objects.caption.hide())},_loadObject:function(s){switch(h.objectData.type){case"inline":r(h.objectData.url)?h._showContent(s):h.error();break;case"ajax":r.ajax(r.extend({},h.settings.ajax,{url:h.objectData.url,type:h.objectData.requestType,dataType:h.objectData.requestDataType,data:h.objectData.requestData,success:function(t,e,i){i.getResponseHeader("X-Ajax-Location")?(h.objectData.url=i.getResponseHeader("X-Ajax-Location"),h._loadObject(s)):("json"===h.objectData.requestDataType?h.objectData.data=t:s.html(t),h._showContent(s))},error:function(t,e,i){h.error()}}));break;case"flash":h._showContent(s);break;case"video":"function"==typeof s.get(0).canPlayType||0===h.objects.case.find("video").length?h._showContent(s):h.error();break;default:h.objectData.url?(s.on("load",function(){h._showContent(s)}),s.on("error",function(){h.error()})):h.error()}},error:function(){h.objectData.type="error";var t=r('<div class="'+h.settings.classPrefix+'inlineWrap"></div>');t.html(h.settings.errorMessage),h.objects.contentInner.html(t),h._showContent(h.objects.contentInner)},_calculateDimensions:function(t){if(h._cleanupDimensions(),t){var e={ratio:1,objectWidth:t.attr("width")?t.attr("width"):t.attr(h._prefixAttributeName("width")),objectHeight:t.attr("height")?t.attr("height"):t.attr(h._prefixAttributeName("height"))};if(!h.settings.disableShrink)switch(e.maxWidth=parseInt(h.dimensions.windowWidth*h.settings.shrinkFactor),e.maxHeight=parseInt(h.dimensions.windowHeight*h.settings.shrinkFactor),e.maxWidth>h.settings.maxWidth&&(e.maxWidth=h.settings.maxWidth),e.maxHeight>h.settings.maxHeight&&(e.maxHeight=h.settings.maxHeight),e.differenceWidthAsPercent=parseInt(100/e.maxWidth*e.objectWidth),e.differenceHeightAsPercent=parseInt(100/e.maxHeight*e.objectHeight),h.objectData.type){case"image":case"flash":case"video":case"iframe":case"ajax":case"inline":if("image"===h.objectData.type||!0===h.settings.fixedRatio){100<e.differenceWidthAsPercent&&e.differenceWidthAsPercent>e.differenceHeightAsPercent&&(e.objectWidth=e.maxWidth,e.objectHeight=parseInt(e.objectHeight/e.differenceWidthAsPercent*100)),100<e.differenceHeightAsPercent&&e.differenceHeightAsPercent>e.differenceWidthAsPercent&&(e.objectWidth=parseInt(e.objectWidth/e.differenceHeightAsPercent*100),e.objectHeight=e.maxHeight),100<e.differenceHeightAsPercent&&e.differenceWidthAsPercent<e.differenceHeightAsPercent&&(e.objectWidth=parseInt(e.maxWidth/e.differenceHeightAsPercent*e.differenceWidthAsPercent),e.objectHeight=e.maxHeight);break}case"error":!isNaN(e.objectWidth)&&e.objectWidth>e.maxWidth&&(e.objectWidth=e.maxWidth);break;default:(isNaN(e.objectWidth)||e.objectWidth>e.maxWidth)&&!h.settings.forceWidth&&(e.objectWidth=e.maxWidth),(isNaN(e.objectHeight)&&"auto"!==e.objectHeight||e.objectHeight>e.maxHeight)&&!h.settings.forceHeight&&(e.objectHeight=e.maxHeight)}if(h.settings.forceWidth){try{e.objectWidth=h.settings[h.objectData.type].width}catch(t){e.objectWidth=h.settings.width||e.objectWidth}e.maxWidth=null}if(t.attr(h._prefixAttributeName("max-width"))&&(e.maxWidth=t.attr(h._prefixAttributeName("max-width"))),h.settings.forceHeight){try{e.objectHeight=h.settings[h.objectData.type].height}catch(t){e.objectHeight=h.settings.height||e.objectHeight}e.maxHeight=null}t.attr(h._prefixAttributeName("max-height"))&&(e.maxHeight=t.attr(h._prefixAttributeName("max-height"))),h._adjustDimensions(t,e)}},_adjustDimensions:function(t,e){t.css({width:e.objectWidth,height:e.objectHeight,"max-width":e.maxWidth,"max-height":e.maxHeight}),h.objects.contentInner.css({width:t.outerWidth(),height:t.outerHeight(),"max-width":"100%"}),h.objects.case.css({width:h.objects.contentInner.outerWidth(),"max-width":"100%"}),h.objects.case.css({"margin-top":parseInt(-h.objects.case.outerHeight()/2),"margin-left":parseInt(-h.objects.case.outerWidth()/2)})},_loading:function(t){"start"===t?(h.objects.case.addClass(h.settings.classPrefix+"loading"),h.objects.loading.show()):"end"===t&&(h.objects.case.removeClass(h.settings.classPrefix+"loading"),h.objects.loading.hide())},getViewportDimensions:function(){return{windowWidth:r(window).innerWidth(),windowHeight:r(window).innerHeight()}},_verifyDataUrl:function(t){return!(!t||void 0===t||""===t)&&(-1<t.indexOf("#")&&(t="#"+(t=t.split("#"))[t.length-1]),h._normalizeUrl(t.toString()))},_getFileUrlSuffix:function(t){return/(?:\.([^.]+))?$/.exec(t.toLowerCase())[1]},_verifyDataType:function(t){var e=h.settings.typeMapping;if(!t)return!1;if(h.settings.type)for(var i in e)if(i===h.settings.type)return h.settings.type;for(i in e)if(e.hasOwnProperty(i))for(var s=e[i].split(","),n=0;n<s.length;n++){var a=s[n].toLowerCase(),o=new RegExp(".("+a+")$","i"),c=t.toLowerCase().split("?")[0].substr(-5);if(!0===o.test(c)||"inline"===i&&-1<t.indexOf(a))return i}return"iframe"},_addElements:function(){void 0!==h.objects.case&&r("#"+h.objects.case.attr("id")).length||h.settings.markup()},_showContent:function(t){h.objects.document.attr(h._prefixAttributeName("type"),h.objectData.type),h.cache.object=t,h._callHooks(h.settings.onBeforeShow),h.settings.breakBeforeShow||h.show()},_startInTransition:function(){switch(h.transition.in()){case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollHorizontal":case"scrollVertical":h.transition.scroll(h.objects.case,"in",h.settings.speedIn),h.transition.fade(h.objects.contentInner,"in",h.settings.speedIn);break;case"elastic":h.objects.case.css("opacity")<1&&(h.transition.zoom(h.objects.case,"in",h.settings.speedIn),h.transition.fade(h.objects.contentInner,"in",h.settings.speedIn));case"fade":case"fadeInline":h.transition.fade(h.objects.case,"in",h.settings.speedIn),h.transition.fade(h.objects.contentInner,"in",h.settings.speedIn);break;default:h.transition.fade(h.objects.case,"in",0)}h._loading("end"),h.isBusy=!1,h.cache.firstOpened||(h.cache.firstOpened=h.objectData.this),h.objects.info.hide(),setTimeout(function(){h.transition.fade(h.objects.info,"in",h.settings.speedIn)},h.settings.speedIn),h._callHooks(h.settings.onFinish)},_processContent:function(){switch(h.isBusy=!0,h.transition.fade(h.objects.info,"out",0),h.settings.transitionOut){case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollVertical":case"scrollHorizontal":h.objects.case.is(":hidden")?(h.transition.fade(h.objects.contentInner,"out",0),h.transition.fade(h.objects.case,"out",0,0,function(){h._loadContent()})):h.transition.scroll(h.objects.case,"out",h.settings.speedOut,function(){h._loadContent()});break;case"fade":h.objects.case.is(":hidden")?h.transition.fade(h.objects.case,"out",0,0,function(){h._loadContent()}):h.transition.fade(h.objects.case,"out",h.settings.speedOut,0,function(){h._loadContent()});break;case"fadeInline":case"elastic":h.objects.case.is(":hidden")?h.transition.fade(h.objects.case,"out",0,0,function(){h._loadContent()}):h.transition.fade(h.objects.contentInner,"out",h.settings.speedOut,0,function(){h._loadContent()});break;default:h.transition.fade(h.objects.case,"out",0,0,function(){h._loadContent()})}},_handleEvents:function(){h._unbindEvents(),h.objects.nav.children().not(h.objects.close).hide(),h.isSlideshowEnabled()&&(!0!==h.settings.slideshowAutoStart&&!h.isSlideshowStarted||h.objects.nav.hasClass(h.settings.classPrefix+"paused")?h._stopTimeout():h._startTimeout()),h.settings.liveResize&&h._watchResizeInteraction(),h.objects.close.click(function(t){t.preventDefault(),h.close()}),!0===h.settings.closeOnOverlayClick&&h.objects.overlay.css("cursor","pointer").click(function(t){t.preventDefault(),h.close()}),!0===h.settings.useKeys&&h._addKeyEvents(),h.objectData.isPartOfSequence&&(h.objects.nav.attr(h._prefixAttributeName("ispartofsequence"),!0),h.objects.nav.data("items",h._setNavigation()),h.objects.prev.click(function(t){t.preventDefault(),!0!==h.settings.navigateEndless&&h.item.isFirst()||(h.objects.prev.unbind("click"),h.cache.action="prev",h.objects.nav.data("items").prev.click(),h.isSlideshowEnabled()&&h._stopTimeout())}),h.objects.next.click(function(t){t.preventDefault(),!0!==h.settings.navigateEndless&&h.item.isLast()||(h.objects.next.unbind("click"),h.cache.action="next",h.objects.nav.data("items").next.click(),h.isSlideshowEnabled()&&h._stopTimeout())}),h.isSlideshowEnabled()&&(h.objects.play.click(function(t){t.preventDefault(),h._startTimeout()}),h.objects.pause.click(function(t){t.preventDefault(),h._stopTimeout()})),!0===h.settings.swipe&&(r.isPlainObject(r.event.special.swipeleft)&&h.objects.case.on("swipeleft",function(t){t.preventDefault(),h.objects.next.click(),h.isSlideshowEnabled()&&h._stopTimeout()}),r.isPlainObject(r.event.special.swiperight)&&h.objects.case.on("swiperight",function(t){t.preventDefault(),h.objects.prev.click(),h.isSlideshowEnabled()&&h._stopTimeout()})))},_addKeyEvents:function(){r(document).bind("keyup.lightcase",function(t){if(!h.isBusy)switch(t.keyCode){case 27:h.objects.close.click();break;case 37:h.objectData.isPartOfSequence&&h.objects.prev.click();break;case 39:h.objectData.isPartOfSequence&&h.objects.next.click()}})},_startTimeout:function(){h.isSlideshowStarted=!0,h.objects.play.hide(),h.objects.pause.show(),h.cache.action="next",h.objects.nav.removeClass(h.settings.classPrefix+"paused"),h.timeout=setTimeout(function(){h.objects.nav.data("items").next.click()},h.settings.timeout)},_stopTimeout:function(){h.objects.play.show(),h.objects.pause.hide(),h.objects.nav.addClass(h.settings.classPrefix+"paused"),clearTimeout(h.timeout)},_setNavigation:function(){var t=r(h.cache.selector||h.settings.attr),e=h.objectData.sequenceLength-1,i={prev:t.eq(h.objectData.prevIndex),next:t.eq(h.objectData.nextIndex)};return 0<h.objectData.currentIndex?h.objects.prev.show():i.prevItem=t.eq(e),h.objectData.nextIndex<=e?h.objects.next.show():i.next=t.eq(0),!0===h.settings.navigateEndless&&(h.objects.prev.show(),h.objects.next.show()),i},item:{isFirst:function(){return 0===h.objectData.currentIndex},isFirstOpened:function(){return h.objectData.this.is(h.cache.firstOpened)},isLast:function(){return h.objectData.currentIndex===h.objectData.sequenceLength-1}},_cloneObject:function(t){var e=t.clone(),i=t.attr("id");return t.is(":hidden")?(h._cacheObjectData(t),t.attr("id",h.settings.idPrefix+"temp-"+i).empty()):e.removeAttr("id"),e.show()},isMobileDevice:function(){return!!navigator.userAgent.toLowerCase().match(h.settings.mobileMatchExpression)},isTransitionSupported:function(){var t,e=h.objects.body.get(0),i=!1,s={transition:"",WebkitTransition:"-webkit-",MozTransition:"-moz-",OTransition:"-o-",MsTransition:"-ms-"};for(t in s)s.hasOwnProperty(t)&&t in e.style&&(h.support.transition=s[t],i=!0);return i},transition:{in:function(){return h.settings.transitionOpen&&!h.cache.firstOpened?h.settings.transitionOpen:h.settings.transitionIn},fade:function(t,e,i,s,n){var a="in"===e,o={},e=t.css("opacity"),c={},s=s||(a?1:0);!h.isOpen&&a||(o.opacity=e,c.opacity=s,t.css(h.support.transition+"transition","none"),t.css(o).show(),h.support.transitions?(c[h.support.transition+"transition"]=i+"ms ease",setTimeout(function(){t.css(c),setTimeout(function(){t.css(h.support.transition+"transition",""),!n||!h.isOpen&&a||n()},i)},15)):(t.stop(),t.animate(c,i,n)))},scroll:function(t,e,i,s){var n="in"===e,a=n?h.settings.transitionIn:h.settings.transitionOut,o="left",c={},r=n?0:1,l=n?"-50%":"50%",d={},e=n?1:0,u=n?"50%":"-50%";if(h.isOpen||!n){switch(a){case"scrollTop":o="top";break;case"scrollRight":l=n?"150%":"50%",u=n?"50%":"150%";break;case"scrollBottom":o="top",l=n?"150%":"50%",u=n?"50%":"150%";break;case"scrollHorizontal":l=n?"150%":"50%",u=n?"50%":"-50%";break;case"scrollVertical":o="top",l=n?"-50%":"50%",u=n?"50%":"150%"}if("prev"===h.cache.action)switch(a){case"scrollHorizontal":l=n?"-50%":"50%",u=n?"50%":"150%";break;case"scrollVertical":l=n?"150%":"50%",u=n?"50%":"-50%"}c.opacity=r,c[o]=l,d.opacity=e,d[o]=u,t.css(h.support.transition+"transition","none"),t.css(c).show(),h.support.transitions?(d[h.support.transition+"transition"]=i+"ms ease",setTimeout(function(){t.css(d),setTimeout(function(){t.css(h.support.transition+"transition",""),!s||!h.isOpen&&n||s()},i)},15)):(t.stop(),t.animate(d,i,s))}},zoom:function(t,e,i,s){var n="in"===e,a={},o=t.css("opacity"),c=n?"scale(0.75)":"scale(1)",r={},l=n?1:0,e=n?"scale(1)":"scale(0.75)";!h.isOpen&&n||(a.opacity=o,a[h.support.transition+"transform"]=c,r.opacity=l,t.css(h.support.transition+"transition","none"),t.css(a).show(),h.support.transitions?(r[h.support.transition+"transform"]=e,r[h.support.transition+"transition"]=i+"ms ease",setTimeout(function(){t.css(r),setTimeout(function(){t.css(h.support.transition+"transform",""),t.css(h.support.transition+"transition",""),!s||!h.isOpen&&n||s()},i)},15)):(t.stop(),t.animate(r,i,s)))}},_callHooks:function(t){"object"==typeof t&&r.each(t,function(t,e){"function"==typeof e&&e.call(h.origin)})},_cacheObjectData:function(t){r.data(t,"cache",{id:t.attr("id"),content:t.html()}),h.cache.originalObject=t},_restoreObject:function(){var t=r('[id^="'+h.settings.idPrefix+'temp-"]');t.attr("id",r.data(h.cache.originalObject,"cache").id),t.html(r.data(h.cache.originalObject,"cache").content)},resize:function(t,e){h.isOpen&&(h.isSlideshowEnabled()&&h._stopTimeout(),"object"==typeof e&&null!==e&&(e.width&&h.cache.object.attr(h._prefixAttributeName("width"),e.width),e.maxWidth&&h.cache.object.attr(h._prefixAttributeName("max-width"),e.maxWidth),e.height&&h.cache.object.attr(h._prefixAttributeName("height"),e.height),e.maxHeight&&h.cache.object.attr(h._prefixAttributeName("max-height"),e.maxHeight)),h.dimensions=h.getViewportDimensions(),h._calculateDimensions(h.cache.object),h._callHooks(h.settings.onResize))},_watchResizeInteraction:function(){r(window).resize(h.resize)},_unwatchResizeInteraction:function(){r(window).off("resize",h.resize)},_switchToFullScreenMode:function(){h.settings.shrinkFactor=1,h.settings.overlayOpacity=1,r("html").addClass(h.settings.classPrefix+"fullScreenMode")},_open:function(){switch(h.isOpen=!0,h.support.transitions=!!h.settings.cssTransitions&&h.isTransitionSupported(),h.support.mobileDevice=h.isMobileDevice(),h.support.mobileDevice&&(r("html").addClass(h.settings.classPrefix+"isMobileDevice"),h.settings.fullScreenModeForMobile&&h._switchToFullScreenMode()),h.settings.transitionIn||(h.settings.transitionIn=h.settings.transition),h.settings.transitionOut||(h.settings.transitionOut=h.settings.transition),h.transition.in()){case"fade":case"fadeInline":case"elastic":case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollVertical":case"scrollHorizontal":h.objects.case.is(":hidden")&&(h.objects.close.css("opacity",0),h.objects.overlay.css("opacity",0),h.objects.case.css("opacity",0),h.objects.contentInner.css("opacity",0)),h.transition.fade(h.objects.overlay,"in",h.settings.speedIn,h.settings.overlayOpacity,function(){h.transition.fade(h.objects.close,"in",h.settings.speedIn),h._handleEvents(),h._processContent()});break;default:h.transition.fade(h.objects.overlay,"in",0,h.settings.overlayOpacity,function(){h.transition.fade(h.objects.close,"in",0),h._handleEvents(),h._processContent()})}h.objects.document.addClass(h.settings.classPrefix+"open"),h.objects.case.attr("aria-hidden","false")},show:function(){h._callHooks(h.settings.onBeforeCalculateDimensions),h._calculateDimensions(h.cache.object),h._callHooks(h.settings.onAfterCalculateDimensions),h._startInTransition()},close:function(){switch(h.isOpen=!1,h.isSlideshowEnabled()&&(h._stopTimeout(),h.isSlideshowStarted=!1,h.objects.nav.removeClass(h.settings.classPrefix+"paused")),h.objects.loading.hide(),h._unbindEvents(),h._unwatchResizeInteraction(),r("html").removeClass(h.settings.classPrefix+"open"),h.objects.case.attr("aria-hidden","true"),h.objects.nav.children().hide(),h.objects.close.hide(),h._callHooks(h.settings.onClose),h.transition.fade(h.objects.info,"out",0),h.settings.transitionClose||h.settings.transitionOut){case"fade":case"fadeInline":case"scrollTop":case"scrollRight":case"scrollBottom":case"scrollLeft":case"scrollHorizontal":case"scrollVertical":h.transition.fade(h.objects.case,"out",h.settings.speedOut,0,function(){h.transition.fade(h.objects.overlay,"out",h.settings.speedOut,0,function(){h.cleanup()})});break;case"elastic":h.transition.zoom(h.objects.case,"out",h.settings.speedOut,function(){h.transition.fade(h.objects.overlay,"out",h.settings.speedOut,0,function(){h.cleanup()})});break;default:h.cleanup()}},_unbindEvents:function(){h.objects.overlay.unbind("click"),r(document).unbind("keyup.lightcase"),h.objects.case.unbind("swipeleft").unbind("swiperight"),h.objects.prev.unbind("click"),h.objects.next.unbind("click"),h.objects.play.unbind("click"),h.objects.pause.unbind("click"),h.objects.close.unbind("click")},_cleanupDimensions:function(){var t=h.objects.contentInner.css("opacity");h.objects.case.css({width:"",height:"",top:"",left:"","margin-top":"","margin-left":""}),h.objects.contentInner.removeAttr("style").css("opacity",t),h.objects.contentInner.children().removeAttr("style")},cleanup:function(){h._cleanupDimensions(),h.objects.loading.hide(),h.objects.overlay.hide(),h.objects.case.hide(),h.objects.prev.hide(),h.objects.next.hide(),h.objects.play.hide(),h.objects.pause.hide(),h.objects.document.removeAttr(h._prefixAttributeName("type")),h.objects.nav.removeAttr(h._prefixAttributeName("ispartofsequence")),h.objects.contentInner.empty().hide(),h.objects.info.children().empty(),h.cache.originalObject&&h._restoreObject(),h._callHooks(h.settings.onCleanup),h.cache={}},_matchMedia:function(){return window.matchMedia||window.msMatchMedia},_devicePixelRatio:function(){return window.devicePixelRatio||1},_isPublicMethod:function(t){return"function"==typeof h[t]&&"_"!==t.charAt(0)},_export:function(){window.lightcase={},r.each(h,function(t){h._isPublicMethod(t)&&(lightcase[t]=h[t])})}};h._export(),r.fn.lightcase=function(t){return h._isPublicMethod(t)?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void r.error("Method "+t+" does not exist on jQuery.lightcase"):h.init.apply(this,arguments)}}(jQuery);