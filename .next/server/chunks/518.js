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
    const dispatch = (0,src_store__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    async function validateCart() {
        if (item?.ProductvariantEntities?.length && !variant?.sku) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("This Product is Currently Out of Stock");
            // eslint-disable-next-line
            return;
        }
        let body = {
            product_id: item?.id,
            sku: variant?.sku || item?.sku_id,
            quantity: 1
        };
        dispatch((0,src_store_apps_product__WEBPACK_IMPORTED_MODULE_7__/* .addToCart */ .Xq)(body)).then((res)=>{
            router.push("/cart");
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (item?.ProductvariantEntities?.length > 0) {
            let initialVar = item?.ProductvariantEntities[0];
            setVariant(initialVar);
        }
    }, [
        item?.ProductvariantEntities
    ]);
    // eslint-disable-next-line
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "main-items",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "item_backgrounds",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/product-detail/${item?.id}`,
                        className: "item_products",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: item?.ProductImageEntities?.length ? `${mediaUrl}${item?.ProductImageEntities[0]?.key}` : `/images/img-1.png`,
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
                                href: `/product-detail/${item?.id}`,
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
                                    children: item?.CategoryEntity?.name || ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item_ratings",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "review_star",
                                    children: [
                                        ...Array(5)
                                    ].map((star, index)=>{
                                        index += 1;
                                        let rating = item?.RatingEntities?.length ? item?.RatingEntities[0]?.averageRating : 0;
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
                                href: `/product-detail/${item?.id}`,
                                children: item?.name || "Wireless X-15"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "price_listing",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "€",
                                        item?.price
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "color_choice",
                                children: item?.color?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
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