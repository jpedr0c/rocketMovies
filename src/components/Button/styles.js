import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  padding: 1.5rem ;
`;