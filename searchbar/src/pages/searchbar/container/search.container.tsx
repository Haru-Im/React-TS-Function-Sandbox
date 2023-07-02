import { FC, Suspense } from "react";
import { SearchLayout } from "../layout";
import {
  HeaderView,
  AutoCompleteListView,
  TitleView,
  TotalSearchListView,
  SearchBarView,
} from "../views";
import { useSearchCategory, useSearchData, useSearchInput } from "./hooks";
import { useRecoilValue } from "recoil";
import {
  $autoCompleteWords,
  $isSearched,
  $searchInput,
} from "../searchbar.state";

type ISearchContainerProps = {};

export const SearchContainer: FC<ISearchContainerProps> = () => {
  const { searchResult, handleSubmit } = useSearchData();
  const { debouncedSetSearchInput } = useSearchInput();
  const { changeCategory } = useSearchCategory();
  const isSearched = useRecoilValue($isSearched);
  const searchInput = useRecoilValue($searchInput);

  return (
    <SearchLayout>
      <HeaderView onChangeCategory={changeCategory} />
      <TitleView />
      <Suspense fallback={<div>🍥</div>}>
        <SearchBarView
          handleSubmit={handleSubmit}
          onInputValueChange={debouncedSetSearchInput}
        />
      </Suspense>
      {searchInput.length > 0 && (
        <AutoCompleteListView searchResult={searchResult} />
      )}
      {isSearched && <TotalSearchListView searchResult={searchResult} />}
    </SearchLayout>
  );
};
