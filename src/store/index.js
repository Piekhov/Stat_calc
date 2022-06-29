import {configureStore} from '@reduxjs/toolkit';
import itemsSlice from '../Calc/Slice'


export const store = configureStore ({
    reducer: {
        items: itemsSlice,
    }
}) 
