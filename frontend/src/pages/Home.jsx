import { Stack, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {
  ImageLogo,
  Tagline,
  Description,
  Content,
  ContactUs,
  ContactUsDialog,
  Footer,
  footerHeight,
  AboutUs,
} from "../components";

const Body = () => (
  <Stack alignItems={"center"}>
    <Box sx={{ mt: "2vh" }}>
      <ImageLogo />
    </Box>
    <Box sx={{ mt: "3vh", textAlign: "center" }}>
      <Tagline />
    </Box>
    <Box sx={{ mt: "3vh" }}>
      <ContactUs />
    </Box>
    <Box sx={{ mt: "3vh" }}>
      <Description />
    </Box>
    <Box sx={{ mt: "3vh" }}>
      <Content />
    </Box>
    <Box sx={{mt: "3vh"}}>
      <ContactUsDialog label="That does it, I'm sold now ... Let's chat!" />
    </Box>
    <Box sx={{ mt: "3vh", mb: "6vh" }}>
      <AboutUs />
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