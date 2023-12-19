import { colors } from "../colors";

const LogoText = () => (
  <span style={{ fontWeight: 700 }}>
    tech<span style={{ color: colors.logoRed }}>melon</span>
  </span>
);

export const Logo = () => (
  <span style={{ fontSize: "2.5rem" }}>
    <LogoText />
  </span>
);