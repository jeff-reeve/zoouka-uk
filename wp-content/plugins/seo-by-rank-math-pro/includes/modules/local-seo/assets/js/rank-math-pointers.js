!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=jQuery},function(t,e){t.exports=wp.i18n},function(t,e){t.exports=lodash},,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(2),a=n(1);function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pointers=this.getPointers(),this.showPointer=this.showPointer.bind(this),this.init()}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=this;Object(i.forEach)(this.pointers,(function(e,n){return t.showPointer(n),!1})),r()(".rank-math-toolbar-score").parent().hasClass("is-pressed")||r()(".rank-math-toolbar-score").parent().trigger("click")}},{key:"showPointer",value:function(t){var e=this,n=this.pointers[t],o=r.a.extend(n.options,{pointerClass:"wp-pointer rm-pointer",close:function(){n.next&&e.showPointer(n.next)},buttons:function(t,e){var n="wp-pointer-3"===e.pointer[0].id?Object(a.__)("Finish","rank-math-pro"):Object(a.__)("Next","rank-math-pro"),o=r()('<a class="close" href="#">'+Object(a.__)("Dismiss","rank-math-pro")+"</a>"),i=r()('<a class="button button-primary" href="#">'+n+"</a>"),s=r()('<div class="rm-pointer-buttons" />');return o.on("click.pointer",(function(t){t.preventDefault(),e.element.pointer("destroy")})),i.on("click.pointer",(function(t){t.preventDefault(),e.element.pointer("close")})),s.append(o),s.append(i),s}}),i=r()(n.target).pointer(o);i.pointer("open"),n.next_trigger&&r()(n.next_trigger.target).on(n.next_trigger.event,(function(){setTimeout((function(){i.pointer("close")}),400)}))}},{key:"getPointers",value:function(){return{title:{target:".editor-post-title__input",next:"schema",options:{content:"<h3>"+Object(a.__)("Local Business Name","rank-math-pro")+"</h3><p>"+Object(a.__)("Give your business's new location a name here. This field is required and will be visible to users.","rank-math-pro")+"</p>"}},schema:{target:".components-tab-panel__tabs-item.rank-math-schema-tab",next:"content",options:{content:"<h3>"+Object(a.__)("Local Business Schema","rank-math-pro")+"</h3><p>"+Object(a.__)('Add your local business\'s details here with "Local Business" Schema Markup in order to be eligible for local SERP features.',"rank-math-pro")+"</p>",position:{edge:"right",align:"left"}}},content:{target:".is-root-container",next:"submitdiv",options:{content:"<h3>"+Object(a.__)("Show Business Information","rank-math-pro")+"</h3><p>"+Object(a.sprintf)(Object(a.__)("Make sure to add the Local Business Block or %s to display your business data.","rank-math-pro"),'<a href="https://rankmath.com/kb/location-data-shortcode/" target="_blank">[rank_math_local] shortcode</a>')+"</p>",position:{edge:"bottom",align:"middle"}}},submitdiv:{target:".editor-post-publish-button__button",next:"",options:{content:"<h3>"+Object(a.__)("Publish your location!","rank-math-pro")+"</h3><p>"+Object(a.__)("When you're done editing, don't forget to hit \"publish\" to create this location.","rank-math-pro")+"</p>"}}}}}])&&s(e.prototype,n),o&&s(e,o),t}();r()(window).on("load",(function(){new c}))}]);