import { Container, Content } from "./styles";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';
import { FiPlus } from "react-icons/fi";

export function Home() {
  return(
    <Container>
      <Header/>
      <div className="title">
        <h2>Meus filmes</h2>
        <Button title="Adicionar filtro" icon={FiPlus}/>
      </div>
      <Content>
        <Movie title="Interestellar"/>
      </Content>
    </Container>
  );
}