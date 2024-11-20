import React from "react";
import DirectionImg from "../../../asset/Direction.png";
import * as S from "./style";
import useGetBrWidth from "../../../hooks/useGetBrWidth";

interface IButtonProps {
  context: string;
  onClick: () => void;
}

const Button = ({ context, onClick, ...props }: IButtonProps) => {
  const { checkWidth } = useGetBrWidth();
  return (
    <>
      <S.Button onClick={onClick} {...props} isMoblie={checkWidth()}>
        <S.Context isMoblie={checkWidth()}>{context}</S.Context>
        <S.Direction src={DirectionImg} alt="" isMoblie={checkWidth()} />
      </S.Button>
    </>
  );
};

export default Button;
