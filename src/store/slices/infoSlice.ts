import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
        changeCurrentURL: (state: InfoState, action: PayloadAction<string>) => {
            state.currentURL = action.payload
        },
        setCount: (state: InfoState, action: PayloadAction<number>) => {
            state.count = action.payload
        },
        setCurrentPage: (state: InfoState, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
});

export const {changeCurrentURL, setCount, setCurrentPage} = infoSlice.actions;