import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
  font-size: ${({ $inpreview }) => $inpreview ? "1.2rem" : "2rem"};
  color: ${({ theme }) => theme.COLORS.PINK};
`;