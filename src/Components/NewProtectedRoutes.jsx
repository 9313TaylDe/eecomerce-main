import { useContext, useEffect } from "react";
import { Context } from "./NewAuthentication";
import { Navigate, useNavigate } from "react-router-dom";

const NewProtectedRoutes = ({ children }) => {
  const { Logado, carregando } = useContext(Context);
  const navigate = useNavigate();
  if (carregando) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }

  useEffect(() => {
    if (!Logado) {
      navigate("/");
    }
  }, [Logado, navigate]);
  return children;
};

export default NewProtectedRoutes;
