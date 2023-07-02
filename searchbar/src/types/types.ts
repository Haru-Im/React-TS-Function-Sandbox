import { Merge } from "type-fest";

export enum ESearchCategories {
  "WEB" = "WEB",
  "VCLIP" = "VCLIP",
  "IMAGE" = "IMAGE",
  "BLOG" = "BLOG",
  "CAFE" = "CAFE",
}

export type ISearchResult = Merge<
  {
    datetime: string;
    resultType: ESearchCategories;
  },
  | {
      resultType: ESearchCategories.WEB;
      title: string;
      contents: string;
      url: string;
    }
  | {
      resultType: ESearchCategories.VCLIP;
      title: string;
      url: string;
      play_time: string;
      thumbnail: string;
      author: string;
    }
  | {
      resultType: ESearchCategories.IMAGE;
      collection: string;
      thumbnail_url: string;
      image_url: string;
      width: number;
      height: number;
      display_sitename: string;
      doc_url: string;
    }
  | {
      resultType: ESearchCategories.BLOG;
      title: string;
      contents: string;
      url: string;
      blogname: string;
      thumbnail: string;
    }
  | {
      resultType: ESearchCategories.CAFE;
      title: string;
      contents: string;
      url: string;
      cafename: string;
      thumbnail: string;
    }
>;

// export type ISearchResultWeb = {
//   title: string;
//   contents: string;
//   url: string;
//   datetime: string;
// };

// export type ISearchResultVideo = {
//   title: string;
//   url: string;
//   datetime: string;
//   play_time: string;
//   thumbnail: string;
//   author: string;
// };

// export type ISearchResultImage = {
//   collection: string;
//   thumbnail_url: string;
//   image_url: string;
//   width: number;
//   height: number;
//   display_sitename: string;
//   doc_url: string;
//   datetime: string;
// };

// export type ISearchResultBlog = {
//   title: string;
//   contents: string;
//   url: string;
//   blogname: string;
//   thumbnail: string;
//   datetime: string;
// };

// export type ISearchResultCafe = {
//   title: string;
//   contents: string;
//   url: string;
//   cafename: string;
//   thumbnail: string;
//   datetime: string;
// };
