import { ThemedPage } from "../features/theming/components/ThemedPage";
import Spinner from "./Spinner/Spinner";

const LazyFallback = () => {
  return (
    <ThemedPage theme="dark">
      <div className="min-h-full flex justify-center items-center">
        <Spinner />
      </div>
    </ThemedPage>
  );
};

export default LazyFallback;
