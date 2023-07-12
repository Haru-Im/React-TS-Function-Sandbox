import { InfinityScrollPage } from "./pages";
import { ReactQueryProvider } from "./provider";

import { FC } from "react";
type IAppProps = {};

export const App: FC<IAppProps> = ({}) => {
  return (
    <ReactQueryProvider>
      <InfinityScrollPage />
    </ReactQueryProvider>
  );
};
