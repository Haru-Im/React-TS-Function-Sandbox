import { FC, KeyboardEvent } from "react";
import { ESearchCategories, ISearchResult } from "../../../../types";
import "./total-search-list.css";

type ISearchListViewProps = {
  searchResult: ISearchResult[];
  handleInputValueChange: (text: string) => void;
  isInputEmpty: boolean;
  handleSubmit: (e: KeyboardEvent) => void;
  searchInput: string;
};

export const TotalSearchListView: FC<ISearchListViewProps> = ({
  searchResult,
  isInputEmpty,
}) => {
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
        searchResult.map((result, index) => {
          const resultType = result.resultType;
          if (resultType === ESearchCategories.WEB) {
            const { title, contents, url, datetime } = result;

            return (
              <div className="searchCard" key={index}>
                title : {title}
                <br />
                <br />
                content : {contents}
                <br />
                <br />
                url : {url}
                <br />
                <br />
                date : {datetime}
              </div>
            );
          }

          if (resultType === ESearchCategories.VCLIP) {
            const { title, url, play_time, thumbnail, author } = result;

            return (
              <div className="searchCard" key={index}>
                title : {title}
                <br />
                <br />
                url: {url}
                <br />
                <br />
                author: {author}
                <br />
                <br />
                playTime: {play_time}
                <br />
                <br />
                thumbnail: {thumbnail}
              </div>
            );
          }

          if (resultType === ESearchCategories.IMAGE) {
            const {
              collection,
              thumbnail_url,
              image_url,
              display_sitename,
              doc_url,
            } = result;

            return (
              <div className="searchCard" key={index}>
                collection : {collection}
                <br />
                <br />
                thumbnailUrl : {thumbnail_url}
                <br />
                <br />
                imageUrl : {image_url}
                <br />
                <br />
                displaySiteName : {display_sitename}
                <br />
                <br />
                docUrl : {doc_url}
              </div>
            );
          }

          if (resultType === ESearchCategories.BLOG) {
            const { thumbnail, title, contents, url, blogname } = result;

            return (
              <div className="searchCard" key={index}>
                thumbnail: {thumbnail}
                <br />
                <br />
                title: {title}
                <br />
                <br />
                contents: {contents}
                <br />
                <br />
                url: {url}
                <br />
                <br />
                blogName: {blogname}
              </div>
            );
          }

          if (resultType === ESearchCategories.CAFE) {
            const { title, thumbnail, contents, url, datetime, cafename } =
              result;
            return (
              <div className="searchCard" key={index}>
                title: {title}
                <br />
                <br />
                thumbnail: {thumbnail}
                <br />
                <br />
                contents: {contents}
                <br />
                <br />
                url: {url}
                <br />
                <br />
                datetime: {datetime}
                <br />
                <br />
                cafename: {cafename}
              </div>
            );
          }
        })}
    </div>
  );
};
