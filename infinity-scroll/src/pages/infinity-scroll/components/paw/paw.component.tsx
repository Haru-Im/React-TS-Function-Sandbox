import { FC } from "react";
import Lottie from "lottie-react";
import pawAnimation from "./paw.json";

type IPawComponentProps = {};

export const PawComponent: FC<IPawComponentProps> = ({}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Lottie
        animationData={pawAnimation}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};
