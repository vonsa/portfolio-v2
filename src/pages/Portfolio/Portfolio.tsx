import { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import { slides } from "../../config/slides.config";
import { action } from "../../events/action";
import { send } from "../../events/eventBus";

const PortfolioPage = () => {
  useEffect(() => {
    send(
      action({
        type: "THEME",
        payload: { navbar: "fixed", colors: "dark" },
      })
    );
  }, []);

  return (
    <div className="min-h-full relative pt-2 pb-2 flex flex-col justify-center items-center">
      <div className="h-full w-full fixed top-0 left-0"></div>
      <Slider slides={slides} />
    </div>
  );
};

export default PortfolioPage;
