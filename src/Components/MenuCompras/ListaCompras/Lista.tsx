import { Fechar, ListaItens } from "./styled";
import { Button } from "../../Button/Button";
import fechar from "../../../assets/imgs/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { Total } from "../styled";
import { decrementItem, incrementItem, removeFromCart } from "../../../redux/action";
import { IList } from "../../../@types/IList";
import { IState } from "../../../@types/IState";

export const ListaCompras = () => {
  const products = useSelector((state: IState) => state.cartData);
  const dispatch = useDispatch();
  let total = 0

  const handleClick = (product: object) => dispatch(removeFromCart(product));
 
  const decrement = (product:object) =>  dispatch(decrementItem(product));
  
  const increment = (product:object) =>  dispatch(incrementItem(product));
  
  return (
    <>
    
      <ListaItens size={products.length}>
        {products.map((product: IList) => {
          {total+= parseInt(product.price) * product.count}
            
              return (
                <li key={product.id}>
                  <img src={product.photo} alt={product.title} />
                  <p>{product.title}</p>
                  <section>
                    <p>Qtd:</p>
                    <div>
                      <button onClick={()=>decrement(product)}>-</button>
                      <p>{product.count}</p>
                      <button onClick={()=>increment(product)}>+</button>
                    </div>
                  </section>
                  <p>R${parseInt(product.price)}</p>
                  <Fechar>
                    <Button icone={fechar} onClick={() => handleClick(product)}/>
                  </Fechar>
                </li>
              );
        })}
      </ListaItens>
      <Total>
        <p>Total:</p>
        <p>R${total}</p>
      </Total>
    </>
  );
};
