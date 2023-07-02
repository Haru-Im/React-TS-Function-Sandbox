import { FC } from "react";
import { SearchLayout } from "../layout";
import {
  HeaderView,
  AutoCompleteListView,
  TitleView,
  TotalSearchListView,
  SearchBarView,
} from "../views";
import { useSearchCategory, useSearchData, useSearchInput } from "./hooks";

type ISearchContainerProps = {};

export const SearchContainer: FC<ISearchContainerProps> = () => {
  const { searchResult, isSearched, handleSubmit } = useSearchData();

  const { debouncedSetSearchInput } = useSearchInput();
  const { changeCategory } = useSearchCategory();

  return (
    <SearchLayout>
      <HeaderView onChangeCategory={changeCategory} />
      <TitleView />
      <SearchBarView
        handleSubmit={handleSubmit}
        onInputValueChange={debouncedSetSearchInput}
      />
      {isSearched ? (
        <TotalSearchListView searchResult={searchResult} />
      ) : (
        <AutoCompleteListView searchResult={searchResult} />
      )}
    </SearchLayout>
  );
};
