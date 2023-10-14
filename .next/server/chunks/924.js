"use strict";
exports.id = 924;
exports.ids = [924];
exports.modules = {

/***/ 1931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2563);
// ** MUI Imports

// ** Util Import

const UseBgColor = ()=>{
    // ** Hooks
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    return {
        primaryFilled: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main
        },
        primaryLight: {
            color: theme.palette.primary.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.primary.main, 0.12)
        },
        secondaryFilled: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main
        },
        secondaryLight: {
            color: theme.palette.secondary.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.secondary.main, 0.12)
        },
        successFilled: {
            color: theme.palette.success.contrastText,
            backgroundColor: theme.palette.success.main
        },
        successLight: {
            color: theme.palette.success.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.success.main, 0.12)
        },
        errorFilled: {
            color: theme.palette.error.contrastText,
            backgroundColor: theme.palette.error.main
        },
        errorLight: {
            color: theme.palette.error.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.error.main, 0.12)
        },
        warningFilled: {
            color: theme.palette.warning.contrastText,
            backgroundColor: theme.palette.warning.main
        },
        warningLight: {
            color: theme.palette.warning.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.warning.main, 0.12)
        },
        infoFilled: {
            color: theme.palette.info.contrastText,
            backgroundColor: theme.palette.info.main
        },
        infoLight: {
            color: theme.palette.info.main,
            backgroundColor: (0,src_core_utils_hex_to_rgba__WEBPACK_IMPORTED_MODULE_1__/* .hexToRGBA */ .E)(theme.palette.info.main, 0.12)
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseBgColor);


/***/ }),

/***/ 2563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ hexToRGBA)
/* harmony export */ });
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


/***/ }),

/***/ 8924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ModalActions */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1931);
/* harmony import */ var src_core_components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9878);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components_icon__WEBPACK_IMPORTED_MODULE_5__]);
src_core_components_icon__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide, {
        direction: "down",
        ref: ref,
        ...props
    });
});
const ModalActions = ({ selected , children  })=>{
    return /*#__PURE__*/ _jsxs(Box, {
        className: "modal__titlediv",
        sx: {
            bgcolor: (theme)=>alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        },
        children: [
            /*#__PURE__*/ _jsx(Typography, {
                color: "inherit",
                variant: "subtitle1",
                component: "div",
                children: selected ? selected : ""
            }),
            children
        ]
    });
};
function CustomModal(props) {
    // ** props
    const { closeDialog , children , open , title , size , scroll , id , fullScreen , actionComponent  } = props;
    // ** custom background manage component
    const bg = (0,src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        fullWidth: true,
        fullScreen: fullScreen || false,
        open: open,
        maxWidth: size || "sm",
        scroll: scroll || "body",
        onClose: closeDialog,
        onBackdropClick: closeDialog,
        TransitionComponent: Transition,
        id: id || "custom_modal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: "modal__titlediv",
                sx: {
                    background: "#2E2B20"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h6",
                        color: "white",
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        size: "small",
                        onClick: closeDialog,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            icon: "mdi:close",
                            color: "white"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                sx: {
                    px: {
                        xs: 7,
                        sm: 10.5
                    },
                    py: {
                        xs: 3,
                        sm: 4
                    },
                    position: "relative"
                },
                children: children
            }),
            actionComponent
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;