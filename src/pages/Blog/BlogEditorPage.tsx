import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../Components/UI/Button";
import { getPostById, savePost } from "../../services/posts.service";
import { BreadCrumb } from "../../Components/UI/BreadCrumb";

const BlogEditorPage = () => {
  const { postId } = useLocation().state || {};

  const [title, setTitle] = useState("");
  const [post, setPost] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);

  const quillEditor = useRef<ReactQuill>(null);

  useEffect(() => {
    if (postId) {
      console.log({ postId });
      setLoading(true);
      getPostById(postId)
        .then((post) => {
          setPost(post.data);
          setTitle(post.data.title);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [postId]);

  const save = () => {
    if (!quillEditor?.current) {
      // handle error
      return;
    }
    const quill = quillEditor.current.getEditor();
    const html = quill.root.innerHTML;
    const delta = quill.getContents();
    const text = quill.getText();
    const id = postId;

    savePost({ html, delta, text, title, id });

    // Show success or error notification
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <>
      <div className="flex flex-col items-center h-full light-theme bg-primary text-primary">
        <div className="w-full p-6 max-w-6xl flex flex-col gap-4">
          <BreadCrumb></BreadCrumb>
          <input
            className="text-2xl font-bold"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          ></input>
          {loading ? (
            <div>...</div>
          ) : (
            <ReactQuill
              ref={quillEditor}
              defaultValue={post?.delta}
              modules={modules}
              theme="snow"
              className="flex flex-col"
            />
          )}

          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default BlogEditorPage;
