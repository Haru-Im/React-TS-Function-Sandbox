import { Reset } from "styled-reset";
import "./App.css";
import { SearchContainer } from "./pages/searchbar/container";

export const App: React.FC = () => {
  return (
    <>
      <Reset />
      <SearchContainer />
    </>
  );
};
