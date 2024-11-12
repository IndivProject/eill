import React from "react";
import DirectionImg from "../../../asset/Direction.png";
import * as S from "./style";

interface IButtonProps {
  context: string;
  onClick: () => void;
}

const Button = ({ context, onClick, ...props }: IButtonProps) => {
  return (
    <>
      <S.Button onClick={onClick} {...props}>
        <S.Context>{context}</S.Context>
        <S.Direction src={DirectionImg} alt="" />
      </S.Button>
    </>
  );
};

export default Button;
