import { createSlice } from '@reduxjs/toolkit';
import {FiltersStateType} from "../../types/store/filters";


const initialState: FiltersStateType = {
    filtersOptions: {
        genderOptions: [],
        speciesOptions: [],
        statusOptions: []
    },
    filtersState: null
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterOptions: (state: FiltersStateType, action) => {
            state.filtersOptions =  action.payload
        },
        setFilters: (state: FiltersStateType, action) => {
            state.filtersState = action.payload
        },
        resetFilters: (state: FiltersStateType) => {
            state.filtersState = null
        }
    }
});

export const {setFilterOptions, setFilters, resetFilters} = filtersSlice.actions;