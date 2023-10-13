"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 7985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchData, deleteInvoice, appInvoiceSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// ** Axios Imports

// ** Fetch Invoices
const fetchData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appInvoice/fetchData", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/apps/invoice/invoices", {
        params
    });
    return response.data;
});
const deleteInvoice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appInvoice/deleteData", async (id, { getState , dispatch  })=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/apps/invoice/delete", {
        data: id
    });
    await dispatch(fetchData(getState().invoice.params));
    return response.data;
});
const appInvoiceSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appInvoice",
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: []
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.data = action.payload.invoices;
            state.params = action.payload.params;
            state.allData = action.payload.allData;
            state.total = action.payload.total;
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appInvoiceSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DA": () => (/* binding */ fetchProductData),
/* harmony export */   "DQ": () => (/* binding */ fetchColorData),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "YJ": () => (/* binding */ fetchCategoryData),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_3": () => (/* binding */ fetchBrandData),
/* harmony export */   "mB": () => (/* binding */ fetchCartData),
/* harmony export */   "y": () => (/* binding */ fetchProductDetailData),
/* harmony export */   "zq": () => (/* binding */ fetchWishListData)
/* harmony export */ });
/* unused harmony exports fetchBlogData, fetchBannerData, fetchSizeData, appProductSlice, setProductData, setCategoryDetailDataData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_api_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3021);
/* harmony import */ var src_configs_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1674);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_api_requests__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_3__]);
([src_api_requests__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// ** Fetch ProductData
const fetchProductData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchProductData", async (params)=>{
    // const { name, status, supplier, category } = params
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].product */ .Z.product);
    return response;
});
const fetchProductDetailData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchProductDetailData", async (id)=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].productDetail */ .Z.productDetail + id);
    return response === null || response === void 0 ? void 0 : response.respData;
});
// ** Fetch CategoryData
const fetchCategoryData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchCategoryData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].category */ .Z.category);
    return response;
});
// ** Fetch Brand Data
const fetchBrandData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchBrandData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].brand */ .Z.brand);
    return response;
});
// ** Fetch Blog Data
const fetchBlogData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchBlogData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].blog */ .Z.blog);
    return response;
});
// ** Fetch Banner Data
const fetchBannerData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchBannerData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].banner */ .Z.banner);
    return response;
});
// ** Fetch Color Data
const fetchColorData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchColorData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getColors */ .Z.getColors);
    return response;
});
// ** Fetch Size Data
const fetchSizeData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchSizeData", async ()=>{
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].sizes */ .Z.sizes);
    return response;
});
const fetchCartData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchCartData", async ()=>{
    let userData = JSON.parse(window.localStorage.getItem("userData"));
    // eslint-disable-next-line
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cart */ .Z.cart + (userData === null || userData === void 0 ? void 0 : userData.id));
    return response;
});
const fetchWishListData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/fetchWishListData", async ()=>{
    let userData = JSON.parse(window.localStorage.getItem("userData"));
    let response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].wishList */ .Z.wishList + (userData === null || userData === void 0 ? void 0 : userData.id));
    return response;
});
const addToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appProduct/addToCart", async (params, { dispatch  })=>{
    let userData = JSON.parse(window.localStorage.getItem("userData"));
    let response;
    if (userData) {
        let body = params;
        body.user_id = userData === null || userData === void 0 ? void 0 : userData.id;
        response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_1__/* .handlePostAPI */ .K2)(src_configs_auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].addCart */ .Z.addCart, body);
        if (response) {
            dispatch(fetchCartData());
        }
    } else {
        dispatch((0,_user__WEBPACK_IMPORTED_MODULE_3__/* .setLoginForm */ .A6)(true));
    }
    return response;
});
// export const fetchProductDetails = createAsyncThunk('appProduct/fetchProductDetails', async ({ id }) => {
//   try {
//     const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/supplier/product/${id}/edit`, {
//       headers: { Authorization: `JWT ${localStorageToken()}` }
//     })
//     return res.data
//   } catch (err) {
//     checkLoginError(err)
//     let arr = []
//     return arr
//   }
// })
const appProductSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appProduct",
    initialState: {
        data: [],
        productDetail: {},
        categoryData: [],
        categoryDetailData: {},
        brandData: [],
        colors: [],
        sizes: [],
        blogs: [],
        banners: [],
        cartData: [],
        wishListData: []
    },
    reducers: {
        setProductData: (state, action)=>{
            state.data = action.payload;
        },
        setCategoryDetailDataData: (state, action)=>{
            state.categoryDetailData = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProductData.fulfilled, (state, action)=>{
            var _action_payload;
            state.data = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.respData;
        });
        builder.addCase(fetchProductDetailData.fulfilled, (state, action)=>{
            state.productDetail = action.payload;
        });
        builder.addCase(fetchCategoryData.fulfilled, (state, action)=>{
            var _action_payload;
            state.categoryData = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchBrandData.fulfilled, (state, action)=>{
            var _action_payload;
            state.brandData = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchBannerData.fulfilled, (state, action)=>{
            var _action_payload;
            state.banners = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchBlogData.fulfilled, (state, action)=>{
            var _action_payload;
            state.blogs = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchColorData.fulfilled, (state, action)=>{
            var _action_payload;
            state.colors = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchSizeData.fulfilled, (state, action)=>{
            var _action_payload;
            state.sizes = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchCartData.fulfilled, (state, action)=>{
            var _action_payload;
            state.cartData = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
        builder.addCase(fetchWishListData.fulfilled, (state, action)=>{
            var _action_payload;
            state.wishListData = (_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.data;
        });
    }
});
const { setProductData , setCategoryDetailDataData  } = appProductSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appProductSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A6": () => (/* binding */ setLoginForm),
/* harmony export */   "AU": () => (/* binding */ fetchOrders),
/* harmony export */   "HR": () => (/* binding */ fetchAddress),
/* harmony export */   "X4": () => (/* binding */ fetchHome),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchData, appUsersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var src_api_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3021);
/* harmony import */ var src_configs_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1674);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, src_api_requests__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, src_api_requests__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// ** Axios Imports



// ** Fetch Users
const fetchData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/fetchData", async (params)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/apps/users/list", {
        params
    });
    return response.data;
});
// ** Fetch Address
const fetchAddress = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/fetchAddress", async (id)=>{
    const response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_2__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAddress */ .Z.getAddress + id);
    return response.data;
});
// ** Fetch Orders
const fetchOrders = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/fetchOrders", async (id)=>{
    const response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_2__/* .handlePostAPI */ .K2)(src_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"].myOrders */ .Z.myOrders, {
        user_id: id
    }, null);
    return response;
});
// ** Fetch Home
const fetchHome = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("appUsers/fetchHome", async (id)=>{
    const response = await (0,src_api_requests__WEBPACK_IMPORTED_MODULE_2__/* .handleGetAPI */ .Xr)(src_configs_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"].home */ .Z.home);
    return response.data;
});
const appUsersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appUsers",
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: [],
        address: [],
        orders: [],
        home: {},
        mediaUrl: "",
        loginForm: false
    },
    reducers: {
        setLoginForm: (state, action)=>{
            state.loginForm = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.data = action.payload.users;
        });
        builder.addCase(fetchAddress.fulfilled, (state, action)=>{
            state.address = action.payload;
        });
        builder.addCase(fetchHome.fulfilled, (state, action)=>{
            state.home = action.payload;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action)=>{
            state.orders = action.payload.data;
            state.mediaUrl = action.payload.mediaUrl;
        });
    }
});
const { setLoginForm  } = appUsersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appUsersSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I0": () => (/* binding */ useDispatch),
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "v9": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_store_apps_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8648);
/* harmony import */ var src_store_apps_others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7985);
/* harmony import */ var src_store_apps_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_store_apps_user__WEBPACK_IMPORTED_MODULE_1__, src_store_apps_others__WEBPACK_IMPORTED_MODULE_2__, src_store_apps_product__WEBPACK_IMPORTED_MODULE_3__]);
([src_store_apps_user__WEBPACK_IMPORTED_MODULE_1__, src_store_apps_others__WEBPACK_IMPORTED_MODULE_2__, src_store_apps_product__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ** Toolkit imports





const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        user: src_store_apps_user__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        product: src_store_apps_product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        others: src_store_apps_others__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector;
const useDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;