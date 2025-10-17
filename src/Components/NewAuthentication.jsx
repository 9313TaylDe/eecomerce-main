import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Context = createContext();
const NewAutentication = ({ children }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Logado, setLogado] = useState(false);
  const [novoEmailCadastro, setNovoEmailCadastro] = useState("");
  const [novaSenhaCadastro, setNovaSenhaCadastro] = useState("");
  const [girar, setGirar] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const navegar = useNavigate();
  useEffect(() => {
    const autenticado = localStorage.getItem("auth") === "true";
    setLogado(autenticado);
    setCarregando(false);
  });

  const Login = async () => {
    if (!email || !senha) {
      return alert("Preencha o email e senha");
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, senha: senha }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("auth", "true");
        setLogado(true);
        navegar("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  const NewAccount = async () => {
    if (!novoEmailCadastro || !novaSenhaCadastro) {
      return alert("Digite um email ou senha válidos");
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: novoEmailCadastro,
          senha: novaSenhaCadastro,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Conta cadastrada com sucesso");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao conectar com o servidor");
    }
  };
  const Logout = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      setLogado(false);
      setEmail("");
      setSenha("");
      localStorage.removeItem("auth");
      alert("SAindo");
      navegar("/");
    }
  };

  return (
    <Context.Provider
      value={{
        Logado,
        setLogado,
        Login,
        Logout,
        NewAccount,
        email,
        senha,
        setEmail,
        setSenha,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default NewAutentication;
