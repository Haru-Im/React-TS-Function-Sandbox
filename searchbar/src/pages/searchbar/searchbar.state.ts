import { atom } from "recoil";

export const $searchInput = atom<string>({
  key: "searchInput",
  default: "",
});
