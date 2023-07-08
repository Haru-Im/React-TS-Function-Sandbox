import "./App.css";
import { RecoilProvider } from "./provider/recoil";

import { FC } from "react";
type IAppProps = {};

export const App: FC<IAppProps> = ({}) => {
  return (
    <RecoilProvider>
      <></>
    </RecoilProvider>
  );
};
