"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/introduction.tsx":
/*!*****************************************!*\
  !*** ./app/components/introduction.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Introduction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"(app-pages-browser)/./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Introduction() {\n    _s();\n    // const timeline = anime.timeline()\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: [\n                \"#Creative\",\n                \"#Developer\"\n            ],\n            translateX: [\n                \"-100%\",\n                \"0%\"\n            ],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 2000\n        });\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: [\n                \"#Full-Stack\",\n                \"#Introduction-Paragraph\"\n            ],\n            translateX: [\n                \"100%\",\n                0\n            ],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 2000\n        });\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: \"#Contact-Me\",\n            width: [\n                \"1rem\",\n                \"9rem\"\n            ],\n            height: [\n                \"1rem\",\n                \"0\"\n            ],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 2000\n        });\n    // timeline\n    //    .add({\n    //         targets: \"#Creative\",\n    //         translateX: \"-100\",\n    //         rotate: 360,\n    //         easing: 'easeInOutQuad',\n    //         duration: 3000,\n    //         // loop: true,\n    //     })\n    //    .add({\n    //         targets: \"#Creative\",\n    //         translateX: 200,\n    //         easing: 'easeInOutQuad',\n    //         duration: 3000,\n    //         // loop: true,\n    //     })\n    //    .play();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"introduction-section\",\n        className: \"flex flex-col pt-40 p-5 bg-primary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"Creative\",\n                className: \"font-abril text-quinary text-2xl text-left\",\n                children: \"CREATIVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                id: \"Full-Stack\",\n                className: \"font-abril text-5xl\",\n                children: \"FULL-STACK\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                id: \"Developer\",\n                className: \"font-abril text-5xl\",\n                children: \"DEVELOPER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                id: \"Introduction-Paragraph\",\n                className: \"font-lato text-base my-8 ml-1 indent-6\",\n                children: \"I AM A DEVELOPER FROM PHILIPPINES. I HAVE 2+ YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                id: \"Contact-Me\",\n                className: \"font-lato text-primary shadow-md border self-end rounded-md w-36 p-2 m-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black\",\n                href: \"contact-section\",\n                children: \"CONTACT ME\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Introduction, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Introduction;\nvar _c;\n$RefreshReg$(_c, \"Introduction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2ludHJvZHVjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QjtBQUNNO0FBRW5CLFNBQVNFOztJQUNwQixvQ0FBb0M7SUFFcENELGdEQUFTQSxDQUFDO1FBQ05ELG1EQUFLQSxDQUFDO1lBQ0ZHLFNBQVM7Z0JBQUM7Z0JBQWE7YUFBYTtZQUNwQ0MsWUFBWTtnQkFBQztnQkFBUzthQUFLO1lBQzNCQyxTQUFTO2dCQUFDO2dCQUFHO2FBQUc7WUFDaEJDLFFBQVE7WUFDUkMsVUFBVTtRQUNkO1FBQ0FQLG1EQUFLQSxDQUFDO1lBQ0ZHLFNBQVM7Z0JBQUM7Z0JBQWU7YUFBMEI7WUFDbkRDLFlBQVk7Z0JBQUM7Z0JBQVE7YUFBRTtZQUN2QkMsU0FBUztnQkFBQztnQkFBRzthQUFHO1lBQ2hCQyxRQUFRO1lBQ1JDLFVBQVU7UUFDZDtRQUNBUCxtREFBS0EsQ0FBQztZQUNGRyxTQUFTO1lBQ1RLLE9BQU87Z0JBQUM7Z0JBQVE7YUFBTztZQUN2QkMsUUFBUTtnQkFBQztnQkFBUTthQUFJO1lBQ3JCSixTQUFTO2dCQUFDO2dCQUFHO2FBQUc7WUFDaEJDLFFBQVE7WUFDUkMsVUFBVTtRQUNkO0lBQ0EsV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGNBQWM7SUFDbEIsR0FBRyxFQUFFO0lBQ0wscUJBQ0ksOERBQUNHO1FBQUlDLElBQUc7UUFBdUJDLFdBQVU7OzBCQUNyQyw4REFBQ0M7Z0JBQUdGLElBQUc7Z0JBQVdDLFdBQVU7MEJBQTZDOzs7Ozs7MEJBQ3pFLDhEQUFDRTtnQkFBR0gsSUFBRztnQkFBYUMsV0FBVTswQkFBc0I7Ozs7OzswQkFDcEQsOERBQUNFO2dCQUFHSCxJQUFHO2dCQUFXQyxXQUFVOzBCQUFzQjs7Ozs7OzBCQUNsRCw4REFBQ0c7Z0JBQUVKLElBQUc7Z0JBQXlCQyxXQUFVOzBCQUF5Qzs7Ozs7OzBCQUdsRiw4REFBQ0k7Z0JBQUVMLElBQUc7Z0JBQWFDLFdBQVU7Z0JBQTJKSyxNQUFNOzBCQUFtQjs7Ozs7Ozs7Ozs7O0FBRzdOO0dBdkR3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uLnRzeD8zMWI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvZHVjdGlvbigpIHtcclxuICAgIC8vIGNvbnN0IHRpbWVsaW5lID0gYW5pbWUudGltZWxpbmUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiBbXCIjQ3JlYXRpdmVcIiwgJyNEZXZlbG9wZXInXSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogW1wiLTEwMCVcIiwgXCIwJVwiXSxcclxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDUwXSxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiBbXCIjRnVsbC1TdGFja1wiLCAnI0ludHJvZHVjdGlvbi1QYXJhZ3JhcGgnXSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogW1wiMTAwJVwiLCAwXSxcclxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDUwXSxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiBcIiNDb250YWN0LU1lXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBbXCIxcmVtXCIsIFwiOXJlbVwiXSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBbXCIxcmVtXCIsIFwiMFwiXSxcclxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDUwXSxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGltZWxpbmVcclxuICAgICAgICAvLyAgICAuYWRkKHtcclxuICAgICAgICAvLyAgICAgICAgIHRhcmdldHM6IFwiI0NyZWF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICB0cmFuc2xhdGVYOiBcIi0xMDBcIixcclxuICAgICAgICAvLyAgICAgICAgIHJvdGF0ZTogMzYwLFxyXG4gICAgICAgIC8vICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgLmFkZCh7XHJcbiAgICAgICAgLy8gICAgICAgICB0YXJnZXRzOiBcIiNDcmVhdGl2ZVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgdHJhbnNsYXRlWDogMjAwLFxyXG4gICAgICAgIC8vICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgLnBsYXkoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiaW50cm9kdWN0aW9uLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTQwIHAtNSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cIkNyZWF0aXZlXCIgY2xhc3NOYW1lPVwiZm9udC1hYnJpbCB0ZXh0LXF1aW5hcnkgdGV4dC0yeGwgdGV4dC1sZWZ0XCI+Q1JFQVRJVkU8L2gyPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJGdWxsLVN0YWNrXCIgY2xhc3NOYW1lPVwiZm9udC1hYnJpbCB0ZXh0LTV4bFwiPkZVTEwtU1RBQ0s8L2gxPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJEZXZlbG9wZXJcImNsYXNzTmFtZT1cImZvbnQtYWJyaWwgdGV4dC01eGxcIj5ERVZFTE9QRVI8L2gxPlxyXG4gICAgICAgICAgICA8cCBpZD0nSW50cm9kdWN0aW9uLVBhcmFncmFwaCcgY2xhc3NOYW1lPVwiZm9udC1sYXRvIHRleHQtYmFzZSBteS04IG1sLTEgaW5kZW50LTZcIj5cclxuICAgICAgICAgICAgICAgIEkgQU0gQSBERVZFTE9QRVIgRlJPTSBQSElMSVBQSU5FUy4gSSBIQVZFIDIrIFlFQVJTIE9GIEVYUEVSSUVOQ0UgSU4gREVWRUxPUElORyBWQVJJT1VTIFRZUEVTIE9GIFdFQiBBUFBMSUNBVElPTlMuIEkgTE9WRSBOQVRVUkUsIFBJWlpBIEFORCBBUlQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGEgaWQ9XCJDb250YWN0LU1lXCIgY2xhc3NOYW1lPVwiZm9udC1sYXRvIHRleHQtcHJpbWFyeSBzaGFkb3ctbWQgYm9yZGVyIHNlbGYtZW5kIHJvdW5kZWQtbWQgdy0zNiBwLTIgbS0yIGJnLXRlcnRpYXJ5IGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC1zZWNvbmRhcnkgaG92ZXI6dHJhbnNpdGlvbiBib3JkZXItYmxhY2tcIiBocmVmPXtcImNvbnRhY3Qtc2VjdGlvblwifT5DT05UQUNUIE1FPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImFuaW1lIiwidXNlRWZmZWN0IiwiSW50cm9kdWN0aW9uIiwidGFyZ2V0cyIsInRyYW5zbGF0ZVgiLCJvcGFjaXR5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaDIiLCJoMSIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/introduction.tsx\n"));

/***/ })

});