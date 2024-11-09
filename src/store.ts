import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducers/auth_reducer'
import navigationSlice from './reducers/navigation_reducer'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navigation: navigationSlice.reducer
    },
})

export default store