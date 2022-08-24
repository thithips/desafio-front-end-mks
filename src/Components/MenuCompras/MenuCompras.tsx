import { Container, FinalizarCompra, Total } from "./styled";
import fechar from "../../assets/imgs/x.svg";
import { ListaCompras } from "./ListaCompras/Lista";
import { Button } from "../Button/Button";

interface ImenuCompras {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MenuCompras = ({ open, close }: ImenuCompras) => {
  const handleClick = () => close(false);

  return (
    <Container menuOpen={open ? true : false}>
      <article>
        <h1>
          Carrinho de <br />
          compras
        </h1>
        <Button icone={fechar} onClick={handleClick} />
      </article>
      <ListaCompras />

      <FinalizarCompra>
        <p>Finalizar Compra</p>
      </FinalizarCompra>
    </Container>
  );
};
