import React, { useState } from "react";
import { StyledHeader } from "./header.styled";
import CompanyLogo from "../company-logo/company-logo";
import { Dropdown } from "../dropdown/dropdown";

export const Link = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <StyledHeader className={`header ${isDarkMode ? "darkMode" : ""}`}>
      <div className={"container"}>
        <Link href="/" className={"logo"}>
          <CompanyLogo />
        </Link>
        <nav className={"nav"}>
          <Link href="/about" className={"navLink"}>
            About
          </Link>
          <Link href="/products" className={"navLink"}>
            Products
          </Link>
          <Link href="/contact" className={"navLink"}>
            Contact
          </Link>
        </nav>
        <div className={"actions"}>
          <input
            type="search"
            placeholder="Search..."
            className={"searchInput"}
          />
          <button onClick={toggleDarkMode} className={"iconButton"}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <Dropdown label="🔔">
            <span>No Notifications</span>
          </Dropdown>

          <Dropdown label="👤">
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
            <a href="/signout">Sign out</a>
          </Dropdown>
        </div>
      </div>
    </StyledHeader>
  );
}
