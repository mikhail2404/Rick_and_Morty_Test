import {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {CharacterInterface} from "../../types/store/characters";
import {Info} from "../../types/store/info";
import {CHARACTERS_URL} from "../../common/const";
import {setError, setIsLoading} from "../../store/slices/characterSlice";
import {setFilterOptions} from "../../store/slices/filtersSlice";
import {changeCurrentURL, setCount} from "../../store/slices/infoSlice";
import {fillFilterOptions} from "../../helpers/fillFilterOptions";

const InitFilters = () => {
    const [characters, setCharacters] = useState<CharacterInterface[]>([]);
    const [info, setInfo] = useState<Info | null>(null);
    const [url, setUrl] = useState<string>(`${CHARACTERS_URL}/?page=1`);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(setIsLoading(true));

            const getCharacters = async (url: string) => {
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    setCharacters((prevCharacters) => {
                        return [...prevCharacters, ...data.results];
                    });
                    setInfo(data.info);
                    setUrl(data.info.next)
                }catch (e){
                    if(e instanceof TypeError){
                        dispatch(setIsLoading(false));
                        dispatch(setError('Something went wrong...'))
                    }
                }
            }

            if (url) {
                getCharacters(url)
            } else {
                const { genderOptions, speciesOptions, statusOptions } = fillFilterOptions(characters);
                dispatch(setIsLoading(false));
                dispatch(setFilterOptions({
                    genderOptions: [...genderOptions, 'empty'],
                    speciesOptions: [...speciesOptions, 'empty'],
                    statusOptions: [...statusOptions, 'empty']
                }));
                dispatch(setCount(info?.count!))
                dispatch(changeCurrentURL(`${CHARACTERS_URL}/?page=1`))
            }
        }, [url]
    )
    return null;
};

export default InitFilters;