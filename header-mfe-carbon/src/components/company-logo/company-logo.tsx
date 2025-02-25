"use client";

import { StyledCompanyLogo } from "./company-logo.styled";

const emojis = ["🟦", "🟩", "🟪", "🟨", "🟥"];

export default function CompanyLogo() {
  return (
    <StyledCompanyLogo className={"container"}>
      <div className={"emojiContainer"}>
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className={"emoji"}
            style={{
              animationDelay: `${index * -1}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </StyledCompanyLogo>
  );
}
