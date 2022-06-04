import React from "react";
import { ReactComponent as Bin } from "../../assets/icons/bin.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {deleteEpisode, toggleWatched} from "../../store/slices/watchList";

const UserEpisodeList: React.FC = () => {
  const {episodes} = useTypedSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const toggleWatchedHandler = (episodeInfo: {
    id: string;
    watched: boolean;
  }) => dispatch(toggleWatched(episodeInfo));

  const deleteEpisodeHandler = (id: string) => dispatch(deleteEpisode(id))
  return (
    <div className="episode-container">
      {episodes.map(episode => (
        <div key={episode.id} className="episode">
          <input
            type="checkbox"
            checked={episode.watched}
            onChange={() =>
                toggleWatchedHandler({ id: episode.id, watched: !episode.watched })
            }
          />
          <p className={`episode__title ${episode.watched ? 'episode__title--watched' : ''}`}>{episode.title}</p>
          <Bin onClick={() => deleteEpisodeHandler(episode.id)}/>
        </div>
      ))}
    </div>
  );
};

export default UserEpisodeList;
