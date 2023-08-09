import {AppBar} from '../../components/AppBar';
import {Headline} from "../../components/Headline";
import {Box, Grid, Typography} from "@mui/material";
import {SubHeading} from "../../components/SubHeading";
import {Initiate} from "../../components/Initiate";
import {Description} from "../../components/Description";
import {InformationBox} from "../../components/InformationBox";
import {Footer} from "../../components/Footer";

export const Landing = () => {
  return (
    <>
      <AppBar/>
      <Box sx={{paddingY: 8, paddingX: 24}}>
        <Box sx={{textAlign: "center"}}>
          <Headline/>
          <SubHeading/>
          <Initiate/>
        </Box>
        <Box my={8}>
          <Description/>
        </Box>
        <Typography variant={"h4"} sx={{marginBottom: 4}}>
          <strong>Our recipe for magic 🪄</strong>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InformationBox title={"💭 Think"}>
              As obvious as it may be, we always start with thought. We think about the next minimal set of features
              that will deliver the most value.
            </InformationBox>
          </Grid>
          <Grid item xs={4}>
            <InformationBox title={"👷🏻‍ Build"}>
              Staying lean, we build. Keeping it simple and easy to build fast. No time
              wasted in speculation. This gets us to data, real data.
            </InformationBox>
          </Grid>
          <Grid item xs={4}>
            <InformationBox title={"🔄 Iterate"}>
              We have data on how what we built, behaved. We collect our learnings and iterate, with iterations of the
              size that works for us.
            </InformationBox>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </>
  );
}