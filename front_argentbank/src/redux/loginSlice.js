import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import axios from 'axios'
import Api from '../api/api'

const initialState = {
    id : 0,
    token: "",
    username : "",
    isPending : false,
    isError : false,
    isComplete : false,
    state : ""
}
  
export const loginSlice = createSlice({
name: 'login',
initialState,
reducers: {

},
extraReducers : (builder)=>{
    builder
    .addCase(login.fulfilled,(state)=>{
        state.isComplete = true
        state.isError = false
        state.isPending = false
        state.state = "complete"
    })
    .addCase(login.pending,(state)=>{
        state.isComplete = false
        state.isError = false
        state.isPending = true
        state.state = "pending"
    })
    .addCase(login.rejected,(state)=>{
        state.isComplete = false
        state.isError = true
        state.isPending = false
        state.state = "reject"
    })
}
})

export const login = createAsyncThunk("login",async ({email,password,remember})=>{
    let objLogin = {
        email : email,
        password : password
    }

    const res = await Api.login(objLogin)
    if(remember){
        localStorage.setItem("token",res)
        return
    }

    sessionStorage.setItem("token",res)

})


export default loginSlice.reducer