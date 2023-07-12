import axios from "axios";

export type IDogsData = {
  imageUrl: string;
  dogName: string;
  id: string;
  height: { metric: string };
  weight: { metric: string };
  lifeSpan: string;
  temperament: string;
}[];

export const InfinityScrollDataFetch = () => {
  const API = axios.create({
    baseURL: "https://api.thedogapi.com/v1/images/search",
    headers: {
      "x-api-key": import.meta.env.VITE_APP_HOTDOG_API_KEY,
    },
  });

  const getHotDogs = async ({ pageParam = 1 }) => {
    const response = await API.get("", {
      params: {
        limit: 10,
        has_breeds: true,
        page: pageParam,
      },
    });

    const dogsData: IDogsData = response.data.map((e: any) => {
      const imageUrl = e.url as string;
      const dogName = e.breeds[0].name as string;
      const id = e.id as string;
      const height = e.breeds[0].height as {
        metric: string;
      };
      const weight = e.breeds[0].weight as {
        metric: string;
      };
      const lifeSpan = e.breeds[0].life_span as string;
      const temperament = e.breeds[0].temperament as string;

      return { imageUrl, dogName, id, height, weight, lifeSpan, temperament };
    });

    return { dogsData };
  };

  return { getHotDogs };
};
