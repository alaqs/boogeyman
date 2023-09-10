import {Box, Grid, Typography} from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{position: "fixed", bottom: 0, left: 0, right: 0}}>
      <Grid container direction={"row"} alignItems={"center"}
            sx={{width: "100%", backgroundColor: '#4f7375', minHeight: 60, paddingX: 24}}>
        <Typography variant={"body1"} sx={{color: "white"}}>
          Or, straight send us an email at &nbsp;
          <a href={"mailto:saqib@techmelon.uk"} style={{color: "inherit", fontWeight: 700}}>
            saqib@techmelon.uk
          </a>
        </Typography>
      </Grid>
    </Box>
  );
}