import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    padding: 6rem 16.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

  > div {
    margin-bottom: .8rem;
  }

  > div:nth-child(2) {
    margin-top: 5.4rem;
  }

  > div:nth-child(4), button {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -8rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    bottom: 0px;
    right: .7rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;