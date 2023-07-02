import { FC, ReactNode } from "react";
import { Layout } from "./search.layout.style";
type ISearchLayoutProps = { children: ReactNode };

export const SearchLayout: FC<ISearchLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
