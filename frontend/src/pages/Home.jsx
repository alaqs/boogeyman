import { Stack, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {
  ImageLogo,
  Tagline,
  Description,
  Content,
  ContactUs,
  Footer,
  footerHeight,
} from "../components";

const Body = () => (
  <Stack alignItems={"center"}>
    <Box sx={{ mt: "2vh" }}>
      <ImageLogo />
    </Box>
    <Box sx={{ mt: "5vh", textAlign: "center" }}>
      <Tagline />
    </Box>
    <Box sx={{ mt: "5vh" }}>
      <ContactUs />
    </Box>
    <Box sx={{ mt: "8vh" }}>
      <Description />
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