export interface FiltersStateType {
    filtersOptions: {
        genderOptions: string[],
        speciesOptions: string[],
        statusOptions: string[],
    },
    filtersState: {
        selectedGender: string,
        selectedStatus: string,
        selectedSpecies: string
    } | null
}
