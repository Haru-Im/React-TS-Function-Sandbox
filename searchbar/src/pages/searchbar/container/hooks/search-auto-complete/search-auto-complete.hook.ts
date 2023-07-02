import axios from "axios";
import { $searchInput } from "../../../searchbar.state";
import { useRecoilValue } from "recoil";

export const useSearchAutoComplete = () => {
  const amazon = axios.create();

  const searchInput = useRecoilValue($searchInput);

  const autoSuggest = () => {
    return amazon.get(
      `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${searchInput}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`
    );
  };

  console.log(autoSuggest);

  return {};
};
