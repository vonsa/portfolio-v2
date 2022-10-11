import Slider from "../../Components/Slider/Slider";
import { slides } from "../../config/slides";

const PortfolioPage = () => {
  return (
    <div className="min-h-full relative pt-2 pb-2 flex flex-col justify-center items-center">
      <div className="h-full w-full fixed top-0 left-0"></div>
      <Slider slides={slides} />
    </div>
  );
};

export default PortfolioPage;
