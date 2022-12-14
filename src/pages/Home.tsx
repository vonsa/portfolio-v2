import { start } from "@vonsa/koch-curve";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import { ThemedPage } from "../features/theming/components/ThemedPage";

const HomePage = () => {
  useEffect(() => {
    start("#fractal-header");
  }, []);

  return (
    <ThemedPage theme="dark">
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
    </ThemedPage>
  );
};

export default HomePage;
