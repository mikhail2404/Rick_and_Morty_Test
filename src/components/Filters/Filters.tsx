import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {newURL} from "../../helpers/newUrl";
import {changeCurrentURL, setCurrentPage} from "../../store/slices/infoSlice";
import Select from "../../ui/select/Select";
import Button from "../../ui/button/Button";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {resetFilters, setFilters} from "../../store/slices/filtersSlice";


export interface FiltersObj {
    genderOptions: string[],
    speciesOptions: string[],
    statusOptions: string[]
}

const filtersInitialState = {"gender": "empty", "species": "empty", "status": "empty"}

const Filters: FC = () => {
    const [filterValues, setFilterValues] = useState<{[key: string]: string}>(filtersInitialState);
    const {genderOptions, speciesOptions, statusOptions} = useTypedSelector((state) => state.filters.filtersOptions)
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterValues(prev => ({...(!prev ? {} : prev), [e.target.name]: e.target.value}))
    }

    const handleSubmitFilters = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setFilters(filterValues));
        dispatch(changeCurrentURL(newURL(1, filterValues)))
        dispatch(setCurrentPage(1))
    }

    const handleResetFilters = () => {
        setFilterValues(filtersInitialState);
        dispatch(resetFilters())
        dispatch(changeCurrentURL(newURL(1, filtersInitialState)))
        dispatch(setCurrentPage(1))
    }

    return (
        <form className='filters' onSubmit={handleSubmitFilters}>

            <h1 className='filters__title'>Filters: </h1>
            <Select
                options={genderOptions}
                selectedOption={filterValues['gender']}
                onChange={handleChange}
                name='gender'
                className='filters__select'
            />
            <Select
                options={speciesOptions}
                selectedOption={filterValues['species']}
                onChange={handleChange}
                name='species'
                className='filters__select'
            />
            <Select
                options={statusOptions}
                selectedOption={filterValues['status']}
                onChange={handleChange}
                name='status'
                className='filters__select'
            />

            <div className='filters__cta'>
                <Button type='submit' className='btn btn--primary' label='Search'/>
                <Button type='button' className='btn btn--secondary' label='Reset Filter' onClick={handleResetFilters}/>
            </div>

        </form>
    );
};

export default Filters;