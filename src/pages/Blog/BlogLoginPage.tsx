import Login from "../../features/auth/components/Login";
import { ThemedPage } from "../../features/theming/components/ThemedPage";

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
