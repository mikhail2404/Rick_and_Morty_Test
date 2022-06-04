export interface FilterOptions {
  genderOptions: string[],
  speciesOptions: string[],
  statusOptions: string[],
}

export interface SelectedFiltersState {
  [key: string]: string
}

export interface FiltersStateType {
  filtersOptions: FilterOptions,
  filtersState: SelectedFiltersState | null
}