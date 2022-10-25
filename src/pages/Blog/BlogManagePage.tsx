import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/UI/Button";
import { ButtonSmall } from "../../Components/UI/ButtonSmall";
import { action } from "../../events/action";
import { send } from "../../events/eventBus";
import { getPosts } from "../../services/posts.service";

const BlogManagePage = () => {
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
    });

    send(
      action({
        type: "THEME",
        payload: { navbar: "static", colors: "light" },
      })
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-full p-6 max-w-6xl">
        {posts &&
          posts.map((post: any) => {
            return (
              <div className="flex items-center gap-3 justify-between p-4 border-b border-solid border-red-500">
                <h5 className="font-bold text-lg">{post.title}</h5>
                <div className="flex gap-3">
                  <ButtonSmall>
                    <Link to="/blog/edit" state={{ post }}>
                      Edit
                    </Link>
                  </ButtonSmall>
                  <ButtonSmall>Delete</ButtonSmall>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogManagePage;
