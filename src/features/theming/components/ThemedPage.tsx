import { ThemeColors } from "../models/Theme.model";

export const ThemedPage = ({
  theme,
  children,
}: {
  theme: ThemeColors;
  children: React.ReactNode;
}) => {
  return (
    <div className={`bg-primary text-primary theme-${theme} w-full grow`}>
      {children}
    </div>
  );
};
