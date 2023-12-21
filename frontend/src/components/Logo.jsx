import { colors } from "../colors";
import logo from "../techmelon-logo.png";

const LogoText = () => (
  <span style={{ fontWeight: 700 }}>
    tech<span style={{ color: colors.red }}>melon</span>
  </span>
);

export const TextLogo = () => (
  <span style={{ fontSize: "2.5rem" }}>
    <LogoText />
  </span>
);

export const ImageLogo = () => (
  <img src={logo} alt="techmelon logo" style={{ width: "300px"}}/>
);