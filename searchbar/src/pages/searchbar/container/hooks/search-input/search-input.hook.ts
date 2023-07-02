import { useSetRecoilState } from "recoil";
import { $searchInput } from "../../../searchbar.state";
import { debounce } from "lodash";

export const useSearchInput = () => {
  // recoil로 변환
  // searchDataHook에서 가져옴
  const setSearchInput = useSetRecoilState($searchInput);

  // debounce 처리
  const debouncedSetSearchInput = debounce((text: string) => {
    setSearchInput(text);
  }, 300);

  return { debouncedSetSearchInput };
};
