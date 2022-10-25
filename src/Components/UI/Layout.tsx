import { useEffect, useState } from "react";
import { listen } from "../../events/eventBus";
import { ThemeColors } from "../../styles/Theme.model";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeColors>("dark");

  useEffect(() => {
    const sub = listen("THEME").subscribe(({ colors }) => setTheme(colors));

    return () => sub.unsubscribe();
  }, []);

  return (
    <div className={`text-primary bg-primary ${theme}-theme`}>{children}</div>
  );
};
