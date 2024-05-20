import { colors } from "../../colors";

export const sx = {
  color: "black",
  fontWeight: 700,
  textTransform: "initial",
  backgroundColor: colors.green.light,
  "&:hover": {
    backgroundColor: colors.green.dark,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: colors.green.dark,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}