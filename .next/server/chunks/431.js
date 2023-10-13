"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
// ** MUI Components



// Styled Components
const MaskImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("img")(()=>({
        bottom: 0,
        zIndex: -1,
        width: "100%",
        position: "absolute"
    }));
const ShapeImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("img")(({ theme  })=>({
        left: "15%",
        bottom: "12%",
        position: "absolute",
        [theme.breakpoints.down("lg")]: {
            bottom: "7%"
        }
    }));
const FooterIllustrations = (props)=>{
    // ** Props
    const { image  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // ** Vars
    const hidden = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down("md"));
    const src = image || "/images/pages/misc-coming-soon-object.png";
    if (!hidden) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShapeImg, {
                    alt: "shape",
                    src: src
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                    alt: "mask",
                    src: `/images/pages/misc-mask-${theme.palette.mode}.png`
                })
            ]
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterIllustrations);


/***/ })

};
;