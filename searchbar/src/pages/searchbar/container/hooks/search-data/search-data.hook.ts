import axios from "axios";
import { toLower } from "lodash";
import { KeyboardEvent, useEffect, useState } from "react";
import { ISearchResult } from "../../../../../types";
import { useRecoilValue } from "recoil";
import { $searchCategory, $searchInput } from "../../../searchbar.state";

export const useSearchData = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const searchInput = useRecoilValue($searchInput);
  const searchCategory = useRecoilValue($searchCategory);

  // axios 인스턴스 생성
  const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com/v2/search/",
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_API_KEY}`,
    },
  });

  // 카테고리에 따른 엔드포인트 & 쿼리 파라미터
  const searchURL = `${toLower(
    searchCategory
  )}?sort=accuracy&page=1&size=10&query=${searchInput}`;

  // 검색어 전달해서 get 요청으로 데이터 받아오는 함수
  const search = async () => {
    await Kakao.get(searchURL, {
      // params : {
      //   query : searchInput,
      //   page : 1,
      //   size: 10,
      // }
    }).then((res) => {
      const documents = res.data.documents;

      const typedDocuments: ISearchResult[] = documents.map((document: any) => {
        return {
          ...document,
          resultType: searchCategory,
        };
      });

      setSearchResult(typedDocuments);
    });
  };

  // 검색 완료했을 때 (submit)
  const handleSubmit = (e: KeyboardEvent) => {
    e.preventDefault();
    setIsSearched(true);
  };

  // category, input 바뀔 때마다 결과 다르게 해줌
  useEffect(() => {
    console.log(searchInput);
    if (searchInput.length === 0) return;
    search();
  }, [searchCategory, searchInput]);

  return {
    searchResult,
    isSearched,
    handleSubmit,
  };
};
