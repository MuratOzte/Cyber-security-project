import { createSlice } from '@reduxjs/toolkit';

export interface AttackSlice {
    isLoading: boolean;
    token: string;
    isLoginModalOpen: boolean;
    scrollPosition: 'Attack' | 'Contact' | 'Register';
    navPosition: 'Attack' | 'Contact' | 'Register';
    page: 'attack' | 'home';
}

const initialState: AttackSlice = {
    isLoading: false,
    token: '',
    isLoginModalOpen: false,
    scrollPosition: 'Register',
    navPosition: 'Register',
    page: 'home',
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
        setNavPosition(state, action) {
            state.navPosition = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export default attackSlice;
