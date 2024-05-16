import { createSlice } from '@reduxjs/toolkit';
import urlValidation from '../../utils/urlValidation';

export interface Attack {
    name: string;
}

export interface AttackSlice {
    selectedAttacks: Array<Attack>;
    url: string;
    error: string | null;
}

const initialState: AttackSlice = {
    selectedAttacks: [],
    url: '',
    error: null,
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
    },
});

export default attackSlice;
