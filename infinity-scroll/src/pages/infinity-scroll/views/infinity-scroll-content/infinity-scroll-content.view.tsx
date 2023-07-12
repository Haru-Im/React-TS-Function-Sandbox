import { FC } from "react";
import { CardComponent } from "../../components";

type IInfinityScrollContentViewProps = {
  dogsData: {
    imageUrl: string;
    dogName: string;
    id: string;
    height: { metric: string };
    weight: { metric: string };
    lifeSpan: string;
    temperament: string;
  }[];
};

export const InfinityScrollContentView: FC<IInfinityScrollContentViewProps> = ({
  dogsData,
}) => {
  return (
    <div style={{ paddingTop: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {dogsData.map((dog) => {
          const {
            imageUrl,
            dogName,
            id,
            height,
            weight,
            lifeSpan,
            temperament,
          } = dog;
          return (
            <CardComponent
              key={id}
              imageUrl={imageUrl}
              dogName={dogName}
              id={id}
              height={height}
              weight={weight}
              lifeSpan={lifeSpan}
              temperament={temperament}
            />
          );
        })}
      </div>
    </div>
  );
};
