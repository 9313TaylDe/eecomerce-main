import "primeicons/primeicons.css";
import { useState } from "react";
const Header = ({ altura, largura, cor, fundo }) => {
  const [alteraCadastro, setAlterarCadastro] = useState(false);
  return (
    <header
      style={{
        width: largura,
        height: altura,
        backgroundColor: fundo,
        color: cor,
      }}
      className="flex min-w-full justify-between items-center flex-col gap-5"
    >
      <h2 className="text-center text-xl shadow-md shadow-black pl-4 pr-4 rounded-xl">
        TechSys
      </h2>
      <nav
        id="nav-menusleft"
        className="min-w-full flex items-center justify-between gap-2"
      >
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-user-plus text-xl text-blue-600"></i>
          <span>Cadastros</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-pencil text-xl text-yellow-500"></i>
          <span className="text-xs">Editar Cadastros</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-shopping-cart text-xl text-green-600"></i>
          <span>Vendas</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-wallet text-xl text-emerald-600"></i>
          <span>Caixa</span>
        </button>{" "}
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-cog text-xl text-gray-600"></i>
          <span>Configurações</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-info-circle text-xl text-sky-600"></i>
          <span>Sobre</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition">
          <i className="pi pi-sign-out text-xl text-red-600"></i>
          <span>Sair</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
