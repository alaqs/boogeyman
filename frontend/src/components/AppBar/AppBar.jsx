import {Box, Grid, Link, Typography} from "@mui/material";

const Logo = () => (
  <Typography variant={"h4"} sx={{color: "white"}}><strong>techmelon</strong></Typography>
);

export const AppBar = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{width: "100%", minHeight: 100, backgroundColor: '#4f7375', paddingX: 24}}
    >
      <Logo />
    </Grid>
  );
}