import React, { FC } from "react";
import Card from "../../ui/card/Card";
import { CharacterInterface } from "../../types/store/characters";

interface CharacterProps {
  image: string;
  name: string;
  status: string;
  character: CharacterInterface;
  getCharacterInfo: (character: CharacterInterface) => void;
}

const Character: FC<CharacterProps> = ({
  image,
  status,
  name,
  character,
  getCharacterInfo,
}) => {
  return (
    <Card func={() => getCharacterInfo(character)} className="character">
      <img src={image} alt={name} className="character__image" />
      <h4>{name}</h4>
      <p>{status}</p>
    </Card>
  );
};

export default Character;
