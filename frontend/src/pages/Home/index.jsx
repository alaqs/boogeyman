import { Stack, Box } from "@mui/material";
import {
  Logo,
  Tagline,
  Description,
  Content,
  EmailPrompt,
  Initiate,
} from "../../components";

export const Home = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      p={2}
      sx={{ fontSize: "16px" }}
    >
      <Box sx={{ mt: "3vh" }}>
        <Logo />
      </Box>
      <Box sx={{ mt: "3vh", textAlign: "center" }}>
        <Tagline />
      </Box>
      <Box sx={{ mt: "3vh" }}>
        <Description />
      </Box>
      <Box sx={{ mt: "5vh" }}>
        <Initiate />
      </Box>
      <Box sx={{ mt: "5vh" }}>
        <Content />
      </Box>
      <Box sx={{ mt: "3vh" }}>
        <EmailPrompt />
      </Box>
    </Stack>
  );
};
