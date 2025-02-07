import styled from "styled-components";

export const StyledHeader = styled.header`
  & {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;

    &.darkMode {
      background-color: #1f2937;
      color: #ffffff;
    }

    &.darkMode .header {
      background-color: #111827;
      border-bottom-color: #374151;
    }

    &.darkMode .logo,
    &.darkMode .navLink,
    &.darkMode .dropdownMenu a {
      color: #e5e7eb;
    }

    &.darkMode .searchInput {
      background-color: #374151;
      border-color: #4b5563;
      color: #ffffff;
    }

    &.darkMode .dropdownMenu {
      background-color: #1f2937;
      border-color: #374151;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    color: #000000;
  }

  .nav {
    display: none;
  }

  @media (min-width: 768px) {
    .nav {
      display: flex;
      align-items: center;
    }
  }

  .navLink {
    margin-right: 1.5rem;
    text-decoration: none;
    color: #4b5563;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  .searchInput {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }

  .iconButton {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.25rem;
  }

  .dropdown {
    position: relative;
  }

  .dropdownMenu {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.25rem;
    padding: 0.5rem 0;
    min-width: 10rem;
  }

  .dropdownMenu a,
  .dropdownMenu span {
    display: block;
    padding: 0.5rem 1rem;
    color: #4b5563;
    text-decoration: none;
  }
`;
