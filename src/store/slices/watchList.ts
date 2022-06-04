import {
  Episode,
  ToggleWatchedAction,
  WatchListState,
} from "../../types/store/watchList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WatchListState = {
  episodes: [],
};

export const whatListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addEpisode(state: WatchListState, action: PayloadAction<Episode>) {
      state.episodes.push(action.payload);
    },
    toggleWatched: (
      state: WatchListState,
      action: PayloadAction<ToggleWatchedAction>
    ) => {
      state.episodes = state.episodes.map((episode) => {
        if (episode.id === action.payload.id) {
          return { ...episode, watched: action.payload.watched };
        }
        return episode;
      });
    },
    deleteEpisode: (state: WatchListState, action: PayloadAction<string>) => {
      state.episodes = state.episodes.filter(
        (episode) => episode.id !== action.payload
      );
    },
    loadWatchList: (
      state: WatchListState,
      action: PayloadAction<Episode[]>
    ) => {
      state.episodes = action.payload;
    },
  },
});

export const { addEpisode, toggleWatched, deleteEpisode, loadWatchList } =
  whatListSlice.actions;
