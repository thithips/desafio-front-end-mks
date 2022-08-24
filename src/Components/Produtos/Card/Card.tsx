import { Button } from "../../Button/Button";
import { CardContainer } from "./styled";
import sacola from "../../../assets/imgs/sacola.svg";
import { ICard } from "../../../@types/ICard";
import { addToCart } from "../../../redux/action";
import { useDispatch } from "react-redux";

export const Card = ({id,photo,title,description,price}:ICard) => {
    const dispatch = useDispatch();
    
    const product = {
        id: id,
        title: title,
        photo: photo,
        price: price,
        count: 1
    }
    return (

        <CardContainer>
            <img src={photo} alt="photo" />
            <p>{title}</p>
            <p>R${parseInt(price)}</p>
            <p>{description}</p>

            <Button
            onClick={()=> dispatch(addToCart(product))}
            icone={sacola}
            texto={"comprar"}
            />
        </CardContainer>
    )
}
