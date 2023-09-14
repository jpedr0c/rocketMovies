import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 65%;
  max-height: 75vh;
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;

  > p {
    text-align: justify;
    font-size: 1.6rem;
    font-weight: 400;
    margin-right: 1.6rem;
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

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2.4rem 0;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  > span {
    margin-right: 1.2rem;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.4rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .8rem;
  margin: 4rem 0;
`;