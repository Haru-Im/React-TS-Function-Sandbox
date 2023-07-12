import { FC, ReactNode } from "react";
type IInfinityScrollLayoutProps = {
  children: ReactNode;
};

export const InfinityScrollLayout: FC<IInfinityScrollLayoutProps> = ({
  children,
}) => {
  return <div className="main">{children}</div>;
};
