import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { handleGetAPI, handlePostAPI, userData } from 'src/api-requests'
import authConfig from 'src/configs/auth'
import { setLoginForm } from '../user'

// ** Fetch ProductData
export const fetchProductData = createAsyncThunk('appProduct/fetchProductData', async params => {
  // const { name, status, supplier, category } = params
  let response = await handleGetAPI(authConfig.product)

  return response
})

export const fetchProductDetailData = createAsyncThunk('appProduct/fetchProductDetailData', async id => {
  let response = await handleGetAPI(authConfig.productDetail + id)

  return response?.respData
})

// ** Fetch CategoryData
export const fetchCategoryData = createAsyncThunk('appProduct/fetchCategoryData', async () => {
  let response = await handleGetAPI(authConfig.category)

  return response
})

// ** Fetch Brand Data
export const fetchBrandData = createAsyncThunk('appProduct/fetchBrandData', async () => {
  let response = await handleGetAPI(authConfig.brand)

  return response
})

// ** Fetch Blog Data
export const fetchBlogData = createAsyncThunk('appProduct/fetchBlogData', async () => {
  let response = await handleGetAPI(authConfig.blog)

  return response
})

// ** Fetch Banner Data
export const fetchBannerData = createAsyncThunk('appProduct/fetchBannerData', async () => {
  let response = await handleGetAPI(authConfig.banner)

  return response
})

// ** Fetch Color Data
export const fetchColorData = createAsyncThunk('appProduct/fetchColorData', async () => {
  let response = await handleGetAPI(authConfig.getColors)

  return response
})

// ** Fetch Size Data
export const fetchSizeData = createAsyncThunk('appProduct/fetchSizeData', async () => {
  let response = await handleGetAPI(authConfig.sizes)

  return response
})

export const fetchCartData = createAsyncThunk('appProduct/fetchCartData', async () => {
  let userData = JSON.parse(window.localStorage.getItem('userData'))
  // eslint-disable-next-line
  let response = await handleGetAPI(authConfig.cart + userData?.id)

  return response
})

export const fetchWishListData = createAsyncThunk('appProduct/fetchWishListData', async () => {
  let userData = JSON.parse(window.localStorage.getItem('userData'))
  let response = await handleGetAPI(authConfig.wishList + userData?.id)

  return response
})

export const addToCart = createAsyncThunk('appProduct/addToCart', async (params, { dispatch }) => {
  let userData = JSON.parse(window.localStorage.getItem('userData'))
  let response
  if (userData) {
    let body = params
    body.user_id = userData?.id
    response = await handlePostAPI(authConfig.addCart, body)
    if (response) {
      dispatch(fetchCartData())
    }
  } else {
    dispatch(setLoginForm(true))
  }

  return response
})

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

export const appProductSlice = createSlice({
  name: 'appProduct',
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
    setProductData: (state, action) => {
      state.data = action.payload
    },
    setCategoryDetailDataData: (state, action) => {
      state.categoryDetailData = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.data = action.payload?.respData
    })
    builder.addCase(fetchProductDetailData.fulfilled, (state, action) => {
      state.productDetail = action.payload
    })
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      state.categoryData = action.payload?.data
    })
    builder.addCase(fetchBrandData.fulfilled, (state, action) => {
      state.brandData = action.payload?.data
    })
    builder.addCase(fetchBannerData.fulfilled, (state, action) => {
      state.banners = action.payload?.data
    })
    builder.addCase(fetchBlogData.fulfilled, (state, action) => {
      state.blogs = action.payload?.data
    })
    builder.addCase(fetchColorData.fulfilled, (state, action) => {
      state.colors = action.payload?.data
    })
    builder.addCase(fetchSizeData.fulfilled, (state, action) => {
      state.sizes = action.payload?.data
    })
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.cartData = action.payload?.data
    })
    builder.addCase(fetchWishListData.fulfilled, (state, action) => {
      state.wishListData = action.payload?.data
    })
  }
})

export const { setProductData, setCategoryDetailDataData } = appProductSlice.actions

export default appProductSlice.reducer
