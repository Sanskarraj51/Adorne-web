import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { handleGetAPI, handlePostAPI } from 'src/api-requests'
import auth from 'src/configs/auth'

// ** Fetch Users
export const fetchData = createAsyncThunk('appUsers/fetchData', async params => {
  const response = await axios.get('/apps/users/list', {
    params
  })

  return response.data
})

// ** Fetch Address
export const fetchAddress = createAsyncThunk('appUsers/fetchAddress', async id => {
  const response = await handleGetAPI(auth.getAddress + id)

  return response.data
})

// ** Fetch Orders
export const fetchOrders = createAsyncThunk('appUsers/fetchOrders', async id => {
  const response = await handlePostAPI(
    auth.myOrders,
    {
      user_id: id
    },
    null
  )

  return response
})

// ** Fetch Home
export const fetchHome = createAsyncThunk('appUsers/fetchHome', async id => {
  const response = await handleGetAPI(auth.home)

  return response.data
})

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    address: [],
    orders: [],
    home: {},
    mediaUrl:'',
    loginForm: false
  },
  reducers: {
    setLoginForm: (state, action) => {
      state.loginForm = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.users
    })
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.address = action.payload
    })
    builder.addCase(fetchHome.fulfilled, (state, action) => {
      state.home = action.payload
    })
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload.data
      state.mediaUrl = action.payload.mediaUrl
    })
  }
})

export const { setLoginForm } = appUsersSlice.actions

export default appUsersSlice.reducer
