import { createSlice } from '@reduxjs/toolkit'

export const uesrSlice = createSlice({
    name: 'counter',
    initialState: {
        name: '',
        email: ''
    },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        },

    },
})

export const { addUser } = uesrSlice.actions

export default uesrSlice.reducer;