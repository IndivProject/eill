import styled, { keyframes } from "styled-components";

export const DirectionAnime = keyframes`
    0%{margin-bottom : 2rem;}
    25%{margin-bottom : 2.5rem;}
    50%{margin-bottom : 2rem;}
    75%{margin-bottom : 2.5rem;}
    0%{margin-bottom : 2rem;}
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 100%;
`;

export const ImgBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 120%;
  background-color: rgba(2525, 255, 255, 0.4);
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 5rem;
  font-family: "Bold";
  color: ${({ theme }) => theme.white10};
`;

export const Introduce = styled.p<{ isMoblie: boolean }>`
  font-size: 1rem;
  letter-spacing: 0.75rem;
  color: ${({ theme }) => theme.white10};
  margin-bottom: 1rem;
  ${({ isMoblie }) => isMoblie && `text-align: center;`}
`;

export const Line = styled.div`
  width: 10rem;
  height: 2px;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.white10};
  margin: 2rem;
`;

export const Direction = styled.img`
  width: 3rem;

  position: absolute;
  margin: auto;
  bottom: 0;
  margin-bottom: 2rem;

  animation-duration: 3s;
  animation-name: ${DirectionAnime};
  animation-iteration-count: infinite;
`;
