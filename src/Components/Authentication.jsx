import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Logado, setLogado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const autenticado = localStorage.getItem("autentic") === "true";
    setLogado(autenticado);
    setCarregando(false);
    setTimeout(1000000);
  });

  const Login = (userEmail, userSenha) => {
    if (userEmail && userSenha) {
      setEmail(userEmail);
      setSenha(userSenha);
      setLogado(true);
      localStorage.setItem("autentic", "true");
      alert("Login bem-sucedido");
    }
  };
  const Logout = () => {
    setEmail("");
    setSenha("");
    setLogado(false);
    localStorage.removeItem("autentic");
    alert("Fazendo logout");
  };
  return (
    <AuthContext.Provider
      value={{ email, senha, Login, Logout, Logado, setLogado, carregando }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
