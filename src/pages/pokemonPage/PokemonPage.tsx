import { useGetPokemonByNameQuery } from "../../redux/services/pokemonApi";
import { useNavigate, useParams } from "react-router-dom";
import style from "./PokemonPage.module.scss";
import { TypePokemon } from "../../components/typeComponent/TypePokemon";

export default function PokemonPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const {
    data: pokemon,
    isError,
    isLoading,
  } = useGetPokemonByNameQuery({
    name: name || "",
  });

  if (isError) {
    navigate("/404");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px 32px",
      }}
    >
      <div className={style.backButton} onClick={() => navigate(-1)}>
        Back
      </div>
      <h2 className={style.nameTitle}>{name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section className={style.sprites}>
          <img
            className={style.sprite}
            src={pokemon?.sprites.front_default}
            alt={`${pokemon?.name}`}
          />
          <img
            className={style.sprite}
            src={pokemon?.sprites.front_shiny}
            alt={`${pokemon?.name}`}
          />
        </section>
        <section className={style.info}>
          <div className={style.tipos}>
            <h3>Type</h3>
            <div className={style.list}>
              {pokemon?.types?.map((type: any) => (
                <TypePokemon key={type.type.name} name={type.type.name} />
              ))}
            </div>
          </div>
          <div className={style.divider}></div>
          <div>
            <h3>Size</h3>
            <div className={style.list}>
              <span>Weight: {pokemon?.weight}</span>
              <span>Height: {pokemon?.height}</span>
            </div>
          </div>
          <div className={style.divider}></div>
          <div className={style.habilidades}>
            <h3>Ability</h3>
            <div className={style.list}>
              {pokemon?.abilities?.map((item: any) => (
                <span key={item?.ability.name}>{item?.ability.name}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className={style.stats}>
        <h3 className={style.titleStat}>Attributes</h3>
        <div className={style.statsRow}>
          {pokemon?.stats.map((stat: any) => (
            <div className={style.stat} key={stat.stat.name}>
              <span className={style.statName}>{stat.stat.name}</span>
              <span className={style.statVal}>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
