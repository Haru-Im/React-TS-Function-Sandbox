import { FC } from "react";
import { InfinityScrollLayout } from "./layout";
import { InfinityScrollContainer } from "./container";

type IInfinityScrollPageProps = {};

export const InfinityScrollPage: FC<IInfinityScrollPageProps> = ({}) => {
  return (
    <InfinityScrollLayout>
      <InfinityScrollContainer />
    </InfinityScrollLayout>
  );
};
