(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{294:function(t,e,a){"use strict";a.r(e);var n={mounted:function(){var t=this;setTimeout((function(){t.callbacks=[t.$refs.numTunes,t.$refs.tuneById,t.$refs.tuneByTitle]}),500)},data:function(){return{callbacks:[]}}},s=a(1),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tune-book"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-book"}},[t._v("#")]),t._v(" Tune Book")]),t._v(" "),a("p",[t._v("The following analysis is based on the abc string that is in the textarea at the bottom of this page.")]),t._v(" "),a("h2",{attrs:{id:"number-of-tunes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-of-tunes"}},[t._v("#")]),t._v(" Number of Tunes")]),t._v(" "),a("p",[t._v("It might be useful to know in advance how many tunes are in a tunebook before rendering them:")]),t._v(" "),a("num-tunes",{ref:"numTunes"}),t._v(" "),a("h2",{attrs:{id:"get-tune-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-tune-info"}},[t._v("#")]),t._v(" Get Tune Info")]),t._v(" "),a("p",[t._v("The following assumes you've created a "),a("code",[t._v("TuneBook")]),t._v(" object like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var tunebook = ABCJS.TuneBook(tunebookString);\n")])])]),a("h3",{attrs:{id:"extract-tune-by-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extract-tune-by-id"}},[t._v("#")]),t._v(" Extract Tune by ID")]),t._v(" "),a("p",[t._v("If you know the ID, then you can use the following to get a particular tune in a tunebook. The id is the value in the "),a("code",[t._v("X:")]),t._v(" field.")]),t._v(" "),a("tune-book-info",{ref:"tuneById",attrs:{type:"id"}}),t._v(" "),a("h3",{attrs:{id:"extract-tune-by-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extract-tune-by-title"}},[t._v("#")]),t._v(" Extract Tune by Title")]),t._v(" "),a("p",[t._v("If you know the title, then you can use the following to get a particular tune in a tunebook. The title is the value in the "),a("em",[t._v("first")]),t._v(" "),a("code",[t._v("T:")]),t._v(" field.")]),t._v(" "),a("tune-book-info",{ref:"tuneByTitle",attrs:{type:"title"}}),t._v(" "),a("h3",{attrs:{id:"get-all-tune-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-all-tune-info"}},[t._v("#")]),t._v(" Get all Tune Info")]),t._v(" "),a("p",[t._v("You can directly access the array of tunes in a tune book with:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arrayOfTunes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tunebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"test-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-data"}},[t._v("#")]),t._v(" Test Data")]),t._v(" "),a("p",[t._v("Paste in any ABC you want here and see how that affects the analysis above:")]),t._v(" "),a("example-tune-book",{attrs:{callbacks:t.callbacks}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);