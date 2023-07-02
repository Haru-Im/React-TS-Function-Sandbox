import { FC } from "react";
import { SearchLayout } from "../layout";
import {
  HeaderView,
  AutoCompleteListView,
  TitleView,
  TotalSearchListView,
  SearchBarView,
} from "../views";
import { useSearchData } from "./hooks";
import { useSearchInput } from "./hooks/search-input";
type ISearchContainerProps = {};

export const SearchContainer: FC<ISearchContainerProps> = () => {
  const { searchResult, handleCategoryChange, isSearched, handleSubmit } =
    useSearchData();

  const { debouncedSetSearchInput } = useSearchInput();

  return (
    <SearchLayout>
      <HeaderView onChangeCategory={handleCategoryChange} />
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
