import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon/MenuIcon";
import "./navbar.css";
import { ReactComponent as GithubLogo } from "../../assets/img/icons/github.svg";
import { ReactComponent as MailLogo } from "../../assets/img/icons/mail.svg";
import { ThemeColors } from "../../styles/Theme.model";

export interface NavigationItem {
  label: string;
  to: string;
  end?: true;
}

export type NavbarPosition = "fixed" | "static";
export type NavbarBg = "solid" | "transparent";
export interface NavbarConfig {
  position?: NavbarPosition;
  theme?: ThemeColors;
  bg?: NavbarBg;
}

export const Navbar = ({
  navigationItems,
  config,
}: {
  navigationItems: NavigationItem[];
  config?: NavbarConfig;
}) => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { position = "static", theme = "dark", bg = "solid" } = config || {};

  return (
    <div
      className={`w-screen flex justify-center fixed z-10 theme-${theme} ${
        bg === "solid" ? "bg-primary" : "bg-transparent"
      } text-primary`}
      style={{ position }}
    >
      <div className="w-full md:max-w-6xl flex justify-between p-6 leading-normal">
        <div className="hidden md:flex">
          {navigationItems.map((item) => {
            return (
              <span key={item.to} className="mr-6 last:mr-0 text-lg">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold hover:text-red-100 text-red-700"
                      : "hover:text-red-100";
                  }}
                >
                  {item.label}
                </NavLink>
              </span>
            );
          })}
        </div>

        <div className="md:hidden md:pointer-events-none z-20 pr-6">
          <div
            className={`flex ${mobileMenuOpen ? "text-black" : "text-white"}`}
          >
            <MenuIcon open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
          </div>
        </div>
        <div
          id="mobile-background"
          className={`${
            mobileMenuOpen && "open"
          } pl-8 md:hidden fixed bg-white w-screen h-screen top-0 left-0 touch-none`}
        >
          <div className="mt-28 text-3xl flex gap-4 flex-col text-black">
            {navigationItems.map((item) => {
              return (
                <span key={item.to} id="nav-link">
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) => {
                      return isActive
                        ? "font-bold hover:text-red-100"
                        : "hover:text-red-100";
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/vonsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo
              className="w-7 h-7 md:w-6 md:h-6 hover:scale-125 ease-in-out duration-200"
              fill="white"
            ></GithubLogo>
          </a>
          <a href="mailto:administratie@vonsa.nl">
            <MailLogo
              className="w-7 h-7 md:w-6 md:h-6 hover:scale-125 ease-in-out duration-200"
              fill="white"
            ></MailLogo>
          </a>
        </div>
      </div>
    </div>
  );
};
