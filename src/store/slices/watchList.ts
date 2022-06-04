import {WatchListState} from "../../types/store/watchList";
import {createSlice} from "@reduxjs/toolkit";

const initialState: WatchListState = {
    episodes: []
}


export const whatListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addEpisode(state: WatchListState, action) {
            state.episodes.push(action.payload)
        },
        toggleWatched: (state: WatchListState, action) => {
           state.episodes = state.episodes.map(episode => {
               if(episode.id === action.payload.id){
                   return {...episode, watched: action.payload.watched}
               }
               return  episode
           })
        },
        deleteEpisode: (state: WatchListState, action) => {
            state.episodes = state.episodes.filter(episode => episode.id !== action.payload)
        },
        loadWatchList: (state: WatchListState, action) => {
            state.episodes = action.payload
        }
    },
});

export const {addEpisode, toggleWatched, deleteEpisode, loadWatchList} = whatListSlice.actions;

