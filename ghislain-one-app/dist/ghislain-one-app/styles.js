(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/albumviewer.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/css/albumviewer.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n}\r\nbody {\r\n    overflow-x: hidden;\r\n    letter-spacing:0.6px;\r\n}\r\n.page-header-text{\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n    color: steelblue;\r\n}\r\nh2,h3 {\r\n    font-family: Trebuchet,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-weight: bold;\r\n}\r\nh3 {\r\n    color: steelblue;\r\n}\r\n.line-breaks {\r\n  white-space: pre-wrap;\r\n}\r\n@media(max-width: 768px) {\r\n  .hidden-small {\r\n    display: none;\r\n  }\r\n}\r\n@media(max-width: 768px) {\r\n  .hidden-xs {\r\n    display: none;\r\n  }\r\n}\r\n.statusbar-push{\r\n  /* add 15px for iPhone status bar */\r\n  padding-top: 15px;\r\n}\r\n#TitleBar {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 8px;\r\n    z-index: 11;\r\n}\r\n#Toolbar {\r\n    display: none;\r\n}\r\n#Toolbar-Top {\r\n}\r\n#TopMenu {\r\n}\r\n#SearchBox {\r\n  background-color: #FFFFFF;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAA5ElEQVQYGVXAwUvCYByH8d+f/jgqQiqFVURB0S7lGIJnJSUt6BJE0a1dCoMwQEQ1Z/v2vk5CPyYpe7kMnXqaq2DS8JRCqTHVkml4zL/zH3m2OAMO7z/7nV2gLc9egcZYzncFdkZyLIH9sZbeA3iUY0fQU+H3Aq7kWAgfWmlBJMdCeNNKHSI5dgKxCrMqtOVYC7b68vI7IJVjX9tQec6kWTeA8kSO5Z0SBGE9ruLV5pJM+U2JNXEmmZQ/7LFUxksWMjnTp1Z03U0nNbwkM62Zx3i3pnVZgtM0bVgkcDAwbcp6zYH+AFclPeThRP9xAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n  background-position: 5px 5px;\r\n  vertical-align: center;\r\n  padding-left: 27px !important;\r\n}\r\n.page-header-text {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    color:  #0092d0;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid #e1e1e1;\r\n}\r\n.separator {\r\n    padding: 3px 0;\r\n    margin: 10px 0 15px 0;\r\n    border-bottom: solid 1px #e1e1e1;\r\n}\r\n#TopMenu input {\r\n        color: #535353;\r\n        padding: 4px 5px;\r\n        height: auto;\r\n    }\r\n#MainView {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 65px;\r\n        bottom: 0;\r\n        padding-top: 10px;\r\n        width:100%;\r\n        z-index: 11;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n        padding-top: 10px;\r\n        background: white;\r\n        overflow-x: hidden;\r\n    }\r\n.banner {\r\n\r\n    background: #535353;\r\n    color: #e1e1e1;\r\n    border-bottom: solid 1px black;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    height: 57px;\r\n    width: 100%;\r\n    z-index: 10;\r\n}\r\n.banner.active {\r\n        color: white;\r\n        font-weight: bolder;\r\n    }\r\n.banner nav {\r\n    display: inline-block;\r\n    margin-right: 3px;\r\n    padding: 4px;\r\n}\r\n.banner nav a, .banner nav input {\r\n        display: inline-block;\r\n        padding: 6px 6px 6px;\r\n        color: #e1e1e1;\r\n        text-decoration: none;\r\n    }\r\n.banner nav a img {\r\n        height: 23px;\r\n        vertical-align: top;\r\n    }\r\n.banner nav a:hover {\r\n        color: white;\r\n        background: #767676;\r\n        text-decoration: none;\r\n        border-bottom: solid 4px silver;\r\n        border-radius: 2px;\r\n    }\r\n.banner nav a.active, .banner nav a.selected\r\n     {\r\n        color: white;\r\n        font-weight: bold;\r\n        border-bottom: solid 4px orange;\r\n        border-radius: 2px;\r\n    }\r\n.banner-bottom {\r\n    position: fixed;\r\n    bottom: 0;\r\n    top: auto;\r\n    text-align: center;\r\n    padding-top: inherit;\r\n    height: 43px;\r\n\r\n    display: none;\r\n}\r\n.banner-bottom a {\r\n        margin: 0 20px;\r\n    }\r\n@media(max-width: 640px) {\r\n        .banner nav a span {\r\n            display: none;\r\n        }\r\n    }\r\n.album {\r\n        float: left;\r\n        position: relative;\r\n\r\n        margin-bottom: 10px;\r\n        margin-right: 5px;\r\n        padding: 10px !important;\r\n        border: 1px solid silver;\r\n        border-radius: 6px;\r\n        overflow-y: hidden;\r\n        height: 140px;\r\n        max-width: 235px;\r\n        transition: background linear 375ms;\r\n    }\r\n.album-detail-container{\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n.album:hover {\r\n        background: steelblue;\r\n        color: white !important;\r\n        cursor: pointer;\r\n    }\r\n.album:hover .album-overlay {\r\n        display: block;\r\n    }\r\n.album-overlay {\r\n        position: relative;\r\n        float: right;\r\n        background: #034e8d;\r\n        color: whitesmoke;\r\n        padding: 5px;\r\n        min-width: 40px;\r\n        display: none;\r\n        margin-top: -10px;\r\n        margin-right: -10px;\r\n        border-radius: 3px;\r\n        opacity: 0.85;\r\n        z-index: 1000;\r\n        box-shadow: 2px 2px 4px #535353;\r\n\r\n    }\r\n.album-overlay:hover {\r\n         opacity: 1;\r\n     }\r\n.album-overlay a, .album-overlay a:hover {\r\n        color: beige;\r\n        text-decoration: none;\r\n    }\r\n.album-overlay a:hover {\r\n        color: white;\r\n    }\r\n.album-title {\r\n    font-weight: bold;\r\n}\r\n.album-title-big {\r\n    font-weight: bold;\r\n    font-size: 1.55em;\r\n}\r\n.album-descript {\r\n  font-size: 0.85em;\r\n  overflow: hidden;\r\n  max-height: 83px;\r\n}\r\n.album-artist {\r\n    font-size: 0.85em;\r\n    font-style: italic;\r\n    color: #2a5fb4;\r\n}\r\n.album-year {\r\n    font-size: 0.85em;\r\n    color: steelblue;\r\n}\r\n.album-image,.album-image-big {\r\n    width: 55px;\r\n    float: left;\r\n    border-radius: 35px;\r\n}\r\n.album-image-big {\r\n    width: auto;\r\n    float: none;\r\n    max-width: 95%;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2px 4px #535353;\r\n}\r\n@media(max-width: 768px){\r\n    .album-image-big {\r\n        margin-bottom: 10px;\r\n    }\r\n}\r\n@media(min-width: 960px) {\r\n    .album {\r\n        max-width: 32%;\r\n    }\r\n    .album-image {\r\n        width: 70px;\r\n    }\r\n}\r\n.song {\r\n    font-size: .85em;\r\n    padding: 5px;\r\n    border-bottom: 1px dashed silver;\r\n}\r\n.separator {\r\n    border-bottom: 1px solid lightgrey;\r\n    margin: 5px auto 15px;\r\n    height: 1px;\r\n}\r\nform input:not([type=submit]):not([type=checkbox]):not([type=radio]):not([type=file]):not(.ng-pristine):not(.ng-untouched).ng-invalid,\r\nselect:not(ng-pristine).ng-invalid, textarea:not(.ng-pristine).ng-invalid {\r\n  background: lightpink;\r\n  border-left: 5px solid red;\r\n}\r\n@media (max-width: 640px) {\r\n    .album {\r\n        max-width: 100% !important;\r\n        min-height: 100px;\r\n    }\r\n    .album-image {\r\n        width: 70px;\r\n    }\r\n    #Toolbar-Top {\r\n        display: none;\r\n    }\r\n    #Toolbar {\r\n        display: block;\r\n    }\r\n    .banner-bottom {\r\n        display: block;\r\n    }\r\n    #MainView {\r\n        bottom: 43px;\r\n    }\r\n}\r\n@-webkit-keyframes slideOutLeft {\r\n     from {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0);\r\n    }\r\n     to {\r\n        -webkit-transform: translateX(-100%);\r\n        transform: translateX(-100%);\r\n    }\r\n}\r\n@keyframes slideOutLeft {\r\n    from {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(-100%);\r\n        transform: translateX(-100%);\r\n    }\r\n}\r\n@-webkit-keyframes slideInRight {\r\n    from {\r\n        -webkit-transform: translateX(100%);\r\n        transform: translateX(100%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes slideInRight {\r\n    from {\r\n        -webkit-transform: translateX(100%);\r\n        transform: translateX(100%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n        transform: translateX(0);\r\n    }\r\n}\r\n.slide-animation.ng-enter {\r\n    -webkit-animation: slideInRight 0.50s both ease-in;\r\n    animation: slideInRight 0.50s both ease-in;\r\n    z-index: 9999;\r\n}\r\n.slide-animation.ng-leave {\r\n   -webkit-animation: slideOutLeft 0.50s both ease-in;\r\n    animation: slideOutLeft 0.50s both ease-in;\r\n    z-index: 8888;\r\n}\r\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\r\n  display: none !important;\r\n}\r\n/* fix Bootstrap modal popup */\r\n.modal {\r\n    top: 100px;\r\n    margin: 10px auto;\r\n    z-index: 1050 !important;\r\n}\r\n.modal-backdrop {\r\n    /* less than .modal z-index */\r\n    /*z-index: 100 !important;*/\r\n    display:none;\r\n}\r\n/*.modal-dialog {\r\n    margin: 10px auto;\r\n    z-index: 1100 !important;\r\n}*/\r\n.modal-header {\r\n    padding: 15px 15px 5px;\r\n}\r\n.modal-body {\r\n    padding: 10px 20px 5px 20px;\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/albumviewer.css":
/*!*********************************!*\
  !*** ./src/css/albumviewer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!./albumviewer.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/albumviewer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./src/css/albumviewer.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GhislainZeleu\Desktop\Web-Topol\my-first-angular5\ghislain-one-app\src\css\albumviewer.css */"./src/css/albumviewer.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map