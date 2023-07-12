import { useInfiniteQuery } from "@tanstack/react-query";
import { IDogsData, InfinityScrollDataFetch } from "../../../api";

const defaultReturn: {
  pages: {
    dogsData: IDogsData;
  }[];

  refetchImagesWhenScrollEnds: () => void;
} = {
  pages: [],
  refetchImagesWhenScrollEnds: () => {},
};

export const useInfinityScrollData = () => {
  const { getHotDogs } = InfinityScrollDataFetch();
  const { data, fetchNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery(["hotDogs"], getHotDogs, {
      getNextPageParam: (_, allPages) => allPages.length + 1,
    });

  // 타입 어려웡 & 기능상세명시
  const refetchImagesWhenScrollEnds = () => {
    fetchNextPage();
  };

  if (isLoading || isError) {
    return {
      isLoading,
      ...defaultReturn,
    };
  }

  return {
    isLoading: false,
    pages: data.pages,
    refetchImagesWhenScrollEnds,
    isFetchingNextPage,
  };
};
