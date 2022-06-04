import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import {characterSlice} from "./slices/characterSlice";
import {infoSlice} from "./slices/infoSlice";
import {filtersSlice} from "./slices/filtersSlice";
import {whatListSlice} from "./slices/watchList";

const reducer = combineReducers({
    characters: characterSlice.reducer,
    watchList: whatListSlice.reducer,
    info: infoSlice.reducer,
    filters: filtersSlice.reducer
});

export const store = configureStore({reducer, devTools: true})

export type RootState = ReturnType<typeof store.getState>
