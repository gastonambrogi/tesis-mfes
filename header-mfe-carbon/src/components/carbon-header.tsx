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
import { navigateToUrl } from "single-spa";

const CarbonHeader: React.FC = () => {
  return (
    <Header aria-label="Carbon Header">
      <SkipToContent />
      <HeaderName href="/" prefix="Company">
        <CompanyLogo />
      </HeaderName>
      <HeaderNavigation aria-label="Carbon Header Navigation">
        <HeaderMenuItem
          onClick={() => {
            navigateToUrl("/products");
          }}
        >
          Products
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={() => {
            navigateToUrl("/services");
          }}
        >
          Services
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={() => {
            navigateToUrl("/about");
          }}
        >
          About
        </HeaderMenuItem>
        <HeaderMenuItem
          onClick={() => {
            navigateToUrl("/contact");
          }}
        >
          Contact
        </HeaderMenuItem>
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
