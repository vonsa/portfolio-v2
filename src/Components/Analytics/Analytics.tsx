import useScript from "../../hooks/useScript";

// src="https://plausible.io/js/script.js"

const Analytics = ({
  dataDomain,
  children,
}: {
  dataDomain: string;
  children: React.ReactNode;
}) => {
  useScript({
    src: "https://plausible.io/js/script.hash.outbound-links.js",
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

  return <>{children}</>;
};

export default Analytics;
