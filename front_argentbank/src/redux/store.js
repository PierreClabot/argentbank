import { configureStore } from '@reduxjs/toolkit'
import loginReducer from"./loginSlice.js"
//import profilReducer from "./profil.js"

export const store = configureStore({
    reducer : {
        login : loginReducer
        // profil : profilReducer
    }
})