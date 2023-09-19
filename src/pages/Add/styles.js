import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > button {
    width: 65%;
    margin: 4rem auto 2.4rem;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const Content = styled.div`
  width: 65%;
  max-height: 75vh;
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  overflow-y: auto;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  > .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }

  > textarea {
    width: 100%;
    height: 22rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    border: none;
    resize: none;
    border-radius: 1rem;
    padding: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  }

  &::-webkit-scrollbar {
    background-color: none;
    width: .6rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Section = styled.section`
  width: 100%;

  > h3 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 1.6rem;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.4rem;
  flex-wrap: wrap;
`;