import { Container, Tag } from "./styled";

export function Tags({ titles }){
  return(
    <Container>
      {titles.map(title => <Tag>{title}</Tag>)}
    </Container>
  );
}