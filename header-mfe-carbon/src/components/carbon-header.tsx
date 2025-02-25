import type React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "@carbon/react";
import { Search, Notification, UserAvatar } from "@carbon/icons-react";
import CompanyLogo from "./company-logo/company-logo";

const CarbonHeader: React.FC = () => {
  return (
    <Header aria-label="Carbon Header">
      <SkipToContent />
      <HeaderName href="/" prefix="Company">
        <CompanyLogo />
      </HeaderName>
      <HeaderNavigation aria-label="Carbon Header Navigation">
        <HeaderMenuItem href="/products">Products</HeaderMenuItem>
        <HeaderMenuItem href="/services">Services</HeaderMenuItem>
        <HeaderMenuItem href="/about">About</HeaderMenuItem>
        <HeaderMenuItem href="/contact">Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar" onClick={() => {}}>
          <UserAvatar size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default CarbonHeader;
