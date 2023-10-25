import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';
import { userSlice } from './slices/users/userSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
    },
})

export default store;