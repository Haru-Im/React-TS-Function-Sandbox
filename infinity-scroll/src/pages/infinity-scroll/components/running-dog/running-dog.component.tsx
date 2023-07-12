import { FC } from "react";
import Lottie from "lottie-react";
import dogAnimation from "./running-dog.json";

type IRunningDogProps = {};

export const RunningDog: FC<IRunningDogProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={dogAnimation}
        style={{ width: 400, height: 400 }}
      />
      <h2>Dogs are coming...</h2>
    </div>
  );
};
