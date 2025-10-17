import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authentication";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "./NewAuthentication";

const LoginPage = () => {
  const {
    Login,
    Logout,
    NewAccount,
    Logado,
    email,
    senha,
    setEmail,
    setSenha,
  } = useContext(Context);
  const HandleLogin = (e) => {
    Login(e);
    Logado(true);
  };
  const HandleNewAccount = () => [NewAccount()];

  const HandleLogout = () => {
    Logout();
    Logado(false);
  };
  const [flip, setFlipped] = useState(false);

  const Flipeed = (e) => {
    e.preventDefault();
    setFlipped(!flip);
  };

  return (
    <div className="relative flex h-[97vh] w-[39.9vw] bg-transparent">
      <div className="group flex items-center justify-center [perspective:[700px] w-full rounded-lg bg-red-700">
        <button
          className="z-50 absolute transform transition-transform duration-700 ease-linear p-2 top-2 left-8 rounded-lg bg-sky-400 hover:bg-sky-900 hover:text-white shadow-xl shadow-black border w-[100px] border-black"
          onClick={Flipeed}
        >
          {!flip ? "Cadastre-se" : "Login"}
        </button>
        <div
          className={`flex flex-wrap [transform-style:preserve-3d] transition-transform w-[480px] h-[450px] rounded-xl shadow-xl relative duration-700 ${
            flip ? "[transform:rotateY(180deg)] " : ""
          }`}
        >
          <div
            className="bg-sky-400  flex items-center justify-center  shadow-2xl rounded-xl w-full h-full
            [backface-visibility:hidden] absolute inset-0 p-2 flex-col gap-5"
          >
            <h2 className="p-4 shadow-xl text-xl shadow-black rounded-md">
              Login
            </h2>
            <div className="bg-sky-500 shadow-xl p-8 w-full h-fit  rounded-xl flex flex-wrap items-center justify-center">
              <input
                className="w-full h-10 text-black pl-2 rounded-xl mb-2 shadow-xl"
                type="text"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="w-full h-10 text-black pl-2 rounded-xl mb-2 shadow-xl"
                type="text"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                onClick={HandleLogin}
                className="bg-sky-700 w-full rounded-xl hover:bg-sky-600"
              >
                Entrar
              </button>
            </div>
          </div>
          <div className="bg-sky-600 p-2 flex items-center justify-center text-right shadow-2xl rounded-xl w-full h-full absolute inset-0 [backface-visibility:hidden] text-white [transform:rotateY(180deg)] flex-col gap-5">
            <h2 className="p-4 shadow-xl text-xl shadow-black rounded-md">
              Cadastro
            </h2>
            <div className="bg-sky-500 shadow-xl p-8 w-full h-fit  rounded-xl flex flex-wrap items-center justify-center z-50">
              <input
                className="w-full z-50 h-10 shadow-xl rounded-xl mb-2
                text-black pl-2"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full z-50 h-10 shadow-2xl rounded-xl mb-2
                text-black pl-2"
                type="text"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                onClick={HandleNewAccount}
                className="rounded-xl bg-sky-700  w-full shadow-xl hover:bg-sky-600"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
