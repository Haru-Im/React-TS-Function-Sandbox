import { FC, ReactNode } from "react";
type ISearchLayoutProps = { children: ReactNode };

export const SearchLayout: FC<ISearchLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
