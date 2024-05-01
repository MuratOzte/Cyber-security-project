import { createSlice } from '@reduxjs/toolkit';

export interface AttackSlice {
    isLoading: boolean;
    token: string;
    isLoginModalOpen: boolean;
}

const initialState: AttackSlice = {
    isLoading: false,
    token: '',
    isLoginModalOpen: false,
};

const attackSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setLoginModal(state, action) {
            state.isLoginModalOpen = action.payload;
        },
    },
});

export default attackSlice;
