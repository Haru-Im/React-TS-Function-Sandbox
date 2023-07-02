import { atom } from "recoil";
import { ESearchCategories } from "../../types";

export const $searchInput = atom<string>({
  key: "searchInput",
  default: "",
});

export const $searchCategory = atom<ESearchCategories>({
  key: "searchCategory",
  default: ESearchCategories.WEB,
});
