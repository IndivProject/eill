import styled from "styled-components";

export const Title = styled.p`
  font-size: 2rem;
  font-family: "Bold";

  margin-bottom: 2rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.personal30};
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

export const SongWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
`;

export const SongContainer = styled.div`
  margin: 10rem auto;

  width: 80%;

  &:nth-child(3) {
    margin-top: 20rem;
  }
`;
