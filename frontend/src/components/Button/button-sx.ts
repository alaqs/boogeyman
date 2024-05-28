import { colors } from "../../colors";

export const sx = {
  color: "black",
  fontWeight: 700,
  textTransform: "initial",
  backgroundColor: colors.white,
  "&:hover": {
    backgroundColor: colors.red,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: colors.red,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}