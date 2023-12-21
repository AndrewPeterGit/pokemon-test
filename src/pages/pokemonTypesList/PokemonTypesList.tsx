import React, { useEffect } from "react";
import style from "./PokemonTypesList.module.scss";
import {
  useGetPokemonsByFilterQuery,
  useLazyGetPokemonByGenerationQuery,
} from "../../redux/services/pokemonApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";

export const PokemonTypesList: React.FC<{ filter: string }> = ({ filter }) => {
  const { pathname } = useLocation();
  const param = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetPokemonsByFilterQuery({
    url: pathname,
  });
  const [getPokemonByGeneration, { data: pokemons, isLoading: isLoadingPoks }] =
    useLazyGetPokemonByGenerationQuery();

  useEffect(() => {
    if (filter === "region" && data?.main_generation) {
      getPokemonByGeneration({
        url: `generation/${data?.main_generation?.name}`,
      });
    } else if (!isLoading && !data?.main_generation && filter === "region") {
      navigate("/404");
    }
  }, [data?.main_generation, isLoading]);

  const getPokId = (url: string) => {
    const regex = /\/(\d+)\/$/;
    const match = regex.exec(url);
    const pokemonNumber = match && match[1];
    return pokemonNumber;
  };

  return (
    <div className={style.mainBlock}>
      <h1>{`Pokemons  ${filter}: ${param.name}`}</h1>
      <div className={style.mainBlock}>
        {filter === "type" &&
          !isLoading &&
          data?.pokemon?.map((pokemon: any) => (
            <React.Fragment key={pokemon.pokemon.name}>
              <PokemonCard
                name={pokemon.pokemon.name}
                id={getPokId(pokemon.pokemon.url)}
              />
            </React.Fragment>
          ))}
        {filter === "generation" &&
          !isLoading &&
          data?.pokemon_species?.map((pokemon: any) => (
            <React.Fragment key={pokemon.name}>
              <PokemonCard name={pokemon.name} id={getPokId(pokemon.url)} />
            </React.Fragment>
          ))}
        {filter === "region" &&
          !isLoadingPoks &&
          pokemons?.pokemon_species?.map((pokemon: any) => (
            <React.Fragment key={pokemon.name}>
              <PokemonCard name={pokemon.name} id={getPokId(pokemon.url)} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};
