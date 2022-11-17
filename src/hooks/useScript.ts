import { useEffect } from "react";

const useScript = (props: { [key: string]: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    Object.entries(props)
      .filter(([key]) => key !== "innerHTML")
      .forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    if (props.innerHTML) {
      script.innerHTML = props.innerHTML;
    }
    head!.appendChild(script);

    return () => {
      head!.removeChild(script);
    };
  }, [props]);
};

export default useScript;
