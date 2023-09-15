import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  padding: 1.5rem ;
`;