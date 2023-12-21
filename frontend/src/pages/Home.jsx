import { Stack, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {
  Logo,
  Tagline,
  Description,
  Content,
  Initiate,
  Footer,
  footerHeight,
} from "../components";

const Body = () => (
  <Stack alignItems={"center"}>
    <Box sx={{ mt: "2vh" }}>
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
  </Stack>
);

export const Home = () => {
  return (
    <>
      <Grid
        container
        xs={12}
        md={8}
        mdOffset={2}
        lg={6}
        lgOffset={3}
        p={2}
        pb={0}
        mb={footerHeight}
      >
        <Body />
      </Grid>
      <Footer />
    </>
  );
};
