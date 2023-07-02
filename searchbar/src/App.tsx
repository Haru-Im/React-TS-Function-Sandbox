import { Reset } from "styled-reset";
import "./App.css";
import { SearchContainer } from "./pages/searchbar/container";
import { RecoilProvider } from "./provider/recoil";

export const App: React.FC = () => {
  return (
    <RecoilProvider>
      <Reset />
      <SearchContainer />
    </RecoilProvider>
  );
};
