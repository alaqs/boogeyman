import { colors } from "../colors";

export const Highlight = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "0 0.5rem",
      fontWeight: 700,
      backgroundColor: colors.logoRed,
      color: "white",
    }}
  >
    {children}
  </span>
);
