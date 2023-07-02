import { FC } from "react";
import { SearchLayout } from "../layout";
import {
  HeaderView,
  AutoCompleteListView,
  TitleView,
  TotalSearchListView,
} from "../views";
import { useSearchData } from "./hooks";
import { SearchBarComponent } from "../components";
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
      <SearchBarComponent
        handleSubmit={handleSubmit}
        onChangeInputValue={handleInputValueChange}
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
