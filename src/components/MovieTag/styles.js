import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .8rem;
  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_100 : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
  border-radius: 1rem;

  > input {
    width: 100%;
    padding: .8rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: none;
    background: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;