import { colors } from "../colors";

export const Highlight = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "0 0.2rem",
      fontWeight: 700,
      color: colors.red,
    }}
  >
    {children}
  </span>
);
