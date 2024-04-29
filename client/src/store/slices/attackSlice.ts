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
        addAttack(state, action) {
            state.selectedAttacks.push(action.payload);
        },
        removeAttack(state, action) {
            state.selectedAttacks = state.selectedAttacks.filter(
                (attack) => attack !== action.payload
            );
        },
    },
});

export default attackSlice;
