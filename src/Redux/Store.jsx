import {configureStore} from  '@reduxjs/toolkit'
import UserAuth from './UserSlice'
const Store =configureStore({
    reducer:{
        auth: UserAuth
    }
})

export default Store