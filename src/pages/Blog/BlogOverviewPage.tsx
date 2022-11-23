import { Link } from "react-router-dom";
import { GenericError } from "../../Components/Errors/GenericError";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { useAsync } from "../../hooks/useAsync";
import { getPosts } from "../../services/posts.service";
import { readableDate, substring } from "../../utilities/text";

const BlogOverviewPage = () => {
  const [loading, error, posts] = useAsync(() =>
    getPosts().then((res) => res.data)
  );

  const renderContent = () => {
    switch (true) {
      case !!loading:
        return <Spinner />;
      case !!posts:
        return posts!.map((post: any) => {
          return (
            <Link key={post._id} to="/blog/post" state={{ postId: post._id }}>
              <div className="flex flex-col gap-3 p-4 border-b border-solid border-red-500">
                <h5 className="font-bold text-2xl">{post.title}</h5>
                <p>Created on {readableDate(post.createdAt)}</p>
                <p>{substring(post.text, 80)}</p>
              </div>
            </Link>
          );
        });
      default:
        return <GenericError />;
    }
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full p-6 max-w-6xl flex flex-col gap-3">
        {renderContent()}
      </div>
    </div>
  );
};

export default BlogOverviewPage;
