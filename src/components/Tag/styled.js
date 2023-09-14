import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE_300};
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;