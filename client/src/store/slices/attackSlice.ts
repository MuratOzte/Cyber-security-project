import { createSlice } from '@reduxjs/toolkit';
import urlValidation from '../../utils/urlValidation';

export interface Attack {
    name: any;
}

export interface AttackSlice {
    selectedAttacks: any[];
    url: string;
    error: string | null;
    isLoading: boolean;
    position: 'searchPosition' | 'loadingPosition';
}

const initialState: AttackSlice = {
    selectedAttacks: [],
    url: '',
    error: null,
    isLoading: false,
    position: 'searchPosition',
};

const attackSlice = createSlice({
    name: 'Attack',
    initialState,
    reducers: {
        setAttacks(state, action) {
            state.selectedAttacks = action.payload;
        },
        setUrl(state, action) {
            if (!urlValidation(action.payload)) {
                state.error = 'Invalid URL';
                state.url = '';
                return;
            }
            state.error = null;
            state.url = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setPosition(state, action) {
            state.position = action.payload;
        },
    },
});

export default attackSlice;
