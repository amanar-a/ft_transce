"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game/index.tsx":
/*!******************************!*\
  !*** ./pages/game/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref4[0], changeOpp = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref2[0], changeScore = ref2[1];\n    var test = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref, ref3;\n        (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"matchmaking\");\n        (ref3 = props.socket) === null || ref3 === void 0 ? void 0 : ref3.on(\"matchmaking\", function(data) {\n            if (typeof data != \"string\") {\n                changeName(function(oldvalues) {\n                    return _objectSpread({}, oldvalues, {\n                        player1: data[0],\n                        player2: data[1]\n                    });\n                });\n                changeOpp(\"Found\");\n                axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                    userName1: data[0],\n                    userName2: data[1]\n                }, {\n                    headers: {\n                        Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                    }\n                }).then(function(res) {\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            pic1: res.data.user1,\n                            pic2: res.data.user2\n                        });\n                    });\n                });\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 11\n            }, _this) : oppenent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_7___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true))\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"ftmZm8s0H3G2YzEyIEEY9Qc5rX0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROztRQVlNSixvREFBVzs7O0FBWnpCSSxLQUFBQSxRQUFRO0FBOEVkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9pbmRleC50c3g/YjhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FydFBsYXllciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nYW1lL2NhcnRQbGF5ZXJcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWUvSG9tZUdhbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuaW1wb3J0IFVzZXJJbmZvUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9Qb3B1cC9Vc2VySW5mb1BvcHVwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGxlYWdlbmQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvM2FtaWk5LnBuZ1wiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250ZXJEb3duL2NvbnRlckRvd25cIjtcblxuY29uc3QgSG9tZUdhbWUgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbb3BwZW5lbnQsIGNoYW5nZU9wcF0gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBjaGFuZ2VOYW1lXSA9IHVzZVN0YXRlKHtcbiAgICBwbGF5ZXIxOiBcIlwiLFxuICAgIHBpYzE6IFwiXCIsXG4gICAgcGxheWVyMjogXCJcIixcbiAgICBwaWMyOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3Njb3JlLCBjaGFuZ2VTY29yZV0gPSB1c2VTdGF0ZTxhbnk+KHtcbiAgICBwbGF5ZXIxOiAwLFxuICAgIHBsYXllcjI6IDAsXG4gIH0pO1xuICBjb25zdCB0ZXN0OiBhbnkgPSB1c2VTZWxlY3Rvcjxhbnk+KChzdGF0ZSkgPT4gc3RhdGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNvY2tldD8uZW1pdChcIm1hdGNobWFraW5nXCIpO1xuICAgIHByb3BzLnNvY2tldD8ub24oXCJtYXRjaG1ha2luZ1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjaGFuZ2VOYW1lKChvbGR2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgIHBsYXllcjE6IGRhdGFbMF0sXG4gICAgICAgICAgcGxheWVyMjogZGF0YVsxXSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjaGFuZ2VPcHAoXCJGb3VuZFwiKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgIGBodHRwOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JUF9BRFJFU1NFfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPUlR9L3VzZXJzL2dldFBpY3R1cmVgLFxuICAgICAgICAgICAgeyB1c2VyTmFtZTE6IGRhdGFbMF0sIHVzZXJOYW1lMjogZGF0YVsxXSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIil9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5vbGR2YWx1ZXMsXG4gICAgICAgICAgICAgIHBpYzE6IHJlcy5kYXRhLnVzZXIxLFxuICAgICAgICAgICAgICBwaWMyOiByZXMuZGF0YS51c2VyMixcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgICAge29wcGVuZW50ID09IFwiV2FpdGluZ1wiID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhGbG93OiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cInNwaW5uZXJcIiBzaXplPVwieGxcIiAvPlxuICAgICAgICAgICAgPHA+V2FpdGluZyBmb3IgT3BwZW5lbnQgLi4uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogb3BwZW5lbnQgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUuaW1nSW1vaml9IHNyYz17bGVhZ2VuZC5zcmN9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydFBsYXllcn0+XG4gICAgICAgICAgICAgIDxDYXJ0UGxheWVyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlLnBsYXllcjF9XG4gICAgICAgICAgICAgICAgbmFtZT17cGxheWVycy5wbGF5ZXIxfVxuICAgICAgICAgICAgICAgIGltZz17cGxheWVycy5waWMxfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8R2FtZSBjaGFuZ2VTY29yZT17Y2hhbmdlU2NvcmV9IHNvY2tldD17cHJvcHMuc29ja2V0fS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydFBsYXllcn0+XG4gICAgICAgICAgICAgIDxDYXJ0UGxheWVyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlLnBsYXllcjJ9XG4gICAgICAgICAgICAgICAgbmFtZT17cGxheWVycy5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIGltZz17cGxheWVycy5waWMyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIHt0ZXN0LnNpemVzXy56YWtfdGVzdCAmJiA8VXNlckluZm9Qb3B1cCAvPn0gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lR2FtZTtcbiJdLCJuYW1lcyI6WyJDYXJ0UGxheWVyIiwic3R5bGUiLCJHYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImxlYWdlbmQiLCJMb2FkaW5nIiwiYXhpb3MiLCJIb21lR2FtZSIsInByb3BzIiwib3BwZW5lbnQiLCJjaGFuZ2VPcHAiLCJwbGF5ZXIxIiwicGljMSIsInBsYXllcjIiLCJwaWMyIiwicGxheWVycyIsImNoYW5nZU5hbWUiLCJzY29yZSIsImNoYW5nZVNjb3JlIiwidGVzdCIsInN0YXRlIiwic29ja2V0IiwiZW1pdCIsIm9uIiwiZGF0YSIsIm9sZHZhbHVlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSVBfQURSRVNTRSIsIk5FWFRfUFVCTElDX1BPUlQiLCJ1c2VyTmFtZTEiLCJ1c2VyTmFtZTIiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzIiwidXNlcjEiLCJ1c2VyMiIsImRpdiIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RmxvdyIsInR5cGUiLCJzaXplIiwicCIsImltZyIsImltZ0ltb2ppIiwic3JjIiwiY2FydFBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});