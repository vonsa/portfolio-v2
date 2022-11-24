import { useLocation } from "react-router-dom";
import { GenericError } from "../../Components/GenericError";
import Spinner from "../../Components/Spinner/Spinner";
import { getPostById } from "../../features/posts/services/posts.service";
import { useAsync } from "../../hooks/useAsync";
import { readableDate } from "../../utilities/text";

// Can also use React suspense: https://blog.openreplay.com/data-fetching-with-suspense-in-react/
// And error boundaries ?

const BlogPostPage = () => {
  const { postId } = useLocation().state || {};

  const [loading, error, post] = useAsync(
    () =>
      getPostById(postId, {
        fields: "title,html,createdAt,lastModifiedAt",
      }).then((res) => res.data),
    [postId]
  );

  const renderContent = () => {
    switch (true) {
      case !!loading:
        return <Spinner />;
      case !!post:
        return (
          <div>
            <h1 className="text-3xl font-bold">{post!.title}</h1>
            <p className="mb-4">Created on {readableDate(post!.createdAt)}</p>
            <div dangerouslySetInnerHTML={{ __html: post!.html }}></div>
          </div>
        );
      default:
        return <GenericError />;
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="md:max-w-6xl p-6 w-full">{renderContent()}</div>
    </div>
  );
};

export default BlogPostPage;
