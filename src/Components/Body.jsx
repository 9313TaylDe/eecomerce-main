import { useEffect, useState } from "react";
import CardsProducts from "./CardsProdutcts";
import { products } from "./ListProdutcs";
const Body = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [categoriasPesquisadas, setCategoriasPesquisadas] = useState("");
  const [sugestions, setSugestions] = useState([]);
  const [closeBar, setCloseBar] = useState(false);
  const categoriasMapeadas = products.reduce((acc, categoria) => {
    acc[categoria.name.toLowerCase()] = categoria.subproducts;
    return acc;
  }, {});
  const categoriasDisponiveis = Object.keys(categoriasMapeadas);

  const openSugestions = () => {
    setCloseBar((prev) => !prev);
  };

  useEffect(() => {
    const termo = categoriasPesquisadas.toLowerCase().trim();

    if (!termo) {
      setSugestions([]);
      setCloseBar(false);
      return;
    }

    const filtradas = categoriasDisponiveis.filter((categoira) =>
      categoira.toLowerCase().includes(termo)
    );
    setSugestions(filtradas);
    setCloseBar(true);
  }, [categoriasPesquisadas]);
  return (
    <div className="flex w-full h-full  justify-between">
      <section className="w-[70%] flex flex-wrap justify-center max-h-[99vh]  min-h-[80vh] border">
        <div className="grid grid-rows-2 grid-cols-5 w-[100%] items-center justify-center gap-2 border border-black p-1 relative">
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            TODOS
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            BEBIDAS
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            LANCHES
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            PIZZAS
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            PROMOÇÃO
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            RESTAURANTE
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            SALGADOS
          </button>
          <button className="w-[100%] h-[60px] hover:bg-slate-500 border border-black rounded-lg hover:bg-">
            SOBREMESAS
          </button>
          <div>
            <div className="relative w-[205%] flex items-center justify-center">
              {" "}
              <input
                className="border border-black w-[100%] pl-6 h-[50px] rounded-xl "
                placeholder="Pesquisar produto"
                type="text"
                value={categoriasPesquisadas}
                onChange={(e) => setCategoriasPesquisadas(e.target.value)}
              />
              <i className="pi pi-search absolute top-4.5 left-0.5"></i>
            </div>
            <div className="absolute border border-black p-1">
              {" "}
              {sugestions.length > 0 &&
                sugestions.map((produ, index) => (
                  <ul className="bg-orange-700">
                    <li className="hover:bg-slate-700" key={index}>
                      {produ}
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
        <div className="max-h-[50vh] w-full overflow-y-auto border border-black">
          {categoriaSelecionada === "" ? (
            <CardsProducts />
          ) : (
            products.filter((produ) =>
              produ.subproducts
                .flatMap((subprodu) => subprodu.name === categoriaSelecionada)
                .map((index, pdot) => {
                  return <CardsProducts id={index} name={pdot} />;
                })
            )
          )}
        </div>
      </section>
      <section className="w-[30%] border border-black">
        <div className="w-full-">
          <table className=" text-left w-full border-collapse">
            <thead className="">
              <tr className="bg-[#DAE8EF]">
                <th className="p-2 ">Produtos</th>
                <th className="p-2">Qtd</th>
                <th className="p-2">Unitário</th>
                <th className="p-2">Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Arroz</td>
                <td className="p-2">Arroz</td>
                <td className="p-2">Arroz</td>
                <td className="p-2">Arroz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Body;
