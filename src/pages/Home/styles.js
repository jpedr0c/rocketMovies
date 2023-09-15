import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .title {
    width: 65%;
    max-height: 75vh;
    margin: 4rem auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 3.2rem;
      font-weight: 400;
    }

    button {
      max-width: 21rem;
    }
  }
`;

export const Content = styled.div`
  width: 65%;
  max-height: 75vh;
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: none;
    width: .6rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }
`;