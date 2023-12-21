import React, { useEffect } from "react";
import style from "./HomePage.module.scss";
import { Button } from "@mui/material";
import { useLazyGetPokemonsQuery } from "../../redux/services/pokemonApi";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { useSelector } from "react-redux";

export default function HomePage() {
  const [getPokemons, { isLoading }] = useLazyGetPokemonsQuery();
  const { items, offset, limit } = useSelector(
    ({ pokemonSlice }) => pokemonSlice
  );

  useEffect(() => {
    getPokemons({ offset, limit });
  }, []);

  return (
    <div className={style.mainBlock}>
      <div className={style.mainBlock}>
        {isLoading
          ? null
          : items.map((pokemon: any, i: number) => (
              <React.Fragment key={pokemon.name}>
                <PokemonCard name={pokemon.name} id={i + 1} />
              </React.Fragment>
            ))}
      </div>

      <Button
        sx={{
          borderRadius: "1.5rem",
          backgroundColor: "#B31312",
          border: " 2px #3f3d43 solid",
          padding: " 1rem",
          cursor: "pointer",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#B31312",
            opacity: 0.8,
          },
        }}
        onClick={() => getPokemons({ offset, limit })}
      >
        More pokemons
      </Button>
    </div>
  );
}
