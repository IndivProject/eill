import styled from "styled-components";

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  width: ${({ isMoblie }) => (isMoblie ? "100%" : "30%")};
  border-radius: 0.5rem;
`;

export const ImageWrap = styled.div<{ isMoblie: boolean }>`
  border-radius: 0.5rem;
  width: ${({ isMoblie }) => (isMoblie ? "4rem" : "12rem")};
  height: ${({ isMoblie }) => (isMoblie ? "4rem" : "12rem")};
  overflow: hidden;
  position: relative;

  cursor: pointer;
  ${({ isMoblie }) => isMoblie && `text-align: center;`}
`;

export const Image = styled.img`
  background-color: ${({ theme }) => theme.personal};
  width: 100%;
  height: 100%;
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

export const DetailContext = styled.p`
  font-size: 1rem;
  font-family: "Bold";

  color: ${({ theme }) => theme.white10};
`;

export const ContextWrap = styled.div<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "60%" : "50%")};
`;

export const Context = styled.p<{ isHover?: boolean; isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1rem")};
  margin-bottom: 0.25rem;
  ${({ theme }) => theme.personal10};

  &:nth-child(1) {
    cursor: pointer;
    ${({ isHover }) => isHover && `text-decoration: underline;`}
    font-family: "Medium";
    font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "1.5rem")};
  }
`;
