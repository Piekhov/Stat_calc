import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    salary: 0,

}


export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.salary = action.payload
        },
    }  
})

export const {setValue} = itemsSlice.actions
export default itemsSlice.reducer