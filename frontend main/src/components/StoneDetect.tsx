import PredictionCard from "./PredictionCard";
import { useNavigate } from "react-router-dom";

const StoneDetect = () => {
  const navigate = useNavigate();
  const handleDataPrediction = () => {
    navigate("/PredictByData", { replace: true });
  };
  const handleImagePrediction = () => {
    navigate("/PredictByImage", { replace: true });
  };
  return (
    <div className="bg-secondary">
      <div
        id="prediction"
        className="flex flex-col lg:mx-20  mt-10 py-10 lg:py-28 "
      >
        <h2 className="lg:text-3xl text-2xl font-bold  text-center ">
          Detect or predict kidney stone
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-around items-center">
          <PredictionCard
            title={"By Data"}
            description={"Predict kidney stone by entering data"}
            handleClick={handleDataPrediction}
          />
          <PredictionCard
            title={"By image"}
            description={"Predict kidney stone by image"}
            handleClick={handleImagePrediction}
          />
        </div>
      </div>
    </div>
  );
};

export default StoneDetect;
