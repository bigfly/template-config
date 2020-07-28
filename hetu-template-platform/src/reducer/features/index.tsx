import { createSlice } from '@reduxjs/toolkit'
const initialState: any = {
    num: 0
}

export const cmomonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        decrement: (state) => {
            console.log({ state })
            state.num = state.num - 1
        },
        increment: (state) => {
            console.log({ state })
            state.num = state.num + 1
        }
    }
})

export const {
    decrement,
    increment
} = cmomonSlice.actions

export const getNum = (state: any) => state.common.num

export default cmomonSlice.reducer