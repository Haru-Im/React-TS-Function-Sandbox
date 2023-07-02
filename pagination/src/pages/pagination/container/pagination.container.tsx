import { FC, Suspense, useEffect } from "react";
import { ImageListView, PaginationView } from "../views";

type IPaginationContainerProps = {};

export const PaginationContainer: FC<IPaginationContainerProps> = ({}) => {
  return (
    <div>
      <ImageListView />
      <PaginationView />
    </div>
  );
};
