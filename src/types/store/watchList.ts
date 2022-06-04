export interface WatchListState {
  episodes: Episode[];
}

export interface Episode {
  title: string;
  watched: boolean;
  id: string;
}

export interface ToggleWatchedAction {
  id: string;
  watched: boolean;
}
