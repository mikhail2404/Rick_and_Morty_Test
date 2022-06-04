import React, { useEffect, useState } from "react";
import UserEpisodeList from "../../components/UserEpisodeList/UserEpisodeList";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addEpisode, loadWatchList } from "../../store/slices/watchList";

const MyWatchList = () => {
  const [episodeTitle, setEpisodeTitle] = useState<string>("");
  const { episodes } = useTypedSelector((state) => state.watchList);

  const dispatch = useDispatch();

  const episodeTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEpisodeTitle(e.target.value);

  const addNewEpisode = (
    e: React.FormEvent<HTMLFormElement>,
    title: string
  ) => {
    e.preventDefault();
    if (episodeTitle.length) {
      dispatch(addEpisode({ title, id: uuid(), watched: false }));
      setEpisodeTitle("");
    }
  };

  useEffect(() => {
    const loadedWatchList = JSON.parse(
      localStorage.getItem("watch-list") || "[]"
    );
    if (loadedWatchList && loadedWatchList.length > 0) {
      dispatch(loadWatchList(loadedWatchList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watch-list", JSON.stringify(episodes));
  }, [episodes]);

  return (
    <div className="watch-list">
      <form
        onSubmit={(e) => addNewEpisode(e, episodeTitle)}
        className="watch-list__form"
      >
        <input
          type="text"
          value={episodeTitle}
          onChange={episodeTitleChange}
          required
          placeholder="Add episode"
        />
        <UserEpisodeList />
      </form>
    </div>
  );
};

export default MyWatchList;
