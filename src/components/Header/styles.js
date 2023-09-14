import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 105px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-right: .9rem;
    line-height: 1.8rem;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-weight: 700;
      cursor: pointer;
    }

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;