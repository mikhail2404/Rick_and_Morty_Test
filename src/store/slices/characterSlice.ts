import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharacterInterface, CharactersState} from "../../types/store/characters";

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  error: null,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters(state: CharactersState, action: PayloadAction <CharacterInterface[]>) {
      state.characters = action.payload
    },
    setIsLoading: (state: CharactersState, action: PayloadAction <boolean>) => {
      state.isLoading =  action.payload
    },
    setError: (state: CharactersState, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  },
});


export const {getCharacters, setIsLoading, setError} = characterSlice.actions