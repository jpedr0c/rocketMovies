import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  background: none;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
`;