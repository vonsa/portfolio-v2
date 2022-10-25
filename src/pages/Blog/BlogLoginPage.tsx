import { useEffect } from "react";
import Login from "../../Components/Auth/Login";
import { action } from "../../events/action";
import { send } from "../../events/eventBus";

const BlogLoginPage = () => {
  useEffect(() => {
    send(
      action({
        type: "THEME",
        payload: { navbar: "static", colors: "light" },
      })
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Login></Login>
    </div>
  );
};

export default BlogLoginPage;
