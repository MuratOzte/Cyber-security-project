import { createSlice } from '@reduxjs/toolkit';

export interface Auth {
    email: string;
    password: string;
    retypePassword: string;
    isLoading: boolean;
}

const initialState: Auth = {
    email: '',
    password: '',
    retypePassword: '',
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.retypePassword = action.payload.retypePassword;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export default authSlice;
