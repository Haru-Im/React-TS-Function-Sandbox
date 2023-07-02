import { atom, selector } from "recoil";
import { ESearchCategories } from "../../types";
import axios from "axios";

export const $searchInput = atom<string>({
  key: "searchInput",
  default: "",
});

export const $searchCategory = atom<ESearchCategories>({
  key: "searchCategory",
  default: ESearchCategories.WEB,
});

export const $isSearched = atom<boolean>({
  key: "isSearched",
  default: false,
});

export const $autoCompleteWords = selector({
  key: "autoCompleteWords",
  get: async ({ get }) => {
    const searchInput = get($searchInput);
    const response = await axios(
      `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${searchInput}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`
    );

    const responseWordSuggestions = await response.data.suggestions;

    const autoCompleteWords = responseWordSuggestions.map((suggestion: any) => {
      return suggestion.value;
    });

    return autoCompleteWords;
  },
});
