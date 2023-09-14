import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 1rem;
  padding: 1.9rem 2.4rem;

  > input {
    width: 100%;
    border-radius: 1rem;
    border: none;
    margin-left: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;