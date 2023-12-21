import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import PokemonPage from "../pages/pokemonPage/PokemonPage";
import { PokemonTypesList } from "../pages/pokemonTypesList/PokemonTypesList";
import { ErrorPage } from "../pages/404/ErrorPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/generation/:name"
        element={<PokemonTypesList filter="generation" />}
      />
      <Route
        path="/region/:name"
        element={<PokemonTypesList filter="region" />}
      />
      <Route path="/type/:name" element={<PokemonTypesList filter="type" />} />
      <Route path="pokemon/:name" element={<PokemonPage />} />
      <Route path="404" element={<ErrorPage />} />

      {/* default redirect to home page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
