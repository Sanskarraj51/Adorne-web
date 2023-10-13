"use strict";
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 2517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RHFTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// form


// @mui

// ----------------------------------------------------------------------
function RHFTextField({ name , helperText , label , ...other }) {
    const { control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
        name: name,
        control: control,
        render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "exampleInputEmail1",
                        className: "form-label",
                        children: label
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "form-control",
                        id: "exampleInputEmail1",
                        "aria-describedby": "emailHelp",
                        ...field,
                        fullWidth: true,
                        value: typeof field.value === "number" && field.value === 0 ? "" : field.value,
                        ...other
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                        sx: {
                            color: "error.main"
                        },
                        children: error.message
                    })
                ]
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// form


function FormProvider({ children , onSubmit , methods  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.FormProvider, {
        ...methods,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: onSubmit,
            children: children
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 5138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ phoneRegExp),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1908);
/* harmony import */ var src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5971);
/* harmony import */ var src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2517);
/* harmony import */ var src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5715);
/* harmony import */ var src_core_hooks_useBgColor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1931);
/* harmony import */ var src_core_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8756);
/* harmony import */ var src_core_components_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(251);
/* harmony import */ var src_api_requests__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3021);
/* harmony import */ var src_configs_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1674);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_9__, src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__, src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_11__, src_api_requests__WEBPACK_IMPORTED_MODULE_15__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__, src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_9__, src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__, src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_11__, src_api_requests__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ** React Imports


// ** Next Imports




// ** Third Party Imports





// ** Hooks







const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_6__.string().email().required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Password is required").min(6, "Atleast 6 letters is required")
});
// password: yup.string().min(5).required()
const defaultValues = {
    email: "",
    password: ""
};
// .required('Mobile Number is required').matches(phoneRegExp, 'Please enter a Valid Mobile Number')
const schemaRegister = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    mobile: yup__WEBPACK_IMPORTED_MODULE_6__.string(),
    name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Name is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_6__.string().email().required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Password is required").min(6, "Atleast 6 letters is required")
});
// password: yup.string().min(5).required()
const defaultValuesRegister = {
    name: "",
    email: "",
    mobile: "",
    password: ""
};
const LoginForm = ({ type , handleClose  })=>{
    const [showOtp, setShowOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // ** Hooks
    const { setUser  } = (0,src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_11__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schema),
        defaultValues
    });
    const methodsRegister = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schemaRegister),
        defaultValuesRegister
    });
    const { control , setError , setValue , handleSubmit , formState: { errors  }  } = methods;
    const { control: registerControl , setError: setRegisterError , setValue: setRegisterValue , handleSubmit: handleSubmitRegister , formState: { errors: registerError  }  } = methodsRegister;
    const onSubmit = async (data)=>{
        let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_15__/* .handlePostAPI */ .K2)("/auth", data);
        if (response) {
            window.localStorage.setItem(src_configs_auth__WEBPACK_IMPORTED_MODULE_16__/* ["default"].storageTokenKeyName */ .Z.storageTokenKeyName, response.data.token);
            const returnUrl = router.query.returnUrl;
            setUser({
                ...response.data
            });
            window.localStorage.setItem("userData", JSON.stringify(response.data));
            const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : `/profile/${response?.data?.id}`;
            if (type === "login") {
                router.replace(redirectURL);
            } else {
                handleClose();
            }
        }
        return;
    };
    const onRegister = async (data)=>{
        if (!data?.mobile) {
            delete data["mobile"];
        }
        let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_15__/* .handlePostAPI */ .K2)("/register", data);
        if (response) {
            window.localStorage.setItem(src_configs_auth__WEBPACK_IMPORTED_MODULE_16__/* ["default"].storageTokenKeyName */ .Z.storageTokenKeyName, response.data.token);
            const returnUrl = router.query.returnUrl;
            setUser({
                ...response.data
            });
            window.localStorage.setItem("userData", JSON.stringify(response.data));
            const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : `/profile/${response?.data?.id}`;
            if (type === "login") {
                router.replace(redirectURL);
            } else {
                handleClose();
            }
        }
        return;
    };
    // eslint-disable-next-line
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "login main",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row login_flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-3 d-none d-lg-block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/images/login.svg",
                                alt: "login",
                                className: "img-fluid"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login_form",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "nav nav-pills",
                                    id: "border-radius: 8px; background: var(--primary-white, #FFF);          /* Desktop Card Elevation */ box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);",
                                    role: "tablist",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "nav-link active",
                                                id: "pills-login-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#pills-login",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "pills-login",
                                                "aria-selected": "true",
                                                children: "Login"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "nav-link",
                                                id: "pills-register-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#pills-register",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "pills-register",
                                                "aria-selected": "false",
                                                children: "Register"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tab-content",
                                    id: "pills-tabContent",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tab-pane fade show active",
                                            id: "pills-login",
                                            role: "tabpanel",
                                            "aria-labelledby": "pills-login-tab",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                methods: methods,
                                                onSubmit: handleSubmit(onSubmit),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        children: [
                                                            "Welcome Back !",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "Please Sign in now"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Email",
                                                            type: "text",
                                                            name: "email",
                                                            placeholder: "Enter Email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Password",
                                                            type: "password",
                                                            name: "password",
                                                            placeholder: "Enter Password"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        role: "button",
                                                        onClick: handleSubmit(onSubmit),
                                                        type: "submit",
                                                        className: "btn gradiant_button",
                                                        children: "Login"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tab-pane fade",
                                            id: "pills-register",
                                            role: "tabpanel",
                                            "aria-labelledby": "pills-register-tab",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                methods: methodsRegister,
                                                onSubmit: handleSubmitRegister(onRegister),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "New to our Shop? Register Now"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Full Name",
                                                            type: "text",
                                                            name: "name",
                                                            placeholder: "Enter Full Name"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Email",
                                                            type: "text",
                                                            name: "email",
                                                            placeholder: "Enter Email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Mobile Number",
                                                            type: "text",
                                                            name: "mobile",
                                                            placeholder: "Mobile Number"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            label: "Password",
                                                            type: "password",
                                                            name: "password",
                                                            placeholder: "Enter Password"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        role: "button",
                                                        onClick: handleSubmitRegister(onRegister),
                                                        type: "submit",
                                                        className: "btn gradiant_button",
                                                        children: "Register"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        role: "button",
                                                        onClick: src_api_requests__WEBPACK_IMPORTED_MODULE_15__/* .doNothing */ .cn,
                                                        className: "link",
                                                        children: "Need Help?"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;