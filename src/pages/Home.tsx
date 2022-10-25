import { start } from "@vonsa/koch-curve";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/UI/Button";
import { action } from "../events/action";
import { send } from "../events/eventBus";

const HomePage = () => {
  useEffect(() => {
    start("#fractal-header");
    send(
      action({
        type: "THEME",
        payload: { navbar: "fixed", colors: "dark" },
      })
    );
  }, []);

  return (
    <div id="fractal-header">
      <div className="z-4 absolute top-1/2 left-0 w-full flex justify-center">
        <div className="w-full md:max-w-5xl ml-6 mr-6">
          <h1 className=" text-5xl ">
            Coen <span className="whitespace-nowrap">de Waal</span>
          </h1>
          <h2 className="text-2xl mb-4">Frontend developer</h2>
          <Button>
            <Link to="/portfolio">VIEW PORTFOLIO</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
