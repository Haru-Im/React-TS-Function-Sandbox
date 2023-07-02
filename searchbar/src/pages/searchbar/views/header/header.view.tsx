import { FC } from "react";
import { BasicSelect } from "../../components";
import { ESearchCategories } from "../../../../types";
import { HeaderContainer, IconContainer } from "./header.style";
import { BiMenu } from "react-icons/bi";
type IHeaderViewProps = {
  onChangeCategory: (category: ESearchCategories) => void;
};

export const HeaderView: FC<IHeaderViewProps> = ({ onChangeCategory }) => {
  return (
    <HeaderContainer>
      <BasicSelect onChangeCategory={onChangeCategory} />
      <IconContainer>
        <BiMenu />
      </IconContainer>
    </HeaderContainer>
  );
};
