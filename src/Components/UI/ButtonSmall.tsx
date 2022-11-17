export const ButtonSmall = ({
  submit,
  onClick,
  children,
}: {
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="p-3 pt-1 pb-1 rounded-3xl border-transparent hover:border-red-400 border font-bold flex gap-2 hover:text-red-400 bg-red-400 hover:bg-transparent text-white ease-in-out duration-300"
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
