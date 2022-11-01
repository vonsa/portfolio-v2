import Login from "../../Components/Auth/Login";
import { ThemedPage } from "../../Components/UI/ThemedPage";

const BlogLoginPage = () => {
  return (
    <ThemedPage theme="light">
      <div className="flex flex-col justify-center items-center h-full">
        <Login></Login>
      </div>
    </ThemedPage>
  );
};

export default BlogLoginPage;
