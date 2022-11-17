import ReactDOM from "react-dom/client";
import { createApp } from "./setup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(createApp());
