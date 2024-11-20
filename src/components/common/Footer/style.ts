import styled from "styled-components";

export const Footer = styled.footer<{ isMoblie: boolean }>`
  background-color: ${({ theme }) => theme.personal30};
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isMoblie }) => isMoblie && `flex-direction : column;`}
`;

export const Context = styled.p<{ isMoblie: boolean }>`
  color: ${({ theme }) => theme.white10};
  font-size: ${({ isMoblie }) => (isMoblie ? "0.5rem" : "0.75rem")};
  letter-spacing: 0.25rem;
  font-family: "Bold";
  margin-bottom: 0.5rem;
`;

export const Logo = styled.img<{ isMoblie: boolean }>`
  height: ${({ isMoblie }) => (isMoblie ? "2rem" : "4rem")};
  ${({ isMoblie }) =>
    isMoblie ? `margin-bottom:2rem;` : `margin-right: 4rem;`}

  cursor: pointer;
`;

export const GitHub = styled.img<{ isMoblie: boolean }>`
  ${({ isMoblie }) => (isMoblie ? "margin-top:1rem;" : "margin-left: 2rem;")}
  width: ${({ isMoblie }) => (isMoblie ? "2rem" : "4rem")};
`;
