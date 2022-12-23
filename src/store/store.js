import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import goodsSlice from '../features/goods/goodsSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        goods: goodsSlice,
    }
})