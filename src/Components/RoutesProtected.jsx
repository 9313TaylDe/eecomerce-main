import { Navigate } from "react-router-dom";
import { AuthContext, useAuth } from "./Authentication";
import { useContext } from "react";

const RoutesProtected = ({ children }) => {
  const { Logado, carregando } = useContext(AuthContext);

  if (carregando) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }
  if (!Logado) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RoutesProtected;
