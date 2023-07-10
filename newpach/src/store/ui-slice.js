import { createSlice } from "@reduxjs/toolkit";

const  ui= createSlice({
    name:'ui',
    initialState:{cartIsShow:false},
    reducers:{
        toggle(state){
            state.cartIsShow=!state.cartIsShow
        }
    }
})

export const uiAction=ui.actions
export default ui