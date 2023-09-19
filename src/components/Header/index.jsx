import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { FiSearch } from "react-icons/fi";


export function Header() {
  return(
    <Container>
      <a href="/"><h1>RocketMovies</h1></a>
      <Input
        type="text" 
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
      />
      <Profile to='/profile'>
        <div>
          <strong>João Pedro Cardoso</strong>
          <a href="">sair</a>
        </div>

        <img src="https://github.com/jpedr0c.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}