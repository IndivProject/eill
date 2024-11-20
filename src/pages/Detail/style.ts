import styled, { keyframes } from "styled-components";

const SpinAnime = keyframes`
    100%{transform:rotate(360deg);}
`;

export const SongWrap = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
  margin: 0 auto;
`;

export const SongImg = styled.img<{ isPlay: boolean }>`
  border-radius: 200px;
  width: 350px;
  height: 350px;
  z-index: 1;

  transform-origin: 50% 50%;
  animation: ${SpinAnime} 10s linear infinite;
  ${({ isPlay }) => !isPlay && `animation-play-state: paused;`}
  border: 1px solid ${({ theme }) => theme.personal10};

  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
`;

export const AlbumWrap = styled.div`
  width: 400px;
  height: 400px;
  box-sizing: boerder-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const AlbumBackground = styled.img`
  position: absolute;
  width: 400px;
  height: 400px;
  filter: blur(4px);
  z-index: 0;
`;

export const AlbumCover = styled.img`
  position: absolute;
  z-index: 3;
  width: 420px;
  height: 420px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%);
  border: 1px solid ${({ theme }) => theme.personal30};
`;

export const AlbumCenter = styled.div`
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  background-color: ${({ theme }) => theme.white30};
  border: 2px solid ${({ theme }) => theme.personal10};
`;

export const AlbumButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const TitleWrap = styled.div`
  width: 400px;
`;

export const Title = styled.p`
  font-size: 3rem;
  font-family: "Bold";
`;

export const SubTitle = styled.p`
  font-size: 1.75rem;
  font-family: "Bold";
  margin-top: 3rem;
`;

export const Lyrics = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.white30};
`;

export const YoutubeBox = styled.div`
  position: fixed;
  background-color: gray;
`;

export const YoutubeBoxWrap = styled.div`
  position: relative;
  width: 30%;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.personal};
`;

export const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.white10};
  min-height: 100vh;
  box-sizing: border-box;
  padding: 10rem 0;
`;

export const AlbumSongName = styled.div`
  font-size: 1rem;
  font-family: "Bold";
`;

export const AlbumSongWrap = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem 0rem;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  border-radius: 4px;
  cursor : pointer;
  background-color :${({ isActive, theme }) => isActive && theme.white20};

  &:hover{
    background-color :${({ theme }) => theme.white20};
  `;

export const AlbumActiveState = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.personal};
`;
