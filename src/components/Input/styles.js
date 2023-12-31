import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 1rem;
  padding: 1.9rem 1.6rem;

  > input {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-right: 1rem;
  }
`;