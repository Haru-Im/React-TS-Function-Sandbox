import { memo, useState } from "react";
type ICardComponentProps = {
  imageUrl: string;
  dogName: string;
  id: string;
  height: { metric: string };
  weight: { metric: string };
  lifeSpan: string;
  temperament: string;
};

export const CardComponent = memo<ICardComponentProps>(
  ({ imageUrl, dogName, id, height, weight, lifeSpan, temperament }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
      setIsClicked((prev) => !prev);
    };

    const { metric: metricHeight } = height;
    const { metric: metricWeight } = weight;

    return (
      <div
        key={id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 650,
          height: "auto",
          padding: 50,
          boxSizing: "border-box",
          borderRadius: 15,
          flexDirection: "column",
          backgroundColor: isClicked ? "#D3D3D3" : "#FFF4E6",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onClick={handleClick}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            color: "black",
          }}
        >
          <img
            src={imageUrl}
            alt={`dog-${id}`}
            style={{
              width: 150,
              height: 150,
              aspectRatio: 1,
              borderRadius: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              paddingLeft: 10,
            }}
          >
            {dogName}
          </div>
        </div>
        {isClicked && (
          <div
            style={{
              borderTop: "1px solid gray",
              marginTop: 50,
              paddingTop: 20,
              fontSize: 30,
            }}
          >
            <div style={{ paddingBottom: 10 }}>수명 : {lifeSpan}</div>
            <div style={{ paddingBottom: 10 }}>기질 : {temperament}</div>
            <div style={{ paddingBottom: 10 }}>키 : {metricHeight} cm</div>
            <div>무게 : {metricWeight} kg</div>
          </div>
        )}
      </div>
    );
  }
);
