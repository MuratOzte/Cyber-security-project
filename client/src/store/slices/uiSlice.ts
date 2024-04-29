import { createSlice } from '@reduxjs/toolkit';

export interface AttackSlice {
    isLoading: boolean;
    token: string;
}

const initialState: AttackSlice = {
    isLoading: false,
    token: '',
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
    },
});

export default attackSlice;
