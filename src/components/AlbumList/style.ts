import styled from "styled-components";

export const Title = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2rem")};
  font-family: "Bold";

  margin-bottom: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2rem")};
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.personal30};
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

export const SongWrap = styled.div<{ isMoblie: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${({ isMoblie }) => (isMoblie ? "4rem" : "10rem")};
`;

export const SongContainer = styled.div<{ isMoblie: boolean }>`
  margin: ${({ isMoblie }) => (isMoblie ? "5rem" : "20rem")} auto;

  width: ${({ isMoblie }) => (isMoblie ? "60%" : "80%")};
`;
