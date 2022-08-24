import { useState } from "react";
import { Button } from "../Button/Button";
import { HeaderContainer, Logo } from "./styled";
import carrinho from "../../assets/imgs/carrinho.svg";
import { MenuCompras } from "../MenuCompras/MenuCompras";
import { useSelector } from "react-redux";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(true);

  const result = useSelector((state: any) => state.cartData);

  return (
    <>
      <MenuCompras open={menuOpen} close={setMenuOpen} />
      <HeaderContainer>
        <Logo>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </Logo>

        <Button icone={carrinho} texto={result.length} onClick={handleClick} />
      </HeaderContainer>
    </>
  );
};
