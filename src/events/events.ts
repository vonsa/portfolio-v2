import { NavbarType } from "../Components/Navbar/Navbar";
import { ThemeColors } from "../styles/Theme.model";
import type { Action } from "./action.model";

export type AppEvent = Action<
  "THEME",
  { navbar: NavbarType; colors: ThemeColors }
>;
