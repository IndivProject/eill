import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.personal30};
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.white10};
  font-size: 0.75rem;
  letter-spacing: 0.25rem;
  font-family: "Bold";
  margin-bottom: 0.5rem;
`;

export const Logo = styled.img`
  height: 4rem;
  margin-right: 4rem;
  cursor: pointer;
`;
