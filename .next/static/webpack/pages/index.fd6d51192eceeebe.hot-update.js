"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sliders/InstructorsSlider.js":
/*!*****************************************************!*\
  !*** ./src/components/Sliders/InstructorsSlider.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.css */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/grid */ \"./node_modules/swiper/modules/grid/grid.min.css\");\n/* harmony import */ var swiper_css_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_grid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Cards_InstructorsCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Cards/InstructorsCard */ \"./src/components/Cards/InstructorsCard.js\");\n\n\n\n\n\n\n\n\n\nconst InstructorSlider = (param)=>{\n    let { data  } = param;\n    console.log(data, \"FROM INSTRUCTOR SLIDER\");\n    swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation\n    ]);\n    swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n        className: \"items-center instractor-sliders\",\n        loopFillGroupWithBlank: true,\n        breakpoints: {\n            640: {\n                slidesPerView: 2,\n                slidesPerGroup: 4,\n                spaceBetween: 20,\n                grid: {\n                    rows: 2,\n                    fill: \"row\"\n                }\n            },\n            1024: {\n                slidesPerView: 6,\n                slidesPerGroup: 6\n            },\n            768: {\n                slidesPerView: 3,\n                slidesPerGroup: 3\n            }\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n            swiper__WEBPACK_IMPORTED_MODULE_2__.Grid\n        ],\n        navigation: true,\n        pagination: {\n            clickable: true\n        },\n        spaceBetween: 5,\n        slidesPerView: 1,\n        children: data === null || data === void 0 ? void 0 : data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_InstructorsCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    data: item\n                }, void 0, false, {\n                    fileName: \"D:\\\\second version latest\\\\src\\\\components\\\\Sliders\\\\InstructorsSlider.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\second version latest\\\\src\\\\components\\\\Sliders\\\\InstructorsSlider.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\second version latest\\\\src\\\\components\\\\Sliders\\\\InstructorsSlider.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = InstructorSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstructorSlider);\nvar _c;\n$RefreshReg$(_c, \"InstructorSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZXJzL0luc3RydWN0b3JzU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2M7QUFDL0I7QUFDSDtBQUNBO0FBQ0Q7QUFDTDtBQUU2QjtBQUN0RCxNQUFNTyxtQkFBbUIsU0FBVztRQUFWLEVBQUNDLEtBQUksRUFBQztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFLO0lBQ2pCTixrREFBYyxDQUFDO1FBQUNFLDhDQUFVQTtLQUFDO0lBQzNCRixrREFBYyxDQUFDO1FBQUNHLDhDQUFVQTtLQUFDO0lBQzNCLHFCQUNJLDhEQUFDTCxnREFBTUE7UUFDSFksV0FBVTtRQUNWQyx3QkFBeUIsSUFBSTtRQUM3QkMsYUFBYTtZQUNiLEtBQUs7Z0JBQ0RDLGVBQWU7Z0JBQ2ZDLGdCQUFlO2dCQUNmQyxjQUFhO2dCQUNiQyxNQUFLO29CQUNEQyxNQUFLO29CQUNMQyxNQUFLO2dCQUNUO1lBQ0o7WUFFQSxNQUFNO2dCQUNGTCxlQUFlO2dCQUNmQyxnQkFBZTtZQUNuQjtZQUNBLEtBQUs7Z0JBQ0RELGVBQWU7Z0JBQ2ZDLGdCQUFlO1lBQ25CO1FBRUE7UUFDQUssU0FBUztZQUFDakIsOENBQVVBO1lBQUVDLDhDQUFVQTtZQUFDRix3Q0FBSUE7U0FBQztRQUN0Q21CLFVBQVU7UUFDVkMsWUFBWTtZQUNSQyxXQUFXLElBQUk7UUFFbEI7UUFDRFAsY0FBYztRQUNkRixlQUFlO2tCQUVkUCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1pQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1osOERBQUN6QixxREFBV0E7MEJBQ1IsNEVBQUNLLDhEQUFjQTtvQkFBQ0UsTUFBTWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3RDO0tBL0NNbkI7QUFpRE4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbGlkZXJzL0luc3RydWN0b3JzU2xpZGVyLmpzPzZkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEdyaWQsIE5hdmlnYXRpb24sUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzJztcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2dyaWRcIjtcclxuXHJcbmltcG9ydCBJbnN0cmFjdG9yQ2FyZCBmcm9tICcuLi9DYXJkcy9JbnN0cnVjdG9yc0NhcmQnO1xyXG5jb25zdCBJbnN0cnVjdG9yU2xpZGVyID0gKHtkYXRhfSkgPT57XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLFwiRlJPTSBJTlNUUlVDVE9SIFNMSURFUlwiKVxyXG4gICAgU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb25dKTtcclxuICAgIFN3aXBlckNvcmUudXNlKFtQYWdpbmF0aW9uXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naXRlbXMtY2VudGVyIGluc3RyYWN0b3Itc2xpZGVycydcclxuICAgICAgICAgICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuaz0ge3RydWV9XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7ICAgICAgICAgICBcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6NCxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjoyMCxcclxuICAgICAgICAgICAgICAgIGdyaWQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6MixcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOlwicm93XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDo2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOjNcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLEdyaWRdfVxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1fVxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfSAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPEluc3RyYWN0b3JDYXJkIGRhdGE9e2l0ZW19Lz4gXHJcbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICApKX1cclxuICAgICAgPC9Td2lwZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yU2xpZGVyIl0sIm5hbWVzIjpbIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3dpcGVyQ29yZSIsIkdyaWQiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIkluc3RyYWN0b3JDYXJkIiwiSW5zdHJ1Y3RvclNsaWRlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlIiwiY2xhc3NOYW1lIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiZ3JpZCIsInJvd3MiLCJmaWxsIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sliders/InstructorsSlider.js\n"));

/***/ })

});