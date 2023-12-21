import React from "react";
import { Link } from "react-router-dom";
import { types } from "./typesColors";
import style from "./TypePokemon.module.scss";

interface ITypePokemon {
  name: string;
}

export const TypePokemon: React.FC<ITypePokemon> = ({ name }) => {
  let colors = types[name];
  if (!colors) {
    colors = types.normal;
  }

  const styles = {
    backgroundColor: colors.primary,
    color: colors.secondary,
    border: `3px solid ${colors.secondary}`,
  };

  return (
    <Link className={style.type} style={styles} to={`/type/${name}`}>
      {name}
    </Link>
  );
};
