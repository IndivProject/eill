import styled, { keyframes } from "styled-components";

const SpinAnime = keyframes`
    100%{transform:rotate(360deg);}
`;

export const SongWrap = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SongImg = styled.img<{ isPlay: boolean; isMoblie: boolean }>`
  border-radius: 200px;
  width: ${({ isMoblie }) => (isMoblie ? "160px" : "350px")};
  height: ${({ isMoblie }) => (isMoblie ? "160px" : "350px")};
  z-index: 1;

  transform-origin: 50% 50%;
  animation: ${SpinAnime} 10s linear infinite;
  ${({ isPlay }) => !isPlay && `animation-play-state: paused;`}
  border: 1px solid ${({ theme }) => theme.personal10};

  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
`;

export const AlbumWrap = styled.div<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "180px" : "400px")};
  height: ${({ isMoblie }) => (isMoblie ? "180px" : "400px")};
  box-sizing: boerder-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const AlbumBackground = styled.img<{ isMoblie: boolean }>`
  position: absolute;
  width: ${({ isMoblie }) => (isMoblie ? "180px" : "400px")};
  height: ${({ isMoblie }) => (isMoblie ? "180px" : "400px")};
  filter: blur(4px);
  z-index: 0;
`;

export const AlbumCover = styled.img<{ isMoblie: boolean }>`
  position: absolute;
  z-index: 3;
  width: ${({ isMoblie }) => (isMoblie ? "200px" : "420px")};
  height: ${({ isMoblie }) => (isMoblie ? "200px" : "420px")};
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%);
  border: 1px solid ${({ theme }) => theme.personal30};
`;

export const AlbumCenter = styled.div<{ isMoblie: boolean }>`
  position: absolute;
  z-index: 2;
  width: ${({ isMoblie }) => (isMoblie ? "20px" : "50px")};
  height: ${({ isMoblie }) => (isMoblie ? "20px" : "50px")};
  border-radius: 50px;

  background-color: ${({ theme }) => theme.white30};
  border: 2px solid ${({ theme }) => theme.personal10};
`;

export const AlbumButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const TitleWrap = styled.div<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "100%" : "400px")};
  ${({ isMoblie }) => isMoblie && `margin-left: 2rem; max-height: 80vh;`};
`;

export const Title = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1.25rem" : "3rem")};
  font-family: "Bold";
`;

export const SubTitle = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "1.75rem")};
  font-family: "Bold";
  margin-top: ${({ isMoblie }) => (isMoblie ? "1.5rem" : "3rem")};
`;

export const Lyrics = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1rem")};
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.white30};
`;

export const LyricsWrap = styled.div<{ isMoblie: boolean }>`
  ${({ isMoblie }) =>
    isMoblie &&
    `max-height: 80%;
  margin-top :1rem;
  `};
  overflow: auto;
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

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  background-color: ${({ theme }) => theme.white10};

  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ isMoblie }) => (isMoblie ? "3rem 0" : "10rem 0")};
`;

export const AlbumSongName = styled.div<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1rem")};
  font-family: "Bold";
`;

export const AlbumListWrap = styled.div<{ isMoblie: boolean }>`
  ${({ isMoblie }) => isMoblie && `max-height: 40%; margin-top: 1rem;`}
  overflow: auto;
`;

export const AlbumSongWrap = styled.div<{
  isActive: boolean;
  isMoblie: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${({ isMoblie }) => (isMoblie ? "0.5rem 0rem" : "2rem 0rem")};
  padding: ${({ isMoblie }) => (isMoblie ? "0.5rem 0.25rem" : "1rem 0.5rem")};
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

export const MoblieYoutubeBox = styled.div`
  width: 180px;
  height: 120px;
  background-color: gray;
  margin: 1rem auto;
`;
