import { $fetchData, $pageIndex } from "../../pagination.state";
import { useRecoilState, useRecoilValue } from "recoil";

export const useFetch = () => {
  const fetchedData = useRecoilValue($fetchData);

  const [pageIndex, setPageIndex] = useRecoilState($pageIndex);

  const goPreviousPage = () => {
    setPageIndex((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };

  const goNextPage = () => {
    setPageIndex((prev) => prev + 1);
  };

  return {
    fetchedData,
    goPreviousPage,
    goNextPage,
    pageIndex,
  };
};
