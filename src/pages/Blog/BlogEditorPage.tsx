import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../Components/UI/Button";
import { getPostById, savePost } from "../../services/posts.service";
import { BreadCrumb } from "../../Components/UI/BreadCrumb";
import { useAsync } from "../../hooks/useAsync";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { GenericError } from "../../Components/Errors/GenericError";

const BlogEditorPage = () => {
  const quillEditor = useRef<ReactQuill>(null);
  const { postId } = useLocation().state || {};
  /*
    Options to clean up:
    - adjust the useAsync function to work with derived / updated state more easily
    - refresh async data without loading state
  */
  const [loading, error, storedPost] = useAsync(
    () =>
      getPostById(postId).then((res) => {
        setTitle(res.data.title);
        return res.data;
      }),
    [postId],
    () => !!postId
  );
  const [title, setTitle] = useState<string>("");

  const renderAsyncContent = () => {
    switch (true) {
      case !!loading:
        return <Spinner />;
      case !!storedPost:
        return (
          <>
            <input
              className="text-2xl font-bold"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            ></input>
            <ReactQuill
              ref={quillEditor}
              defaultValue={storedPost.delta}
              modules={modules}
              theme="snow"
              className="flex flex-col"
            />
          </>
        );
      default:
        return <GenericError />;
    }
  };

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
          {!postId ? (
            <>
              <input
                className="text-2xl font-bold"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              ></input>
              <ReactQuill
                ref={quillEditor}
                modules={modules}
                theme="snow"
                className="flex flex-col"
              />
            </>
          ) : (
            renderAsyncContent()
          )}
          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default BlogEditorPage;
