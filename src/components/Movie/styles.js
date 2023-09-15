import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-height: 22rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};
  border-radius: 1.6rem;

  > header {

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: .8rem;
    }
  }

  > p {
    max-height: 5.2rem;
    overflow: hidden;
    font-size: 1.6rem;
    text-overflow: ellipsis;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;