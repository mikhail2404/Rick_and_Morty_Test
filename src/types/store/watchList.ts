export interface WatchListState {
  episodes: Episode[];
}

export interface Episode {
  title: string;
  watched: boolean;
  id: string;
}

export enum WatchListActionTypes {
  ADD_EPISODE = "ADD_EPISODE",
  TOGGLE_WATCHED = "TOGGLE_WATCHED",
  DELETE_EPISODE = "DELETE_EPISODE",
  LOAD_WATCH_LIST = "LOAD_WATCH_LIST",
}

interface AddEpisodeAction {
  type: WatchListActionTypes.ADD_EPISODE;
  payload: Episode;
}

interface ToggleWatchedAction {
  type: WatchListActionTypes.TOGGLE_WATCHED;
  payload: {
    id: string;
    watched: boolean;
  };
}

interface DeleteEpisodeAction {
  type: WatchListActionTypes.DELETE_EPISODE;
  payload: string;
}

interface LoadWatchlist {
  type: WatchListActionTypes.LOAD_WATCH_LIST;
  payload: Episode[];
}

export type WatchListAction =
  | AddEpisodeAction
  | ToggleWatchedAction
  | DeleteEpisodeAction
  | LoadWatchlist;
