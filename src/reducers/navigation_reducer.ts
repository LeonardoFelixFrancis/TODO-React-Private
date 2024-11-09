import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

interface navigateState {
    navigate:NavigateFunction|null
}

const initialState:navigateState = {
    navigate: null
}

const navigationSlice = createSlice({
    name:'navigation',
    initialState,
    reducers:{
        setNavigate: (state, action: PayloadAction<NavigateFunction>) => {
            state.navigate = action.payload;
        }
    }
})

export const {setNavigate} = navigationSlice.actions;
export default navigationSlice