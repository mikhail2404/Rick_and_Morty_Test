import {CHARACTERS_URL} from "../common/const";

export const newURL = (page: number, filtersObject: { [key: string]: string } | null): string => {
    let filtersArray: [string, string][] = []
    if (filtersObject !== null) {
        filtersArray = Array.from(Object.entries(filtersObject).filter(( item) => item[1] !== 'empty'));
    }
    const newSearchParams = new URLSearchParams([['page', page.toString()], ...filtersArray])
    return `${CHARACTERS_URL}/?${newSearchParams}`
}

