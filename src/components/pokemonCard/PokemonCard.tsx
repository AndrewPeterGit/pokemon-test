import React from "react";
import style from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";

interface ICardProps {
  name: string;
  id: number | string | null;
}

export const PokemonCard: React.FC<ICardProps> = ({ name, id }) => {
  return (
    <div className={style.cardBlock}>
      <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
        <img
          // src={`https://img.pokemondb.net/sprites/black-white/normal/${name}.png`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`Sprite oficial do pokémon ${name}`}
          className={style.sprite}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <p className={style.namePokemon}>{name}</p>
      </Link>
    </div>
  );
};
