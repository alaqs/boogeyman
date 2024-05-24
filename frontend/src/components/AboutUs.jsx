import { Box, Stack, Grid } from "@mui/material";
import ali from "../assets/ali.png";
import saqib from "../assets/saqib.png";
import { Highlight } from "./Highlight";

const Bio = ({ name, children, avatar }) => {
  return (
    <Stack alignItems={"center"}>
        <img src={avatar} minWidth="100%" height="200px" alt="awesome founder" />
      <Box sx={{ fontWeight: 600, fontSize: "1.2rem" }} mt={2}>
        {name}
      </Box>
      <Box sx={{ fontWeight: 400 }} mt={2}>
        {children}
      </Box>
    </Stack>
  );
};

// todo: add brags
export const AboutUs = () => {
  return (
    <Grid container width="100%">
      <Grid item xs={6} px={2}>
        <Bio name="Ali" avatar={ali}>
          With <Highlight>full-stack experience</Highlight> sculpted in Amazon's coding dojo, 
          {" "}I'll make sure your systems get built correctly, reliably and
          {" "}outlast at least myself. 
        </Bio>
      </Grid>
      <Grid item xs={6} px={2}>
        <Bio name="Saqib" avatar={saqib}>
          Consider me your <Highlight>business ops superhero</Highlight>.
          I will build your teams, and keep them motivated. 
          You'll save enough on tech 
          consultants to buy a private island!
        </Bio>
      </Grid>
    </Grid>
  );
};
