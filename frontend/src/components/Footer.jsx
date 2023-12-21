import { Stack } from "@mui/material";
import { EmailPrompt } from "./EmailPrompt";

export const footerHeight = "3rem";

export const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: footerHeight,
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Stack
        justifyContent="center"
        sx={{ height: "100%", textAlign: "center", }}
      >
        <EmailPrompt />
      </Stack>
    </div>
  );
};
