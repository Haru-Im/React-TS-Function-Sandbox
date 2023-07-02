import { FC } from "react";
import { Title, TitleText } from "./title.style";
type ITitleViewProps = {};

export const TitleView: FC<ITitleViewProps> = () => {
  return (
    <Title>
      <TitleText>Haru's Search Bar</TitleText>
    </Title>
  );
};
