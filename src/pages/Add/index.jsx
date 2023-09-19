import { Container, Content, Section, Tags } from "./styles";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { MovieTag } from '../../components/MovieTag';
import { Input } from '../../components/Input';
import { FiArrowLeft, FiPlus } from "react-icons/fi";

export function Add() {
  return(
    <Container>
      <Header/>
      <ButtonText title="Voltar" icon={FiArrowLeft}/>
      <Content>
        <h2>Novo filme</h2>
        <div className="wrapper">
          <Input 
            placeholder="Título"
            type="text"
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)"
            type="number"
          />
        </div>

        <textarea placeholder="Observações"></textarea>

        <Section>
          <h3>Marcadores</h3>
          <Tags>
            <MovieTag value="React"/>
            <MovieTag placeholder="Novo marcador" isNew/>
          </Tags>
        </Section>

        <div className="wrapper">
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </Content>
    </Container>
  );
}