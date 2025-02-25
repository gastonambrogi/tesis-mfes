import styled from "styled-components";

export const StyledCompanyLogo = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .emojiContainer {
    position: relative;
    width: 32px;
    height: 32px;
  }

  .emoji {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    animation: fadeOverEmojis 5s linear infinite;
  }

  @keyframes fadeOverEmojis {
    0%,
    20%,
    100% {
      opacity: 1;
    }
    25%,
    95% {
      opacity: 0;
    }
  }
`;
