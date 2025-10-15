import { products } from "./ListProdutcs";
const CardsProducts = ({ id, name, altura, largura, fundo, cor, border }) => {
  const ListaCompleto = products.flatMap(
    (subproduto) => subproduto.subproducts
  );

  return (
    <div className="flex flex-wrap justify-between p-1 gap-2">
      {ListaCompleto.map((prod) => {
        return (
          <div
            key={prod.id}
            className="border border-blue-500 flex h-[200px] w-[15%] rounded-md p-2 flex-col"
          >
            <img src={prod.img} className="w-[100%] h-[50%]" alt="" />
            <p className="text-xs">{prod.name}</p>
            <p>{prod.preco}</p>
            {/* <h2>{prod.descricao}</h2> */}
          </div>
        );
      })}
    </div>
  );
};

export default CardsProducts;
