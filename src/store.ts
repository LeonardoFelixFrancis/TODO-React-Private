import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducers/auth_reducer'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})

export default store