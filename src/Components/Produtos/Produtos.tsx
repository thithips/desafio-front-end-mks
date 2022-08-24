import { Iproduto } from "../../@types/IProdutos";
import { useFetch } from "../../service/apiProdutos";
import { Skeleton } from "../Skeleton/Skeleton";
import { Card } from "./Card/Card";
import { ProdutosContainer } from "./styled";

export const Produtos = () => {
  const { data, loading } = useFetch(
    "products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );

  return (
    <ProdutosContainer>
      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        data.products.map((produto: Iproduto) => (
          <div key={produto.id}>
            <Card
              id={produto.id}
              photo={produto.photo}
              title={produto.name}
              description={produto.description}
              price={produto.price}
            />
          </div>
        ))
      )}
    </ProdutosContainer>
  );
};
