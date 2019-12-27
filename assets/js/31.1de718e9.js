(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{316:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-notes"}},[e._v("#")]),e._v(" Release Notes")]),e._v(" "),a("p",[e._v("Full release notes can be found in the RELEASE.md file.")]),e._v(" "),a("h2",{attrs:{id:"notes-for-version-5-9-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-for-version-5-9-0"}},[e._v("#")]),e._v(" Notes for Version 5.9.0")]),e._v(" "),a("p",[e._v("This is a beta version of the new synth method. It is likely there will be some changes to the API in the short run but hopefully not too much.")]),e._v(" "),a("p",[e._v("Please try this out and report any issues that you have.")]),e._v(" "),a("h2",{attrs:{id:"special-note-for-version-5-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-note-for-version-5-8-0"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Special note for Version 5.8.0:")])]),e._v(" "),a("p",[e._v("A new method for creating synth sound is included as a "),a("strong",[e._v("beta")]),e._v(" release in this release. See "),a("router-link",{attrs:{to:"/upgrading/synth.html"}},[e._v("Synth Documentation")]),e._v(" for details in how to use it. That means that the current method of creating sound using midi.js will be deprecated at some point in the future. It will be supported in its current form as long as possible. The new synth is much smaller and faster and appears less buggy. It does not work on IE 11 or older browsers, however, so it might not yet be appropriate for your site.")],1),e._v(" "),a("h2",{attrs:{id:"special-notes-for-version-5-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-notes-for-version-5-0-0"}},[e._v("#")]),e._v(" Special notes for Version 5.0.0:")]),e._v(" "),a("ul",[a("li",[e._v("The dependency on the Raphael library has been removed! This has made the minimized package 90K smaller, and has increased the speed of generating the SVG image by about 6 times!")])]),e._v(" "),a("p",[e._v("For the most common use of creating either the sheet music or the audio, there isn't any change.")]),e._v(" "),a("p",[e._v("However, if you use the animation callback in the audio to manipulate the notes, then be aware that, instead of receiving elements that are wrapped in a Raphael object, you now receive the actual\nSVG element. For the most common example of the animation functionality, the following was recommended to change the color of notes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("element.attr({ fill: color });\n")])])]),a("p",[e._v("That should be changed to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('element.setAttribute("fill", color);\n')])])]),a("ul",[a("li",[e._v("If you do specific manipulation of the SVG, you will need to retest your code. The generated SVG, while it looks the same on the page, has changed somewhat. The selectors you use may return different results.")])]),e._v(" "),a("h2",{attrs:{id:"special-notes-for-version-4-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-notes-for-version-4-0-0"}},[e._v("#")]),e._v(" Special notes for Version 4.0.0:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("BREAKING CHANGE")]),e._v(": The names of all the classes that are generated are now prefixed with "),a("code",[e._v("abcjs-")]),e._v(". Any code that searched for particular class names before will have to be adjusted.")])]),e._v(" "),a("li",[a("p",[e._v("The parameters have been combined into one set of parameters, instead of three sets like previous versions. The old way of calling the parameters will still work, but you are encouraged to use the new, simplified approach going forward.")])])]),e._v(" "),a("h2",{attrs:{id:"special-notes-for-version-3-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-notes-for-version-3-3-0"}},[e._v("#")]),e._v(" Special notes for Version 3.3.0:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The build process has switched over to webpack. The minimization is now done with UglifyJS. This shouldn't cause any side effects.")])]),e._v(" "),a("li",[a("p",[e._v('The "editor" version of the library has been rolled into the "basic" version. There is only the "basic" and "midi" versions now, since the editor code doesn\'t add much to the size.')])]),e._v(" "),a("li",[a("p",[e._v('The npm version has a new export called "signature" that gives your javascript code some version information.')])]),e._v(" "),a("li",[a("p",[e._v("The documentation has all been moved to the "),a("code",[e._v("/docs")]),e._v(" folder.")])]),e._v(" "),a("li",[a("p",[e._v("The examples have all been moved to the "),a("code",[e._v("/examples")]),e._v(" folder.")])])]),e._v(" "),a("h2",{attrs:{id:"special-note-for-version-3-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-note-for-version-3-2-0"}},[e._v("#")]),e._v(" Special note for Version 3.2.0:")]),e._v(" "),a("p",[e._v("abcjs is proud to announce that it can now be installed with "),a("code",[e._v("npm")]),e._v(". Instead of including the minimized files on your page, you can use the library by doing the following in your project:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save abcjs\n")])])]),a("p",[e._v("Note that the minimized versions will still be maintained, so you can still copy the minimized file to your project.")]),e._v(" "),a("h2",{attrs:{id:"special-notes-for-version-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-notes-for-version-3-0"}},[e._v("#")]),e._v(" Special notes for Version 3.0:")]),e._v(" "),a("p",[e._v("In-browser "),a("router-link",{attrs:{to:"/docs/upgrading/midi.html"}},[e._v("MIDI")]),e._v(" is now supported. There are some extra dependencies when using that feature. Downloadable MIDI is still supported with no extra dependencies.")],1),e._v(" "),a("h2",{attrs:{id:"api-changes-for-version-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes-for-version-3-0"}},[e._v("#")]),e._v(" API Changes for Version 3.0")]),e._v(" "),a("ul",[a("li",[e._v("Added viewPortHorizontal and scrollHorizontal to the renderParams.")]),e._v(" "),a("li",[e._v('Add class "slur" to slurs and ties.')]),e._v(" "),a("li",[e._v('Add "hint measure"')]),e._v(" "),a("li",[e._v("Allow scrolling in the animation.")]),e._v(" "),a("li",[e._v("Handle %%titlecaps directive.")]),e._v(" "),a("li",[e._v("Add curly brace to indicate piano part (with inspiration from Anthony P. Pancerella).")]),e._v(" "),a("li",[e._v("Add invisible marker to the top of each system so that it can be found easily.")]),e._v(" "),a("li",[e._v("Add an option to put each line in a separate svg so that browsers will paginate correctly.")])]),e._v(" "),a("h2",{attrs:{id:"api-changes-for-version-3-0-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes-for-version-3-0-beta"}},[e._v("#")]),e._v(" API Changes for Version 3.0 Beta")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('The default MIDI program has been changed to "0".')])]),e._v(" "),a("li",[a("p",[e._v("There are a number of new MIDI parameters.")])])]),e._v(" "),a("h2",{attrs:{id:"api-changes-for-version-1-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes-for-version-1-11"}},[e._v("#")]),e._v(" API Changes for Version 1.11")]),e._v(" "),a("p",[e._v('"Bouncing Ball" cursor:')]),e._v(" "),a("pre",[a("code",[e._v("ABCJS.startAnimation(paper, tune, options)\n\tpaper: the output div that the music is in.\n\ttune: the tune object returned by renderAbc.\n\toptions: a hash containing the following:\n\t\thideFinishedMeasures: true or false [ false is the default ]\n\t\tshowCursor: true or false [ false is the default ]\n\t\tbpm: number of beats per minute [ the default is whatever is in the Q: field ]\n")])]),e._v(" "),a("p",[a("code",[e._v("renderABC()")]),e._v(" now returns the object that was created by the process. This allows further processing.")]),e._v(" "),a("p",[a("code",[e._v("highlight()")]),e._v(" and "),a("code",[e._v("unhighlight()")]),e._v(" now can be passed an optional class name and color.")]),e._v(" "),a("p",[e._v("Descriptive classes to all SVG elements: If you include "),a("code",[e._v("{ add_classes: true }")]),e._v(" in the rendering params,\nthen a set of classes are applied to each SVG element so they can be manipulated with css.")]),e._v(" "),a("h2",{attrs:{id:"api-changes-for-version-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes-for-version-1-3"}},[e._v("#")]),e._v(" API Changes for Version 1.3")]),e._v(" "),a("p",[e._v("There is a new public entry point that is designed for those who want some information about what is in a tunebook before processing it.")]),e._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Tunebook is the contents of the text file containing one or more")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ABC-formatted tunes, plus global header info, and inter-tune text.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" book "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ABCJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("TuneBook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("tunebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" fileHeader "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" numberOfTunes "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" numberOfTunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" tuneAndHeader "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" justTheTune "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tunes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" tune "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTuneById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ntune "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTuneByTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("The variable "),a("code",[e._v("book")]),e._v(" contains:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Member")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("book.header")]),e._v(" "),a("td",[e._v("This is all of the text that appears before the first tune starts in the file.")])]),e._v(" "),a("tr",[a("td",[e._v("book.tunes.length")]),e._v(" "),a("td",[e._v("This is how many tunes are in that file.")])]),e._v(" "),a("tr",[a("td",[e._v("book.tunes[i].title")]),e._v(" "),a("td",[e._v("This is the first title found for the particular tune. White space is trimmed from both the beginning and end.")])]),e._v(" "),a("tr",[a("td",[e._v("book.tunes[i].abc")]),e._v(" "),a("td",[e._v("This is the particular tune with the global header information added to it. This is what should be passed to the parser in most cases.")])]),e._v(" "),a("tr",[a("td",[e._v("book.tunes[i].pure")]),e._v(" "),a("td",[e._v("This is the particular tune without the header.")])]),e._v(" "),a("tr",[a("td",[e._v("book.tunes[i].id")]),e._v(" "),a("td",[e._v("This is the id (that is, the text on the X: line). White space is trimmed from both the beginning and end.")])]),e._v(" "),a("tr",[a("td",[e._v("book.getTuneById")]),e._v(" "),a("td",[e._v("This will find the FIRST tune in the tune book with the id.")])]),e._v(" "),a("tr",[a("td",[e._v("book.getTuneByTitle")]),e._v(" "),a("td",[e._v("This will find the FIRST tune in the tune book with the title.")])])])]),e._v(" "),a("h2",{attrs:{id:"api-changes-for-version-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes-for-version-1-1"}},[e._v("#")]),e._v(" API Changes for Version 1.1")]),e._v(" "),a("p",[e._v("IMPORTANT: Version 1.1 has removed all globals and any side effects of ABCJS except for this single global:")]),e._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("ABCJS")]),e._v("\n")])])]),a("p",[e._v("This means that you will have to modify your pages to use the new syntax. All of the old entry points are still available with a slightly different name. Here is a list of all recommended entry points:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("New name")]),e._v(" "),a("th",[e._v("Old name")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ABCJS.numberOfTunes")]),e._v(" "),a("td",[e._v("numberOfTunes")])]),e._v(" "),a("tr",[a("td",[e._v("ABCJS.renderAbc")]),e._v(" "),a("td",[e._v("renderABC")])]),e._v(" "),a("tr",[a("td",[e._v("ABCJS.renderMidi")]),e._v(" "),a("td",[e._v("renderMidi")])]),e._v(" "),a("tr",[a("td",[e._v("ABCJS.Editor")]),e._v(" "),a("td",[e._v("ABCEditor")])]),e._v(" "),a("tr",[a("td",[e._v("ABCJS.plugin")]),e._v(" "),a("td",[e._v("abc_plugin")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);