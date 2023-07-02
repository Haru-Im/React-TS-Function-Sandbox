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
type ISearchContainerProps = {};

export const SearchContainer: FC<ISearchContainerProps> = () => {
  const {
    searchResult,
    handleInputValueChange,
    isInputEmpty,
    handleCategoryChange,
    isSearched,
    handleSubmit,
    searchInput,
  } = useSearchData();

  return (
    <SearchLayout>
      <HeaderView onChangeCategory={handleCategoryChange} />
      <TitleView />
      <SearchBarView
        handleSubmit={handleSubmit}
        handleInputValueChange={handleInputValueChange}
      />
      {isSearched ? (
        <TotalSearchListView
          handleSubmit={handleSubmit}
          searchResult={searchResult}
          handleInputValueChange={handleInputValueChange}
          isInputEmpty={isInputEmpty}
          searchInput={searchInput}
        />
      ) : (
        <AutoCompleteListView
          handleSubmit={handleSubmit}
          searchResult={searchResult}
          handleInputValueChange={handleInputValueChange}
          isInputEmpty={isInputEmpty}
          searchInput={searchInput}
        />
      )}
    </SearchLayout>
  );
};
