(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{314:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),a("p",[t._v("The abcjs plugin renders all the abc in a page (determined as a new line beginning with X:).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TODO")]),t._v(" "),a("p",[t._v("This page is currently being enhanced. Check back soon!")])]),t._v(" "),a("p",[t._v("To use, simply include the plugin version in the page:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcjs_plugin_5.10.3-min.js"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Certain options for the plugin can be changed like this, if executed on page load, just after including the plugin file:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ABCJS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hide_abc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("The options available in abc_plugin are:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("show_midi")])]),t._v(" "),a("td",[t._v("NO LONGER SUPPORTED: This option has been removed.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hide_abc")])]),t._v(" "),a("td",[t._v("Whether the abc text should be hidden or not. (false by default) since 1.0.2")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("render_before")])]),t._v(" "),a("td",[t._v("Whether the rendered score should appear before the abc text. (false by default) since 1.0.2")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("midi_options")])]),t._v(" "),a("td",[t._v("NO LONGER SUPPORTED: This option has been removed.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("auto_render_threshold")])]),t._v(" "),a("td",[t._v('Number of tunes beyond which auto rendering is disabled; instead, each tune is accompanied by a "show" button. (default value is 20) since 1.0.2')])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("show_text")])]),t._v(" "),a("td",[t._v('Text to be included on the "show" button before the tune title. (default value is "show score for: ") since 1.0.2')])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("render_options")])]),t._v(" "),a("td",[t._v("The options to be used for the "),a("code",[t._v("engraverParams")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("render_classname")])]),t._v(" "),a("td",[t._v('The class name to use for the resulting SVG (default value is "abcrendered")')])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("text_classname")])]),t._v(" "),a("td",[t._v('The class name to use for wrapping the found ABC text (default value is "abctext")')])])])]),t._v(" "),a("p",[t._v("When abcjs plugin finds an abc tune, it wraps a "),a("code",[t._v("div.abctext")]),t._v(" around it and renders it into a "),a("code",[t._v("div.abcrendered")]),t._v(". The show button is an "),a("code",[t._v("a.abcshow")]),t._v(". These hooks can be used for styling. since 1.0.2")]),t._v(" "),a("h2",{attrs:{id:"abcjs-greasemonkey-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abcjs-greasemonkey-script"}},[t._v("#")]),t._v(" abcjs greasemonkey script")]),t._v(" "),a("p",[t._v("Just include the greasemonkey script in either FireFox or Chrome. You will then get a button that will begin the scan of the website.")])])}),[],!1,null,null,null);e.default=n.exports}}]);