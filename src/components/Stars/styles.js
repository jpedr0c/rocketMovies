import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`;