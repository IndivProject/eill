import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 120%;
`;

export const ImgBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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

export const Introduce = styled.p`
  font-size: 1rem;
  letter-spacing: 0.75rem;
  color: ${({ theme }) => theme.white10};
`;

export const Line = styled.div`
  width: 10rem;
  height: 2px;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.white10};
  margin: 2rem;
`;
