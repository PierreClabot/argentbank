import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    id : 0,
    token: ""
}
  
export const loginSlice = createSlice({
name: 'counter',
initialState,
reducers: {
    login: async (state,email,pwd) => {
        // axios.body ??
        const res = await axios.put("http://localhost:3001/api/v1/user/login")
                                    .then((res)=>{
                                        // Traiter les données ?
                                        // state.id = res.???
                                        // state.token = res.???
                                    }).catch(err=>{
                                        // ?? error
                                    })
    },
    logout: (state) => {

        state.id = 0,
        state.token = ""
    }
    // increment: (state) => {
    //     state.value += 1
    // },
    // decrement: (state) => {
    //     state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload
    // }
},
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer