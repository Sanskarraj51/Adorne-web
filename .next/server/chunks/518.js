"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 4518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var src_api_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3021);
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4810);
/* harmony import */ var src_store_apps_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(518);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, src_api_requests__WEBPACK_IMPORTED_MODULE_5__, src_store__WEBPACK_IMPORTED_MODULE_6__, src_store_apps_product__WEBPACK_IMPORTED_MODULE_7__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, src_api_requests__WEBPACK_IMPORTED_MODULE_5__, src_store__WEBPACK_IMPORTED_MODULE_6__, src_store_apps_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PopularProductCard = ({ item , mediaUrl  })=>{
    var _item_ProductImageEntities, _item_ProductImageEntities_, _item_CategoryEntity, _item_color;
    const dispatch = (0,src_store__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    async function validateCart() {
        var _item_ProductvariantEntities;
        if ((item === null || item === void 0 ? void 0 : (_item_ProductvariantEntities = item.ProductvariantEntities) === null || _item_ProductvariantEntities === void 0 ? void 0 : _item_ProductvariantEntities.length) && !(variant === null || variant === void 0 ? void 0 : variant.sku)) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("This Product is Currently Out of Stock");
            // eslint-disable-next-line
            return;
        }
        let body = {
            product_id: item === null || item === void 0 ? void 0 : item.id,
            sku: (variant === null || variant === void 0 ? void 0 : variant.sku) || (item === null || item === void 0 ? void 0 : item.sku_id),
            quantity: 1
        };
        dispatch((0,src_store_apps_product__WEBPACK_IMPORTED_MODULE_7__/* .addToCart */ .Xq)(body)).then((res)=>{
            router.push("/cart");
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        var _item_ProductvariantEntities;
        if ((item === null || item === void 0 ? void 0 : (_item_ProductvariantEntities = item.ProductvariantEntities) === null || _item_ProductvariantEntities === void 0 ? void 0 : _item_ProductvariantEntities.length) > 0) {
            let initialVar = item === null || item === void 0 ? void 0 : item.ProductvariantEntities[0];
            setVariant(initialVar);
        }
    }, [
        item === null || item === void 0 ? void 0 : item.ProductvariantEntities
    ]);
    // eslint-disable-next-line
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "main-items",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "item_backgrounds",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/product-detail/${item === null || item === void 0 ? void 0 : item.id}`,
                        className: "item_products",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: (item === null || item === void 0 ? void 0 : (_item_ProductImageEntities = item.ProductImageEntities) === null || _item_ProductImageEntities === void 0 ? void 0 : _item_ProductImageEntities.length) ? `${mediaUrl}${(_item_ProductImageEntities_ = item === null || item === void 0 ? void 0 : item.ProductImageEntities[0]) === null || _item_ProductImageEntities_ === void 0 ? void 0 : _item_ProductImageEntities_.key}` : `/images/img-1.png`,
                            className: "img-fluid",
                            alt: "Item Image"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hover_cart_footer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                role: "button",
                                onClick: validateCart,
                                className: "btn gradiant_button",
                                children: "Add to cart"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/product-detail/${item === null || item === void 0 ? void 0 : item.id}`,
                                className: "btn notify_btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/view.svg",
                                    alt: "",
                                    className: "img-fluid"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "item_details",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "subtitle",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "subheader",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: (item === null || item === void 0 ? void 0 : (_item_CategoryEntity = item.CategoryEntity) === null || _item_CategoryEntity === void 0 ? void 0 : _item_CategoryEntity.name) || ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item_ratings",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "review_star",
                                    children: [
                                        ...Array(5)
                                    ].map((star, index)=>{
                                        var _item_RatingEntities, _item_RatingEntities_;
                                        index += 1;
                                        let rating = (item === null || item === void 0 ? void 0 : (_item_RatingEntities = item.RatingEntities) === null || _item_RatingEntities === void 0 ? void 0 : _item_RatingEntities.length) ? (_item_RatingEntities_ = item === null || item === void 0 ? void 0 : item.RatingEntities[0]) === null || _item_RatingEntities_ === void 0 ? void 0 : _item_RatingEntities_.averageRating : 0;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "filled",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `/images/start-${index <= rating ? "fill" : "unfill"}.svg`,
                                                alt: "",
                                                className: "img-fluid"
                                            })
                                        }, index);
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "arriavls-product-details",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/product-detail/${item === null || item === void 0 ? void 0 : item.id}`,
                                children: (item === null || item === void 0 ? void 0 : item.name) || "Wireless X-15"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "price_listing",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "€",
                                        item === null || item === void 0 ? void 0 : item.price
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "color_choice",
                                children: item === null || item === void 0 ? void 0 : (_item_color = item.color) === null || _item_color === void 0 ? void 0 : _item_color.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: i === 0 ? "active" : "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "",
                                            onClick: src_api_requests__WEBPACK_IMPORTED_MODULE_5__/* .doNothing */ .cn,
                                            className: "choice_color_one"
                                        })
                                    }, i))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularProductCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;