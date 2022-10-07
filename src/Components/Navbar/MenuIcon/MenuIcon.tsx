import "./menu-icon.css";

// https://codepen.io/designcouch/pen/ExvwPY

const MenuIcon = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      id="nav-icon3"
      className={`${open && "open"}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuIcon;
