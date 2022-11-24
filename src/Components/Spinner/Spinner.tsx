import "./Spinner.css";

const Spinner = ({ small, auto }: { small?: boolean; auto?: boolean }) => {
  let size;
  let borderWidth;

  if (small) {
    size = "20px";
    borderWidth = "3px";
  } else {
    borderWidth = "6px";
    size = "50px";
  }
  if (auto) {
    size = "100%";
  }

  return (
    <span
      className="loader"
      style={{ width: size, height: size, borderWidth }}
    ></span>
  );
};

export default Spinner;
