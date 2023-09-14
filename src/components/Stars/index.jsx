import { Container } from "./styles";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export function Stars({ grade }) {
  const filledStars = Math.floor(grade);
  const hasHalfStar = grade % 1 >= 0.5;

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        if (index < filledStars)
          return <BsStarFill key={index} />;
        if (index === filledStars && hasHalfStar)
          return <BsStarHalf key={index} />;
        else
          return <BsStar key={index} />;
      })}
    </Container>
  );
}