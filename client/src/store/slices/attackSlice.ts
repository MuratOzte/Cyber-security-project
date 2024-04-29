import { createSlice } from '@reduxjs/toolkit';

export interface AttackSlice {
    attacks: Array<string>;
}

const initialState: AttackSlice = {
    attacks: [],
};

const attackSlice = createSlice({
    name: 'Attack',
    initialState,
    reducers: {
        addAttack(state, action) {
            state.attacks.push(action.payload);
        },
        removeAttack(state, action) {
            state.attacks = state.attacks.filter(
                (attack) => attack !== action.payload
            );
        },
    },  
});

export default attackSlice;
