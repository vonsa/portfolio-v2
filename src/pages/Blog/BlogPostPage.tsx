import { useLocation } from "react-router-dom";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { useAsync } from "../../hooks/useAsync";
import { getPostById } from "../../services/posts.service";
import { readableDate } from "../../utilities/text";

// Can also use React suspense: https://blog.openreplay.com/data-fetching-with-suspense-in-react/
// And error boundaries ?

const BlogPostPage = () => {
  const { postId } = useLocation().state || {};

  const [loading, error, post] = useAsync(
    () =>
      getPostById(postId, [
        "title",
        "html",
        "createdAt",
        "lastModifiedAt",
      ]).then((res) => res.data),
    [postId]
  );

  const renderContent = () => {
    switch (true) {
      case !!loading:
        return <Spinner />;
      case !!error:
        return <h1>Error</h1>;
      case !!post:
        return (
          <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mb-4">Created on {readableDate(post.createdAt)}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        );
      default:
        return <h1>Some error</h1>;
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="md:max-w-6xl p-6 w-full">{renderContent()}</div>
    </div>
  );
};

export default BlogPostPage;
