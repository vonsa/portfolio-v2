import { Link } from "react-router-dom";
import { BreadCrumb } from "../../Components/BreadCrumb";
import { ButtonSmall } from "../../Components/ButtonSmall";
import { GenericError } from "../../Components/GenericError";
import Spinner from "../../Components/Spinner/Spinner";
import {
  deletePost,
  getPosts,
} from "../../features/posts/services/posts.service";
import { useAsync } from "../../hooks/useAsync";
import { readableDate } from "../../utilities/text";

const BlogManagePage = () => {
  const [loading, error, posts, fetchPosts] = useAsync(() =>
    getPosts().then((res) => res.data)
  );

  const renderContent = () => {
    switch (true) {
      case !!loading:
        return <Spinner />;
      case !!posts: // handle posts.length = 0 case?
        if (posts!.length === 0) {
          return <h1>No posts available</h1>;
        }
        return posts!.map((post: any) => {
          return (
            <div
              key={post._id}
              className="flex items-center gap-3 justify-between p-4 border-b border-solid border-red-500"
            >
              <h5 className="font-bold text-lg">{post.title}</h5>
              <p>{readableDate(post.createdAt)}</p>
              <div className="flex gap-3">
                <ButtonSmall>
                  <Link to="/blog/manage/create" state={{ postId: post._id }}>
                    Edit
                  </Link>
                </ButtonSmall>
                <ButtonSmall
                  onClick={() => {
                    onClickDelete(post._id);
                  }}
                >
                  Delete
                </ButtonSmall>
              </div>
            </div>
          );
        });
      default:
        return <GenericError />;
    }
  };

  const onClickDelete = (id: string) => {
    deletePost(id)
      .then(fetchPosts)
      .catch((err) => {
        /* show error */
      });
  };

  return (
    <div className="flex flex-col  items-center h-full">
      <div className="w-full p-6 max-w-6xl flex flex-col gap-3">
        <BreadCrumb></BreadCrumb>
        <div className="flex justify-start w-100">
          <ButtonSmall
            onClick={() => (window.location.href = "/blog/manage/create")}
          >
            Create post
          </ButtonSmall>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default BlogManagePage;
