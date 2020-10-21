/*! This minified app bundle contains open source software from several third party developers. Please review CREDITS.md in the root directory or LICENSE.md in the current directory for complete licensing, copyright and patent information. This file and the included code may not be redistributed without the attributions listed in LICENSE.md, including associate copyright notices and licensing information. */!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=483)}({482:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=window,i=void 0;try{i=!!window.top.document&&window.top}catch(t){i=!1}i&&i.__Cypress__?window.parent===i?n=window:n=window.parent:i&&(n=i,window.self)},483:function(t,e,o){"use strict";o.r(e),function(t){var e=o(482),n=document.createEvent("Event"),i=0;n.initEvent("et_fb_before_disabling_bfb",!0,!0);var a=t("#et_pb_layout").addClass("et-drag-disabled");t(window).on("et_fb_init_app_after",function(){a.removeClass("et-drag-disabled")}),t(window).on("load",function(){setTimeout(function(){var e=t("#et_pb_toggle_builder"),o=t("#et_pb_fb_cta");t(".et_pb_toggle_builder_wrapper").css("opacity",""),e.addClass("et_pb_ready"),e.hasClass("et_pb_builder_is_used")&&o.addClass("et_pb_ready")},250);var e=function(){t(this).find(".postbox").removeClass("first-visible"),t(this).is("#normal-sortables")&&t(this).find(".postbox:visible:first").addClass("first-visible")};t(".meta-box-sortables").sortable("option","update",e),t("#screen-options-wrap").on("change",".hide-postbox-tog",function(){t(".meta-box-sortables").each(e)}),t(".handle-order-higher, .handle-order-lower").on("click",function(){t(".meta-box-sortables").each(e)}),t(".meta-box-sortables").on("sortstart",function(){t("body").addClass("et-bfb--metabox-dragged")}),t(".meta-box-sortables").on("sortstop",function(){t("body").removeClass("et-bfb--metabox-dragged"),window.dispatchEvent(new CustomEvent("ETBFBMetaboxSortStopped",{}))})}),t(window).on("et_fb_disabling_bfb_confirmed",function(){var e=t("#et_pb_old_content"),o=t("#et_pb_use_builder"),n=t("#minor-publishing-actions #save-post").length>0?t("#minor-publishing-actions #save-post"):t("#publishing-action #publish");b(e.val()),e.val(""),o.val("off"),l(n)});var r=void 0;function s(){r&&clearTimeout(r),r=setTimeout(function(){var e=t("#et_pb_layout"),o=t("#et-fb-app"),n=t(".et_pb_toggle_builder_wrapper.et_pb_builder_is_used"),i=t("#et_pb_toggle_builder"),a=t("#et_pb_fb_cta"),r=t(".et-fb-button-group--responsive-mode"),s=t(".et-fb-button-group--builder-mode"),l=t(".et-fb-page-settings-bar__column--right");n.outerWidth()-(parseFloat(i.outerWidth())+parseFloat(a.outerWidth())+parseFloat(a.css("marginLeft"))+((r.length&&r.is(":visible")?r.outerWidth():0)+(s.length&&s.is(":visible")?s.outerWidth()+10:0)+(l.length?l.outerWidth():0)))<=30?(e.addClass("et_pb_layout--compact"),o.addClass("et-fb-app--compact")):(e.removeClass("et_pb_layout--compact"),o.removeClass("et-fb-app--compact"))},50)}function l(e){t("#title").prop("required")&&t("#title").removeProp("required"),e.hasClass("disabled")?i<=20?(i++,setTimeout(function(){l(e)},1e3)):t(".et-bfb-page-preloading").remove():e.trigger("click")}function b(e){void 0!==window.tinyMCE&&window.tinyMCE.get("content")&&!window.tinyMCE.get("content").isHidden()?window.tinyMCE.get("content").setContent(e,{format:"html"}):t("#content").val(e)}t(window).on("et_fb_init_app_after resize et_fb_toolbar_change",s),t(e.a).on("et-preview-animation-complete et-bfb-modal-snapped",s),t("#et_pb_toggle_builder").click(function(e){e.preventDefault();var o=t(this),i=t("#et_pb_use_builder"),a=function(){var e=void 0;e=void 0!==window.tinyMCE&&window.tinyMCE.get("content")&&!window.tinyMCE.get("content").isHidden()?window.tinyMCE.get("content").getContent():t("#content").val();return e.trim()}(),r=t("#minor-publishing-actions #save-post").length>0?t("#minor-publishing-actions #save-post"):t("#publishing-action #publish"),s=t("#et_pb_old_content"),d=t("#titlediv #title").length>0?t("#titlediv #title").val():"";if(o.hasClass("et_pb_builder_is_used"))window.dispatchEvent(n);else if(i.val("on"),""!==a&&(s.val(a),a.indexOf("[et_pb_section")<0&&"skip"!==et_bfb_options.skip_default_content_adding&&(a='[et_pb_section][et_pb_row][et_pb_column type="'+et_bfb_options.default_initial_column_type+'"]['+et_bfb_options.default_initial_text_module+"]"+a+"[/"+et_bfb_options.default_initial_text_module+"][/et_pb_column][/et_pb_row][/et_pb_section]"),b(a)),t("body").append('<div class="et-bfb-page-preloading"></div>'),""!==a||""!==d)l(r);else{var _=t("#post_ID").length>0?t("#post_ID").val():0;t.ajax({type:"POST",url:et_bfb_options.ajaxurl,data:{action:"et_builder_activate_bfb_auto_draft",et_enable_bfb_nonce:et_bfb_options.et_enable_bfb_nonce,et_post_id:_},complete:function(){l(r)}})}})}.call(this,o(5))},5:function(t,e){t.exports=jQuery}});
//# sourceMappingURL=bfb_admin_script.js.map