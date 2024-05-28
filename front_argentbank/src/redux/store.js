import { configureStore } from '@reduxjs/toolkit'
import loginReducer from"./loginSlice.js"
import profilReducer from "./profileSlice.js"

export const store = configureStore({
    reducer : {
        login : loginReducer,
        profil : profilReducer
    }
})