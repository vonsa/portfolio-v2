import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Quill from "quill";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../Components/UI/Button";
import { savePost } from "../../services/posts.service";
import { send } from "../../events/eventBus";
import { action } from "../../events/action";

const BlogEditorPage = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    send(
      action({
        type: "THEME",
        payload: { navbar: "static", colors: "light" },
      })
    );
  }, []);

  const quillEditor = useRef<ReactQuill>(null);
  const { post } = useLocation().state;

  const save = () => {
    if (!quillEditor?.current) {
      // handle error
      return;
    }
    const quill = quillEditor.current.getEditor();
    const html = quill.root.innerHTML;
    const delta = quill.getContents();
    const text = quill.getText();

    console.log({ html, delta, text });

    // savePost({html, delta, text})
  };

  console.log({ post });

  return (
    <>
      {/* <link
        href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
        rel="stylesheet"
      ></link> */}
      <div className="flex flex-col items-center h-full">
        <div className="w-full p-6 max-w-6xl flex flex-col gap-4">
          <input
            className="text-2xl font-bold"
            type="text"
            name="title"
            value={post?.title}
          ></input>
          {/* <div ref={quillEditor}></div> */}
          <ReactQuill
            ref={quillEditor}
            defaultValue={post?.delta}
            theme="snow"
            // value={value}
            // onChange={setValue}
            className="flex flex-col"
          />
          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default BlogEditorPage;
