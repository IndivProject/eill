import styled from "styled-components";

export const Button = styled.button<{ isMoblie: boolean }>`
  box-shadow: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.white30};

  padding: ${({ isMoblie }) => (isMoblie ? "1rem 0.5rem" : "1.75rem 1rem")};
  border-radius: ${({ isMoblie }) => (isMoblie ? "0.5rem" : "0.75rem")};

  height: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.white40};
  }
`;

export const Context = styled.p<{ isMoblie: boolean }>`
  color: ${({ theme }) => theme.white10};
  font-size: ${({ isMoblie }) => (isMoblie ? "0.5rem" : "1rem")};
  margin-right: 1rem;
`;

export const Direction = styled.img<{ isMoblie: boolean }>`
  transform: rotate(-90deg);
  height: ${({ isMoblie }) => (isMoblie ? "0.5rem" : "1rem")};
`;
