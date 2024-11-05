import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user_model';

interface authState {
    isAuthenticated: boolean,
    username:string|null,
    email:string|null
}

const initialState: authState = {
    isAuthenticated: false,
    username: null,
    email: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        login: (state, action:PayloadAction<User>) => {
            state.isAuthenticated = true
            state.username = action.payload.username
            state.email = action.payload.email
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.username = null
            state.email = null
        }
    }
})

export const { login, logout } = authSlice.actions

