import { createSlice } from '@reduxjs/toolkit';
import {InfoState} from "../../types/store/info";



const initialState: InfoState = {
    count: 0,
    pages: 0,
    currentURL: null,
    currentPage: 1
}

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setPages: (state: InfoState, action) => {
            state.pages =  action.payload
        },
        changeCurrentURL: (state: InfoState, action) => {
            state.currentURL = action.payload
        },
        setCount: (state: InfoState, action) => {
            state.count = action.payload
        },
        setCurrentPage: (state: InfoState, action) => {
            state.currentPage = action.payload
        }
    }
});

export const {setPages, changeCurrentURL, setCount, setCurrentPage} = infoSlice.actions;