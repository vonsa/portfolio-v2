export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`text-primary bg-primary min-h-screen h-0 flex flex-col`}>
      {children}
    </div>
  );
};
