import { createSlice } from "@reduxjs/toolkit";
import { CharactersState } from "../../types/store/characters";

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  error: null,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters(state: CharactersState, action) {
      state.characters = action.payload
    },
    setIsLoading: (state: CharactersState, action) => {
      state.isLoading =  action.payload
    },
    setError: (state: CharactersState, action) => {
      state.error = action.payload
    }
  },
});


export const {getCharacters, setIsLoading, setError} = characterSlice.actions