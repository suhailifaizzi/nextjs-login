"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction HomePage() {\n    const { 0: step , 1: setStep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"username\");\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: securePhrase , 1: setSecurePhrase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchSecurePhrase = async ()=>{\n        console.log(\"in fetch securephrase\");\n        try {\n            const response = await fetch(\"/api/getSecurePhrase\");\n            console.log(\"response\", response);\n            // const data = await response.json()\n            setSecurePhrase(data);\n        } catch  {\n            console.log(\"fail to fetch\");\n        }\n    };\n    const handleClickContinue = async (username)=>{\n        setIsLoading(true);\n        await fetchSecurePhrase();\n        setStep(\"securePhrase\");\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mx-auto items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col mx-auto px-96 py-20 space-y-4 bg-cyan-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"flex justify-center text-xl font-bold underline\",\n                    children: \"Please enter your credentials\"\n                }, void 0, false, {\n                    fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                step === \"username\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: username,\n                            type: \"text\",\n                            className: \"border-2 rounded-md\",\n                            onChange: ()=>setUsername(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 text-white w-full rounded-2xl mx-auto p-1\",\n                            onClick: ()=>handleClickContinue(username),\n                            children: \"Continue\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : step === \"securePhrase\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full bg-gray-300 rounded-lg px-auto p-2\",\n                            children: securePhrase.map((frasaKeselamatan)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: frasaKeselamatan.text\n                                }, frasaKeselamatan.id, false, {\n                                    fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Is this your secure phrase?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 text-center text-white bg-red-600 rounded-md p-1\",\n                                    onClick: ()=>setStep(\"username\"),\n                                    children: \"No\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 text-center text-white bg-green-700 rounded-md p-1\",\n                                    onClick: ()=>setStep(\"password\"),\n                                    children: \"Yes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : null,\n                step === \"password\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"border-2 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 text-white w-full rounded-2xl mx-auto p-1\",\n                            onClick: ()=>setStep(\"success\"),\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/suhailifaizzi/Sandbox/nextjs-login/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUNILElBQUk7Z0JBQ0pELElBQUksS0FBSyxVQUFVLGlCQUNuQjs7c0NBQ0UsOERBQUNrQixPQUFLOzRCQUFDRSxJQUFJLEVBQUMsVUFBVTs0QkFBQ0osU0FBUyxFQUFDLHFCQUFxQjs7Ozs7Z0NBQUc7c0NBQ3pELDhEQUFDUSxRQUFNOzRCQUFDUixTQUFTLEVBQUMsdURBQXVEOzRCQUFDUyxPQUFPLEVBQUUsSUFBTXhCLE9BQU8sQ0FBQyxTQUFTLENBQUM7c0NBQUUsT0FBSzs7Ozs7Z0NBQVM7O2dDQUMxSCxHQUNILElBQUk7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNQO0NBQ0Y7QUFDRCxpRUFBZUYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1sb2dpbi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgndXNlcm5hbWUnKVxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VjdXJlUGhyYXNlLCBzZXRTZWN1cmVQaHJhc2VdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBmZXRjaFNlY3VyZVBocmFzZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW4gZmV0Y2ggc2VjdXJlcGhyYXNlJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRTZWN1cmVQaHJhc2UnKVxuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRTZWN1cmVQaHJhc2UoZGF0YSlcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmYWlsIHRvIGZldGNoJylcbiAgICB9XG5cbiAgfVxuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2tDb250aW51ZSA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIGF3YWl0IGZldGNoU2VjdXJlUGhyYXNlKClcbiAgICBzZXRTdGVwKCdzZWN1cmVQaHJhc2UnKVxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXgtYXV0byBweC05NiBweS0yMCBzcGFjZS15LTQgYmctY3lhbi0xMDBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC14bCBmb250LWJvbGQgdW5kZXJsaW5lXCI+UGxlYXNlIGVudGVyIHlvdXIgY3JlZGVudGlhbHM8L2gxPlxuICAgICAgICB7IHN0ZXAgPT09ICd1c2VybmFtZScgPyBcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLW1kXCIgb25DaGFuZ2U9eygpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgdy1mdWxsIHJvdW5kZWQtMnhsIG14LWF1dG8gcC0xXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tDb250aW51ZSh1c2VybmFtZSl9PkNvbnRpbnVlPC9idXR0b24+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHctZnVsbCByb3VuZGVkLTJ4bCBteC1hdXRvIHAtMVwiIG9uQ2xpY2s9eygpID0+IG11dGF0ZSgpfT5Db250aW51ZTwvYnV0dG9uPiAqL31cbiAgICAgICAgICA8Lz5cbiAgICAgICAgOiBzdGVwID09PSAnc2VjdXJlUGhyYXNlJyA/IFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHB4LWF1dG8gcC0yXCI+XG4gICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNlY3VyZVBocmFzZTMxMjwvcD4gKi99XG4gICAgICAgICAgICAgIHtzZWN1cmVQaHJhc2UubWFwKChmcmFzYUtlc2VsYW1hdGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmcmFzYUtlc2VsYW1hdGFuLmlkfT5cbiAgICAgICAgICAgICAgICAgICAge2ZyYXNhS2VzZWxhbWF0YW4udGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPklzIHRoaXMgeW91ciBzZWN1cmUgcGhyYXNlPzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1yZWQtNjAwIHJvdW5kZWQtbWQgcC0xXCIgb25DbGljaz17KCkgPT4gc2V0U3RlcCgndXNlcm5hbWUnKX0+Tm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWdyZWVuLTcwMCByb3VuZGVkLW1kIHAtMVwiIG9uQ2xpY2s9eygpID0+IHNldFN0ZXAoJ3Bhc3N3b3JkJyl9PlllczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDogbnVsbCB9XG4gICAgICAgIHsgc3RlcCA9PT0gJ3Bhc3N3b3JkJyA/IFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZC1tZFwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgdy1mdWxsIHJvdW5kZWQtMnhsIG14LWF1dG8gcC0xXCIgb25DbGljaz17KCkgPT4gc2V0U3RlcCgnc3VjY2VzcycpfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJIb21lUGFnZSIsInN0ZXAiLCJzZXRTdGVwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNlY3VyZVBocmFzZSIsInNldFNlY3VyZVBocmFzZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoU2VjdXJlUGhyYXNlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwiaGFuZGxlQ2xpY2tDb250aW51ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsInR5cGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImZyYXNhS2VzZWxhbWF0YW4iLCJ0ZXh0IiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();