import { createSlice } from '@reduxjs/toolkit';

export interface Attack {
    name: string;
}

export interface AttackSlice {
    selectedAttacks: Array<Attack>;
}

const initialState: AttackSlice = {
    selectedAttacks: [],
};

const attackSlice = createSlice({
    name: 'Attack',
    initialState,
    reducers: {
        setAttacks(state, action) {
            state.selectedAttacks = action.payload;
        },
    },
});

export default attackSlice;
