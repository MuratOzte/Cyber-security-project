import { createSlice } from '@reduxjs/toolkit';

export interface Auth {
    registerEmail: string;
    registerPassword: string;
    retypePassword: string;
    loginEmail: string;
    loginPassword: string;
    isLoading: boolean;
}

const initialState: Auth = {
    registerEmail: '',
    registerPassword: '',
    retypePassword: '',
    loginEmail: '',
    loginPassword: '',
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRegisterData(state, action) {
            state.registerEmail = action.payload.registerEmail;
            state.registerPassword = action.payload.registerPassword;
            state.retypePassword = action.payload.retypePassword;
        },
        setLoginData(state, action) {
            state.loginEmail = action.payload.loginEmail;
            state.loginPassword = action.payload.loginPassword;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export default authSlice;
