import useScript from "../../../hooks/useScript";

const Analytics = ({ dataDomain }: { dataDomain: string }) => {
  useScript({
    src: "https://plausible.io/js/script.local.js",
    defer: "true",
    "data-domain": dataDomain,
  });
  useScript({
    innerHTML: `window.plausible =
  window.plausible ||
  function () {
    ;(window.plausible.q = window.plausible.q || []).push(arguments)
  }`,
  });

  return <></>;
};

export default Analytics;
