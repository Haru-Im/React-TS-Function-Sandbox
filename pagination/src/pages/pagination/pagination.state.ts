import { atom, selector } from "recoil";

export const $pageIndex = atom<number>({
  key: "pageIndex",
  default: 0,
});

export const $fetchData = selector<
  {
    id: string;
    url: string;
    width: number;
    height: number;
  }[]
>({
  key: "fetchData",
  get: async ({ get }) => {
    const currentPage = get($pageIndex);
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=8&page=${currentPage}&order=ASC&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    console.log(123, data);

    return data;
  },
});
