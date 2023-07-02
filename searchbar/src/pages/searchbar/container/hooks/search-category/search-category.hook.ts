import { useSetRecoilState } from "recoil";
import { $searchCategory } from "../../../searchbar.state";
import { ESearchCategories } from "../../../../../types";

export const useSearchCategory = () => {
  const setSearchCategory = useSetRecoilState($searchCategory);

  // category state 저장
  const changeCategory = (category: ESearchCategories) => {
    setSearchCategory(category);
  };

  return { changeCategory };
};
