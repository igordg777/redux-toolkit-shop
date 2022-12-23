import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arrChooseClothes: [],
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setArrChooseClothes: (state, action) => {
            state.arrChooseClothes = [...state.arrChooseClothes, action.payload]
        },
    }
})

export const { setArrChooseClothes } = goodsSlice.actions;
export default goodsSlice.reducer;