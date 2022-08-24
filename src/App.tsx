import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header/Header";
import { Produtos } from "./Components/Produtos/Produtos";
import { Footer } from "./Components/Footer/Footer";
import { Main, Container } from "./styles/styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <Produtos />
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export default App;
