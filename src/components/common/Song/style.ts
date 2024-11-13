import styled from "styled-components";

export const MainWrap = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  width: 30%;
  border-radius: 0.5rem;
`;

export const ImageWrap = styled.div`
  border-radius: 0.5rem;
  width: 12rem;
  height: 12rem;
  overflow: hidden;
  position: relative;

  cursor: pointer;
`;

export const Image = styled.img`
  background-color: ${({ theme }) => theme.personal};
  width: 12rem;
  height: 12rem;
`;

export const ImageFilter = styled.div<{ isHover: boolean }>`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 12rem;
  height: 12rem;

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

export const ContextWrap = styled.div`
  width: 50%;
`;

export const Context = styled.p<{ isHover?: boolean }>`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  ${({ theme }) => theme.personal10};

  &:nth-child(1) {
    cursor: pointer;
    ${({ isHover }) => isHover && `text-decoration: underline;`}
    font-family: "Medium";
    font-size: 1.5rem;
  }
`;
