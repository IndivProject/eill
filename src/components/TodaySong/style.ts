import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 10rem auto;
  width: 60%;
`;

export const Title = styled.p`
  font-size: 2rem;
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
  width: 12rem;
  height: 12rem;

  margin-right: 2rem;
`;

export const SongTitle = styled.p`
  font-size: 2.5rem;
  font-family: "Bold";
  margin-bottom: 0.5rem;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Context = styled.p`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  ${({ theme }) => theme.personal10};

  &:nth-child(2) {
    font-family: "Medium";
    font-size: 1.25rem;
  }
`;

export const SongInfoWrap = styled.div`
  display: flex;
`;
