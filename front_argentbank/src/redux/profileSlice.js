import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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
  
export const profileSlice = createSlice({
name: 'profile',
initialState,
reducers: {

},
extraReducers : (builder)=>{
    // Modifier les états selon les retours du serveur
    builder
    .addCase(profile.fulfilled,(state,action)=>{
        // gestion d'erreur
        state.isComplete = true
        state.isError = false
        state.isPending = false
        state.state = "complete"
        state.firstName = action.payload.firstName
        state.lastName  = action.payload.lastName
    })
    .addCase(profile.pending,(state)=>{
        state.isComplete = false
        state.isError = false
        state.isPending = true
        state.state = "pending"

    })
    .addCase(profile.rejected,(state)=>{
        state.isComplete = false
        state.isError = true
        state.isPending = false
        state.state = "reject"
    })
}
})

export const profile = createAsyncThunk("profile",async ({token,firstName,lastName})=>{
    let objProfile = {
        token : token,
        firstName : firstName,
        lastName : lastName
    }
    const res = await Api.editProfile(objProfile)
    return res;
})

// export const { login2, logout } = profileSlice.actions

export default profileSlice.reducer