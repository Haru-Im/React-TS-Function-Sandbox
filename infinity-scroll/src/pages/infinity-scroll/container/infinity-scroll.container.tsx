import { FC, useEffect } from "react";
import { useInfinityScrollData } from "./hooks";
import { InfinityScrollContentView } from "../views";
import { useInView } from "react-intersection-observer";
import { PawComponent, RunningDog } from "../components";

type IInfinityScrollContainerProps = {};

export const InfinityScrollContainer: FC<
  IInfinityScrollContainerProps
> = ({}) => {
  const { isLoading, pages, refetchImagesWhenScrollEnds, isFetchingNextPage } =
    useInfinityScrollData();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      refetchImagesWhenScrollEnds();
    }
  }, [inView]);

  if (isLoading) {
    return <RunningDog />;
  }

  return (
    // pages 배열 내부 요소 하나하나를 map
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
          fontSize: 90,
          fontWeight: "bold",
        }}
      >
        Dog Party
      </div>
      {pages?.map((page, index) => {
        const { dogsData } = page;
        return <InfinityScrollContentView key={index} dogsData={dogsData} />;
      })}
      {isFetchingNextPage ? (
        <PawComponent />
      ) : (
        <div ref={ref} style={{ padding: 20, boxSizing: "border-box" }}></div>
      )}
    </div>
  );
};

// 데이터 형태
// pages: [
//   { dogsData : [
//     {},
//     {},
//     {},
//     ...10개
//   ]
// },
// { dogsData : [
//     {},
//     {},
//     {},...
//   ]
// },
// ]
