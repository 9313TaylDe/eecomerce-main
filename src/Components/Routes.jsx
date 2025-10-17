import { useContext, useState } from "react";
import { AuthContext } from "./Authentication";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import MyProfile from "./MYProfiele";
import NotFound from "./PageNotFound";
import RoutesProtected from "./RoutesProtected";

const Rout = () => {
  const { Login, Logado, carregando } = useContext(AuthContext);

  if (carregando) {
    return (
      <>
        <h2>Carregando...</h2>
      </>
    );
  }
  return (
    <Routes>
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastre-se" element={<LoginPage />} />

        <Route
          path="/home"
          element={
            <RoutesProtected>
              <Home />
            </RoutesProtected>
          }
        />
        <Route path="/perfil" element={<MyProfile />} />
      </>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rout;
