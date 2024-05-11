import { createSlice } from '@reduxjs/toolkit';

export interface AttackSlice {
    isLoading: boolean;
    token: string;
    isLoginModalOpen: boolean;
    scrollPosition: 'Attack' | 'Contact' | 'Hero';
}

const initialState: AttackSlice = {
    isLoading: false,
    token: '',
    isLoginModalOpen: false,
    scrollPosition: 'Hero',
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
        setScrollPosition(state, action) {
            state.scrollPosition = action.payload;
        },
    },
});

export default attackSlice;
