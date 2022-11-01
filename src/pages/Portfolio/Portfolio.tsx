import Slider from "../../Components/Slider/Slider";
import { ThemedPage } from "../../Components/UI/ThemedPage";
import { slides } from "../../config/slides.config";

const PortfolioPage = () => {
  return (
    <ThemedPage theme="dark">
      <div className="min-h-full relative pt-2 pb-2 flex flex-col justify-center items-center">
        <div className="h-full w-full fixed top-0 left-0"></div>
        <Slider slides={slides} />
      </div>
    </ThemedPage>
  );
};

export default PortfolioPage;
