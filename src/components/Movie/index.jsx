import { Stars } from "../Stars";
import { Tags } from "../Tags";
import { Container } from "./styles";

export function Movie({ title }) {
  return(
    <Container>
      <header>
        <h3>{title}</h3>
        <Stars grade="4"/>
      </header>
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar ...
      </p>
      <Tags titles={["Ficção Científica", "Drama", "Família"]}/>
    </Container>
  );
}