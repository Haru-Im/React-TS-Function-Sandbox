import { FC } from "react";
import { BasicSelect } from "../../components";
import { ESearchCategories } from "../../../../types";
type IHeaderViewProps = {
  onChangeCategory: (category: ESearchCategories) => void;
};

export const HeaderView: FC<IHeaderViewProps> = ({ onChangeCategory }) => {
  return (
    <div style={{ width: 200, height: 100 }}>
      <BasicSelect onChangeCategory={onChangeCategory} />
    </div>
  );
};
