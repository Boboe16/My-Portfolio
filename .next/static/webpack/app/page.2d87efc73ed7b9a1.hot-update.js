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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Introduction; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"(app-pages-browser)/./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Introduction() {\n    _s();\n    // const timeline = anime.timeline()\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: [\n                \"#Creative\",\n                \"#Developer\"\n            ],\n            translateX: [\n                \"-100%\",\n                \"0%\"\n            ],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 2000\n        });\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: [\n                \"#Full-Stack\",\n                \"#Introduction-Paragraph\"\n            ],\n            translateX: [\n                \"100%\",\n                0\n            ],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 2000\n        });\n        (0,animejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            targets: \"#Contact-Me\",\n            // size: [\"0\", \"100px\"],\n            // height: [\"1rem\", \"fit-content\"],\n            opacity: [\n                0,\n                50\n            ],\n            easing: \"easeInOutQuad\",\n            duration: 4000\n        });\n    // timeline\n    //    .add({\n    //         targets: \"#Creative\",\n    //         translateX: \"-100\",\n    //         rotate: 360,\n    //         easing: 'easeInOutQuad',\n    //         duration: 3000,\n    //         // loop: true,\n    //     })\n    //    .add({\n    //         targets: \"#Creative\",\n    //         translateX: 200,\n    //         easing: 'easeInOutQuad',\n    //         duration: 3000,\n    //         // loop: true,\n    //     })\n    //    .play();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"introduction-section\",\n        className: \"flex flex-col pt-40 p-5 bg-primary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"Creative\",\n                className: \"font-abril text-quinary text-2xl text-left\",\n                children: \"CREATIVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                id: \"Full-Stack\",\n                className: \"font-abril text-5xl\",\n                children: \"FULL-STACK\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                id: \"Developer\",\n                className: \"font-abril text-5xl\",\n                children: \"DEVELOPER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                id: \"Introduction-Paragraph\",\n                className: \"font-lato text-base my-8 ml-1 indent-6\",\n                children: \"I AM A DEVELOPER FROM PHILIPPINES. I HAVE 2+ YEARS OF EXPERIENCE IN DEVELOPING VARIOUS TYPES OF WEB APPLICATIONS. I LOVE NATURE, PIZZA AND ART.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                id: \"Contact-Me\",\n                className: \"font-lato text-primary shadow-md border self-end text-center rounded-md w-36 p-2 m-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black\",\n                href: \"#contact-section\",\n                children: \"CONTACT ME\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richill rectin\\\\Documents\\\\doc\\\\my-web-portfolio\\\\app\\\\components\\\\introduction.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Introduction, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Introduction;\nvar _c;\n$RefreshReg$(_c, \"Introduction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2ludHJvZHVjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QjtBQUNNO0FBRW5CLFNBQVNFOztJQUNwQixvQ0FBb0M7SUFFcENELGdEQUFTQSxDQUFDO1FBQ05ELG1EQUFLQSxDQUFDO1lBQ0ZHLFNBQVM7Z0JBQUM7Z0JBQWE7YUFBYTtZQUNwQ0MsWUFBWTtnQkFBQztnQkFBUzthQUFLO1lBQzNCQyxTQUFTO2dCQUFDO2dCQUFHO2FBQUc7WUFDaEJDLFFBQVE7WUFDUkMsVUFBVTtRQUNkO1FBQ0FQLG1EQUFLQSxDQUFDO1lBQ0ZHLFNBQVM7Z0JBQUM7Z0JBQWU7YUFBMEI7WUFDbkRDLFlBQVk7Z0JBQUM7Z0JBQVE7YUFBRTtZQUN2QkMsU0FBUztnQkFBQztnQkFBRzthQUFHO1lBQ2hCQyxRQUFRO1lBQ1JDLFVBQVU7UUFDZDtRQUNBUCxtREFBS0EsQ0FBQztZQUNGRyxTQUFTO1lBQ1Qsd0JBQXdCO1lBQ3hCLG1DQUFtQztZQUNuQ0UsU0FBUztnQkFBQztnQkFBRzthQUFHO1lBQ2hCQyxRQUFRO1lBQ1JDLFVBQVU7UUFDZDtJQUNBLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsU0FBUztJQUNULFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxjQUFjO0lBQ2xCLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDQztRQUFJQyxJQUFHO1FBQXVCQyxXQUFVOzswQkFDckMsOERBQUNDO2dCQUFHRixJQUFHO2dCQUFXQyxXQUFVOzBCQUE2Qzs7Ozs7OzBCQUN6RSw4REFBQ0U7Z0JBQUdILElBQUc7Z0JBQWFDLFdBQVU7MEJBQXNCOzs7Ozs7MEJBQ3BELDhEQUFDRTtnQkFBR0gsSUFBRztnQkFBV0MsV0FBVTswQkFBc0I7Ozs7OzswQkFDbEQsOERBQUNHO2dCQUFFSixJQUFHO2dCQUF5QkMsV0FBVTswQkFBeUM7Ozs7OzswQkFHbEYsOERBQUNJO2dCQUFFTCxJQUFHO2dCQUFhQyxXQUFVO2dCQUF1S0ssTUFBTTswQkFBb0I7Ozs7Ozs7Ozs7OztBQUcxTztHQXZEd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2ludHJvZHVjdGlvbi50c3g/MzFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRyb2R1Y3Rpb24oKSB7XHJcbiAgICAvLyBjb25zdCB0aW1lbGluZSA9IGFuaW1lLnRpbWVsaW5lKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogW1wiI0NyZWF0aXZlXCIsICcjRGV2ZWxvcGVyJ10sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDAlXCIsIFwiMCVcIl0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCA1MF0sXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogW1wiI0Z1bGwtU3RhY2tcIiwgJyNJbnRyb2R1Y3Rpb24tUGFyYWdyYXBoJ10sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFtcIjEwMCVcIiwgMF0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCA1MF0sXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogXCIjQ29udGFjdC1NZVwiLFxyXG4gICAgICAgICAgICAvLyBzaXplOiBbXCIwXCIsIFwiMTAwcHhcIl0sXHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogW1wiMXJlbVwiLCBcImZpdC1jb250ZW50XCJdLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBbMCwgNTBdLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aW1lbGluZVxyXG4gICAgICAgIC8vICAgIC5hZGQoe1xyXG4gICAgICAgIC8vICAgICAgICAgdGFyZ2V0czogXCIjQ3JlYXRpdmVcIixcclxuICAgICAgICAvLyAgICAgICAgIHRyYW5zbGF0ZVg6IFwiLTEwMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgcm90YXRlOiAzNjAsXHJcbiAgICAgICAgLy8gICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gbG9vcDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAuYWRkKHtcclxuICAgICAgICAvLyAgICAgICAgIHRhcmdldHM6IFwiI0NyZWF0aXZlXCIsXHJcbiAgICAgICAgLy8gICAgICAgICB0cmFuc2xhdGVYOiAyMDAsXHJcbiAgICAgICAgLy8gICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gbG9vcDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAucGxheSgpO1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJpbnRyb2R1Y3Rpb24tc2VjdGlvblwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNDAgcC01IGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwiQ3JlYXRpdmVcIiBjbGFzc05hbWU9XCJmb250LWFicmlsIHRleHQtcXVpbmFyeSB0ZXh0LTJ4bCB0ZXh0LWxlZnRcIj5DUkVBVElWRTwvaDI+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cIkZ1bGwtU3RhY2tcIiBjbGFzc05hbWU9XCJmb250LWFicmlsIHRleHQtNXhsXCI+RlVMTC1TVEFDSzwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBpZD1cIkRldmVsb3BlclwiY2xhc3NOYW1lPVwiZm9udC1hYnJpbCB0ZXh0LTV4bFwiPkRFVkVMT1BFUjwvaDE+XHJcbiAgICAgICAgICAgIDxwIGlkPSdJbnRyb2R1Y3Rpb24tUGFyYWdyYXBoJyBjbGFzc05hbWU9XCJmb250LWxhdG8gdGV4dC1iYXNlIG15LTggbWwtMSBpbmRlbnQtNlwiPlxyXG4gICAgICAgICAgICAgICAgSSBBTSBBIERFVkVMT1BFUiBGUk9NIFBISUxJUFBJTkVTLiBJIEhBVkUgMisgWUVBUlMgT0YgRVhQRVJJRU5DRSBJTiBERVZFTE9QSU5HIFZBUklPVVMgVFlQRVMgT0YgV0VCIEFQUExJQ0FUSU9OUy4gSSBMT1ZFIE5BVFVSRSwgUElaWkEgQU5EIEFSVC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YSBpZD1cIkNvbnRhY3QtTWVcIiBjbGFzc05hbWU9XCJmb250LWxhdG8gdGV4dC1wcmltYXJ5IHNoYWRvdy1tZCBib3JkZXIgc2VsZi1lbmQgdGV4dC1jZW50ZXIgcm91bmRlZC1tZCB3LTM2IHAtMiBtLTIgYmctdGVydGlhcnkgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXNlY29uZGFyeSBob3Zlcjp0cmFuc2l0aW9uIGJvcmRlci1ibGFja1wiIGhyZWY9e1wiI2NvbnRhY3Qtc2VjdGlvblwifT5DT05UQUNUIE1FPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImFuaW1lIiwidXNlRWZmZWN0IiwiSW50cm9kdWN0aW9uIiwidGFyZ2V0cyIsInRyYW5zbGF0ZVgiLCJvcGFjaXR5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImgyIiwiaDEiLCJwIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/introduction.tsx\n"));

/***/ })

});