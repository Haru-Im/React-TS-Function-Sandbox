import { FC } from "react";
import { ESearchCategories, ISearchResult } from "../../../../types";
import "./auto-complete-list.css";
import { useRecoilValue } from "recoil";
import { $searchInput } from "../../searchbar.state";

type ISearchListViewProps = {
  searchResult: ISearchResult[];
};

export const AutoCompleteListView: FC<ISearchListViewProps> = ({
  searchResult,
}) => {
  const searchInput = useRecoilValue($searchInput);
  const isInputEmpty = searchInput.trim().length === 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isInputEmpty &&
        searchResult.slice(0, 3).map((result, index) => {
          const resultType = result.resultType;
          if (resultType === ESearchCategories.WEB) {
            const { title } = result;

            return (
              <div className="searchCard" key={index}>
                title : {title.replace(/<\/?[^>]+(>|$)/g, "")}
              </div>
            );
          }

          if (resultType === ESearchCategories.VCLIP) {
            const { title } = result;

            return (
              <div className="searchCard" key={index}>
                title : {title.replace(/<\/?[^>]+(>|$)/g, "")}
              </div>
            );
          }

          if (resultType === ESearchCategories.IMAGE) {
            const { thumbnail_url } = result;

            return (
              <div className="searchCard" key={index}>
                <img
                  src={thumbnail_url}
                  style={{ width: 40, aspectRatio: 1 }}
                />
              </div>
            );
          }

          if (resultType === ESearchCategories.BLOG) {
            const { title } = result;

            return (
              <div className="searchCard" key={index}>
                title: {title.replace(/<\/?[^>]+(>|$)/g, "")}
              </div>
            );
          }

          if (resultType === ESearchCategories.CAFE) {
            const { title } = result;
            return (
              <div className="searchCard" key={index}>
                title: {title.replace(/<\/?[^>]+(>|$)/g, "")}
              </div>
            );
          }
        })}
    </div>
  );
};
