import { useContext, useState } from "react";
import { Context } from "./NewAuthentication";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import NewProtectedRoutes from "./NewProtectedRoutes";
import Home from "./Home";
import NotFound from "./PageNotFound";

const NewRoutes = () => {
  const { Login, carregando, Logado } = useContext(Context);

  if (carregando) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/home"
        element={
          <NewProtectedRoutes>
            <Home />
          </NewProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default NewRoutes;
