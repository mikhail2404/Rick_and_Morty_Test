import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import OverlayInfo from "../../components/Overlay/OverlayInfo";
import { CharacterInterface } from "../../types/store/characters";
import { useDispatch } from "react-redux";
import {
  getCharacters,
  setError,
  setIsLoading,
} from "../../store/slices/characterSlice";
import { changeCurrentURL, setCurrentPage } from "../../store/slices/infoSlice";
import { newURL } from "../../helpers/newUrl";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Paginator/Pagination";
import Character from "../../components/Character/Character";

const Characters = () => {
  const { characters } = useTypedSelector((state) => state.characters);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<CharacterInterface>({
    created: "",
    episode: [],
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
    url: "",
  });
  const { currentURL, currentPage, pages } = useTypedSelector(
    (state) => state.info
  );
  const { filtersState } = useTypedSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const getData = async () => {
      const response = await fetch(currentURL!);
      if (!response.ok) {
        dispatch(setIsLoading(false));
        dispatch(setError("Something goes wrong..."));
        throw new Error("Something goes wrong...");
      }
      const data = await response.json();
      dispatch(getCharacters(data.results));
      dispatch(setIsLoading(false));
    };
    if (currentURL) getData();
  }, [currentURL]);

  const handlePageChange = (page: number) => {
    dispatch(changeCurrentURL(newURL(page, filtersState)));
    dispatch(setCurrentPage(page));
  };

  const getCharacterInfoHandler = (character: CharacterInterface) => {
    setIsOpen(true);
    setCurrentCharacter(character);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="characters">
      <OverlayInfo isOpen={isOpen} info={currentCharacter} hideModal={hideModal} />
      <div className="characters__filter">
        <Filters />
      </div>
      <div className="characters__container">
        <div className="characters__content">
          { characters.map((character) => (
            <Character
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              character={character}
              getCharacterInfo={getCharacterInfoHandler}
            />
          ))}
        </div>
        <div className="characters__paginator">
          {characters && characters.length > 0 && (
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              siblingCount={1}
              totalPages={pages}
              pageSize={20}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Characters;
