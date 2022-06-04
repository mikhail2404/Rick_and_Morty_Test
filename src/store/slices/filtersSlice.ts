import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterOptions, FiltersStateType, SelectedFiltersState} from "../../types/store/filters";


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
        setFilterOptions: (state: FiltersStateType, action: PayloadAction<FilterOptions>) => {
            state.filtersOptions =  action.payload
        },
        setFilters: (state: FiltersStateType, action: PayloadAction<SelectedFiltersState>) => {
            state.filtersState = action.payload
        },
        resetFilters: (state: FiltersStateType) => {
            state.filtersState = null
        }
    }
});

export const {setFilterOptions, setFilters, resetFilters} = filtersSlice.actions;