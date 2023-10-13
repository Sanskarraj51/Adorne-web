"use strict";
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 3021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K2": () => (/* binding */ handlePostAPI),
/* harmony export */   "Xr": () => (/* binding */ handleGetAPI),
/* harmony export */   "cn": () => (/* binding */ doNothing)
/* harmony export */ });
/* unused harmony exports mediaUrl, userData, checkLoginError, debounce, localStorageToken, debouncing, fetchProjectListData, previewFile, handlePostAPIWithoutHeader, handlePutAPIWithoutHeader, handlePutAPI, handleDeleteAPI, handleGetAPIHeaderLess, uploadImage, uploadGLobalImage, getStates, downloadFile, handleKeyPress */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const mediaUrl = "http://35.154.22.90:3000/";
const userData = ()=>{
    return JSON.parse(window.localStorage.getItem("userData"));
};
const checkLoginError = (err)=>{
    var _err_response, _err_response_data;
    if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) === "jwt expired") {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error("Your token has expired, Kindly login again!");
        localStorage.clear();
        window.location.reload();
        return true;
    } else {
        var _err_response1, _err_response_data1, _err_response2, _err_response_data2;
        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(typeof (err === null || err === void 0 ? void 0 : (_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data1 = _err_response1.data) === null || _err_response_data1 === void 0 ? void 0 : _err_response_data1.message) === "string" ? err === null || err === void 0 ? void 0 : (_err_response2 = err.response) === null || _err_response2 === void 0 ? void 0 : (_err_response_data2 = _err_response2.data) === null || _err_response_data2 === void 0 ? void 0 : _err_response_data2.message : "Something went wrong on our side");
    }
};
function doNothing(e) {
    e.preventDefault();
}
const debounce = (func)=>{
    let timer;
    return function(...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = null;
            func.apply(context, args);
        }, 1000);
    };
};
const localStorageToken = ()=>{
    let storedToken;
    if (false) {}
    if (storedToken) {
        return storedToken;
    } else {
        return null;
    }
};
function debouncing(func, wait, immediate) {
    var timeout;
    return (...args)=>{
        var context = this;
        var later = ()=>{
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const fetchProjectListData = async ()=>{
    try {
        // ** token from local storage
        const response = await axios.get(`${"http://13.51.40.75:3001/api/v1"}/projects`, {
            headers: {
                Authorization: `Bearer ${localStorageToken()}`
            }
        });
        return response.data;
    } catch (err) {
        checkLoginError(err);
    }
};
const previewFile = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
        let fileView = reader.result;
        return fileView;
    };
};
async function handlePostAPI(url, data, msg) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://13.51.40.75:3001/api/v1" + url, data, {
            headers: {
                Authorization: `Bearer ${localStorageToken()}`
            }
        });
        if (response.data) {
            if (msg !== null) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handlePostAPIWithoutHeader(url, data, msg) {
    try {
        const response = await axios.post("http://13.51.40.75:3001/api/v1" + url, data);
        if (response.data) {
            if (msg !== null) {
                toast.success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handlePutAPIWithoutHeader(url, data, msg) {
    try {
        const response = await axios.put("http://13.51.40.75:3001/api/v1" + url, data);
        if (response.data) {
            if (msg !== null) {
                toast.success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handlePutAPI(url, data, msg) {
    try {
        const response = await axios.put("http://13.51.40.75:3001/api/v1" + url, data, {
            headers: {
                Authorization: `Bearer ${localStorageToken()}`
            }
        });
        if (response.data) {
            if (msg !== null) {
                toast.success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handleGetAPI(url, msg) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://13.51.40.75:3001/api/v1" + url, {
            headers: {
                Authorization: `Bearer ${localStorageToken()}`
            }
        });
        if (response.data) {
            if (msg) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handleDeleteAPI(url, msg) {
    try {
        const response = await axios.delete("http://13.51.40.75:3001/api/v1" + url, {
            headers: {
                Authorization: `Bearer ${localStorageToken()}`
            }
        });
        if (response.data) {
            if (msg) {
                toast.success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function handleGetAPIHeaderLess(url, msg) {
    try {
        const response = await axios.get("http://13.51.40.75:3001/api/v1" + url);
        if (response.data) {
            if (msg) {
                toast.success(msg || response.data.message);
            }
            return response.data;
        }
    } catch (e) {
        console.log(e);
        checkLoginError(e);
    }
}
async function uploadImage(data) {
    if (Object.keys(data).length > 0) {
        let url = "/Master/gallery/add";
        let bodyData = new FormData();
        bodyData.append("imageUrl", data.image);
        let value = await handlePostAPI(url, bodyData, null);
        return value;
    } else {
        return "";
    }
}
async function uploadGLobalImage(data) {
    let url = "/Master/gallery/add";
    let bodyData = new FormData();
    bodyData.append("imageUrl", data);
    let value = await handlePostAPI(url, bodyData, null);
    return value === null || value === void 0 ? void 0 : value.baseUrl;
}
const getStates = async (country)=>{
    const response = await handleGetAPI(`/list/states/${country}`);
    if (response) {
        return response.list;
    }
};
const downloadFile = async (url)=>{
    const response = await fetch(url);
    const blob = await response.blob();
    const filename = getFilenameFromURL(url);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const getFilenameFromURL = (url)=>{
    const parts = url.split("/");
    return parts[parts.length - 1];
};
const handleKeyPress = (event)=>{
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const isValidInput = /^[-]?[0-9]+([.,][0-9]{0,2})?$/.test(keyValue) || keyCode === 46 || keyCode === 8;
    if (!isValidInput) {
        event.preventDefault();
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    meEndpoint: "/auth/me",
    loginEndpoint: "/auth",
    registerEndpoint: "/jwt/register",
    storageTokenKeyName: "accessToken",
    onTokenExpiration: "refreshToken",
    category: "/public/category",
    brand: "/public/brand",
    blog: "/blogs",
    home: "/home",
    addBlogs: "/blogs/add-posts",
    banner: "/banners/get-banners",
    addBanner: "/banners/add-banner",
    removeBanner: "/banners/removebanner",
    colors: "/colors",
    getColors: "/colors/get-colors",
    updateColors: "/colors/update-color",
    removeColors: "/colors/remove?color_id=",
    sizes: "/sizes",
    addSize: "/sizes/add-sizes",
    cart: "/cart/get-cart?user_id=",
    addCart: "/cart/add",
    product: "/public/product",
    productDetail: "/public/product/product-detail?product_id=",
    productSearch: "/public/product/search-products?query=",
    wishList: "/wishlist/get-wishlist?user_id=",
    getAddress: "/address?user_id=",
    myOrders: "/orders/get-order",
    addAddress: "/address/add",
    updateAddress: "/address/update",
    remvoveAddress: "/address/remove?address_id="
});


/***/ })

};
;