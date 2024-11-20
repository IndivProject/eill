import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 10rem auto;
  width: 60%;
`;

export const Title = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2rem")};
  font-family: "Bold";
`;

export const SongWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.personal};
  width: 100%;
  height: 100%;
`;

export const ImageWrap = styled.div<{ isMoblie: boolean }>`
  border-radius: 0.5rem;
  width: ${({ isMoblie }) => (isMoblie ? "4rem" : "12rem")};
  height: ${({ isMoblie }) => (isMoblie ? "4rem" : "12rem")};
  overflow: hidden;
  position: relative;

  cursor: pointer;
  margin-right: 2rem;
`;

export const ImageFilter = styled.div<{ isHover: boolean }>`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;

  transition: 0.5s;
  margin-top: ${({ isHover }) => (isHover ? "0rem" : "12rem")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SongTitle = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "2.5rem")};
  font-family: "Bold";
  margin-bottom: 0.5rem;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Context = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "0.5rem" : "1rem")};
  margin-bottom: 0.25rem;
  ${({ theme }) => theme.personal10};

  &:nth-child(2) {
    font-family: "Medium";
    font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1.25rem")};
  }
`;

export const SongInfoWrap = styled.div`
  display: flex;
`;

export const DetailContext = styled.p`
  font-size: 1rem;
  font-family: "Bold";

  color: ${({ theme }) => theme.white10};
`;
