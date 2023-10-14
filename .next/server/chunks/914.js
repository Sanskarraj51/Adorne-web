"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 9878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ** Icon Imports


const IconifyIcon = ({ icon , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon,
        fontSize: "1.5rem",
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconifyIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_core_components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(251);
/* harmony import */ var src_views_pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5138);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_views_pages_login__WEBPACK_IMPORTED_MODULE_2__]);
src_views_pages_login__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LoginPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_breadcrumb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                path: "Login"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_views_pages_login__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: "login"
            })
        ]
    });
};
LoginPage.guestGuard = true;
LoginPage.authGuard = false;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AddressCard = ({ item , openEdit , openDelete  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "address_title",
                children: item?.full_name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "address_detail",
                children: [
                    item?.address1,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    item?.address2,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    item?.city,
                    ", ",
                    item?.state,
                    " ",
                    item?.pin,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    item?.country,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "Phone number:",
                    item?.phone
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "action-details",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        role: "button",
                        onClick: ()=>openEdit(item),
                        className: "btn-edited",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#exampleModal",
                        children: "Edit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        role: "button",
                        onClick: ()=>openDelete(item),
                        className: "btn-danger",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#staticBackdrop1",
                        children: "Delete"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressCard);


/***/ }),

/***/ 5914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_confirmModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7406);
/* harmony import */ var src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5971);
/* harmony import */ var src_pages_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3504);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1908);
/* harmony import */ var src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2517);
/* harmony import */ var src_api_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3021);
/* harmony import */ var _AddressCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(536);
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4810);
/* harmony import */ var src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8648);
/* harmony import */ var src_core_components_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4644);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_configs_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1674);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_core_components_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9878);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_3__, src_pages_login__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__, src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__, src_api_requests__WEBPACK_IMPORTED_MODULE_9__, src_store__WEBPACK_IMPORTED_MODULE_11__, src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__, src_core_components_icon__WEBPACK_IMPORTED_MODULE_18__, react_hot_toast__WEBPACK_IMPORTED_MODULE_19__]);
([src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_3__, src_pages_login__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__, src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__, src_api_requests__WEBPACK_IMPORTED_MODULE_9__, src_store__WEBPACK_IMPORTED_MODULE_11__, src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__, src_core_components_icon__WEBPACK_IMPORTED_MODULE_18__, react_hot_toast__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// ** Third Party Imports















const defaultValues = {
    isDefault: 1,
    user_id: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    phone: "",
    email: "",
    full_name: "",
    address_type: "home"
};
const schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    phone: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Phone Number is required").matches(src_pages_login__WEBPACK_IMPORTED_MODULE_4__.phoneRegExp, "Please enter a Valid Phone Number"),
    full_name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Name is required"),
    address1: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Address 1 is required"),
    address2: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Address 2 is required"),
    city: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("city is required"),
    state: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("state is required"),
    country: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("country is required"),
    pin: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("pin is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().email().required("email is required")
});
const Addresses = ({ place ="profile" , selected , setSelected , closeModal , popup  })=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [btnLoading, setBtnLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dialogStatus, setDialogStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Add");
    const [deletId, setDeleteId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [deletShow, setDeleteShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const closeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,src_store__WEBPACK_IMPORTED_MODULE_11__/* .useDispatch */ .I0)();
    const store = (0,src_store__WEBPACK_IMPORTED_MODULE_11__/* .useSelector */ .v9)((state)=>state.user);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { id  } = router.query;
    async function getAddressData() {
        setLoading(true);
        await dispatch((0,src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__/* .fetchAddress */ .HR)(id));
        setLoading(false);
    }
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        mode: "onChange",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__.yupResolver)(schema),
        defaultValues
    });
    const { control , setError , setValue , watch , handleSubmit , reset , formState: { errors  }  } = methods;
    const onSubmit = async (data)=>{
        setBtnLoading(true);
        let url = src_configs_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"].addAddress */ .Z.addAddress;
        if (dialogStatus === "Edit") {
            url = src_configs_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"].updateAddress */ .Z.updateAddress;
        }
        let res = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_9__/* .handlePostAPI */ .K2)(url, data, `Address ${dialogStatus === "Edit" ? "Updated" : "Added"} Successfully`);
        if (res) {
            closeRef.current.click();
            dispatch((0,src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__/* .fetchAddress */ .HR)(id));
        }
        setBtnLoading(false);
    };
    async function useAddress() {
        if (!selected) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_19__["default"].error("Please Select a Address to continue");
            // eslint-disable-next-line
            return;
        }
        let data = store?.address?.find((item)=>item.id === selected);
        setBtnLoading(true);
        let url = src_configs_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"].updateAddress */ .Z.updateAddress;
        let res = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_9__/* .handlePostAPI */ .K2)(url, {
            user_id: data?.user_id || "",
            address_id: data?.id || "",
            isDefault: 1 || 0
        }, `Address Updated Successfully`);
        if (res) {
            dispatch((0,src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__/* .fetchAddress */ .HR)(id));
            closeModal ? closeModal() : null;
        }
        setBtnLoading(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id) {
            getAddressData();
        }
    }, [
        dispatch,
        id
    ]);
    function openAdd() {
        reset(defaultValues);
        setValue("user_id", id);
        setDialogStatus("Add");
    }
    function openDelete(data) {
        setDeleteId(data.id);
        setDeleteShow(true);
    }
    function handleClose() {
        setDeleteId("");
        setDeleteShow(false);
    }
    function openEdit(data) {
        reset({
            user_id: data?.user_id || "",
            address_id: data?.id || "",
            isDefault: 1,
            email: data?.email || "",
            address1: data?.address1 || "",
            address2: data?.address2 || "",
            city: data?.city || "",
            state: data?.state || "",
            country: data?.country || "",
            pin: data?.pin || "",
            phone: data?.phone || "",
            full_name: data?.full_name || "",
            address_type: data?.address_type || "home"
        });
        setDialogStatus("Edit");
    }
    async function deleteAddress() {
        setBtnLoading(true);
        let url = `${src_configs_auth__WEBPACK_IMPORTED_MODULE_15__/* ["default"].remvoveAddress */ .Z.remvoveAddress}${deletId}`;
        const response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_9__/* .handleGetAPI */ .Xr)(url);
        if (response) {
            dispatch((0,src_store_apps_user__WEBPACK_IMPORTED_MODULE_12__/* .fetchAddress */ .HR)(id));
            setDeleteShow(false);
        }
        setBtnLoading(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (store?.address?.length > 0 && place === "billing") {
            let addr = {};
            for (let i of store?.address){
                if (i?.isDefault === 1) {
                    addr = i;
                }
            }
            setSelected(addr?.id);
        }
    }, [
        store?.address
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_spinner__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            place === "billing" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: popup ? "col-sm-12" : "col-lg-8 col-md-8 col-sm-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "saved-address",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Saved Addresses"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                role: "button",
                                onClick: useAddress,
                                className: "btn gradiant_button using-address",
                                children: [
                                    btnLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_16__.CircularProgress, {
                                        size: 30,
                                        color: "inherit"
                                    }) : "Use This Address",
                                    " "
                                ]
                            })
                        ]
                    }),
                    store?.address?.length > 0 ? store?.address?.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setSelected(item.id),
                            className: selected === item?.id ? "save-address-checkout" : "not-selected-checkout",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "saved-address-manual",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "label-tags d-flex ",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-check p-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "form-check-input",
                                                            checked: selected === item?.id,
                                                            disabled: true,
                                                            type: "radio",
                                                            name: "flexRadioDefault",
                                                            id: "flexRadioDefault1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            onClick: ()=>setSelected(item.id),
                                                            className: "form-check-label",
                                                            style: {
                                                                textTransform: "capitalize"
                                                            },
                                                            for: "flexRadioDefault1",
                                                            children: item?.address_type
                                                        })
                                                    ]
                                                }),
                                                item?.isDefault === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_16__.Chip, {
                                                    size: "small",
                                                    sx: {
                                                        ml: 2
                                                    },
                                                    color: "primary",
                                                    label: "Default"
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "action-details",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    role: "button",
                                                    onClick: ()=>openEdit(item),
                                                    className: "btn-edited",
                                                    "data-bs-toggle": "modal",
                                                    "data-bs-target": "#exampleModal",
                                                    children: "Edit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    role: "button",
                                                    onClick: ()=>openDelete(item),
                                                    className: "btn-danger",
                                                    "data-bs-toggle": "modal",
                                                    "data-bs-target": "#staticBackdrop1",
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "saved-manual-address-list",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            item?.address1,
                                            " ",
                                            item?.city,
                                            ", ",
                                            item?.state,
                                            " ",
                                            item?.state,
                                            ", ",
                                            item?.country,
                                            " M. ",
                                            item?.phone
                                        ]
                                    })
                                })
                            ]
                        }, i)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "No Address found"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "add-new-address",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "new-tap-address",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                role: "button",
                                onClick: openAdd,
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#exampleModal",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "material-symbols-rounded",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_icon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                icon: "mdi:plus"
                                            }),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Add New Address"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tab-pane fade",
                id: "v-pills-messages",
                role: "tabpanel",
                "aria-labelledby": "v-pills-messages-tab",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "tab_title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Your Addresses"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                role: "button",
                                onClick: openAdd,
                                className: "btn gradiant_button",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#exampleModal",
                                children: "Add New Address"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "address_list",
                        children: store?.address?.length > 0 ? store?.address?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddressCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                openDelete: openDelete,
                                openEdit: openEdit,
                                item: item
                            }, i)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "No Address found"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade address-modal",
                id: "exampleModal",
                tabindex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "modal-title fs-5",
                                        id: "exampleModalLabel",
                                        children: [
                                            dialogStatus,
                                            " Address"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        ref: closeRef,
                                        type: "button",
                                        className: "btn-close",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_core_components_RHF_formProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                methods: methods,
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Full Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "full_name"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Address Line 1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "address1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Country"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "country"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "City"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "city"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "email",
                                                                    type: "email"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Save Address As (Optional)"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "label-tags",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-check ps-0",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    className: "form-check-input",
                                                                                    type: "radio",
                                                                                    name: "exampleRadios",
                                                                                    id: "exampleRadios1",
                                                                                    value: "option1",
                                                                                    onChange: (e)=>{
                                                                                        setValue("address_type", "home");
                                                                                    },
                                                                                    checked: watch("address_type") === "home"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: "form-check-label",
                                                                                    htmlFor: "exampleRadios1",
                                                                                    children: "Home"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-check",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    className: "form-check-input",
                                                                                    type: "radio",
                                                                                    name: "exampleRadios",
                                                                                    id: "exampleRadios2",
                                                                                    value: "option2",
                                                                                    onChange: (e)=>{
                                                                                        setValue("address_type", "work");
                                                                                    },
                                                                                    checked: watch("address_type") === "work"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: "form-check-label",
                                                                                    htmlFor: "exampleRadios2",
                                                                                    children: "Work"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "form-check",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    className: "form-check-input",
                                                                                    type: "radio",
                                                                                    name: "exampleRadios",
                                                                                    id: "exampleRadios3",
                                                                                    value: "option3",
                                                                                    onChange: (e)=>{
                                                                                        setValue("address_type", "other");
                                                                                    },
                                                                                    checked: watch("address_type") === "other"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: "form-check-label",
                                                                                    htmlFor: "exampleRadios3",
                                                                                    children: "Other"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Address Line 2 (Optional)"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "address2"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "State"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "state"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Pin/ Zip Code"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "pin"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "firstname mb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "name",
                                                                    children: "Phone"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_RHF_RHFTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    name: "phone"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "modal-footer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "checkout",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    role: "button",
                                                    type: "submit",
                                                    onClick: handleSubmit(onSubmit),
                                                    className: "btn gradiant_button",
                                                    children: [
                                                        btnLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_16__.CircularProgress, {
                                                            size: 30,
                                                            color: "inherit"
                                                        }) : "Save Address",
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-bs-dismiss": "modal",
                                                    role: "button",
                                                    className: "btn primary-button",
                                                    children: "Cancel"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_confirmModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                handleClose: handleClose,
                open: deletShow,
                deleteFunction: deleteAddress,
                loading: btnLoading
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addresses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;