import styled from "styled-components";

export const Button = styled.button`
  box-shadow: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.personal30};

  padding: 2rem 1rem;
  border-radius: 0.75rem;

  height: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.personal10};
  }
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.white10};
  font-size: 1.25rem;
  margin-right: 1rem;
`;

export const Direction = styled.img`
  transform: rotate(-90deg);
  height: 1rem;
`;
