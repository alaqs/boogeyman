import { Box, Stack } from "@mui/material";
import ali from "../assets/Ali.jpeg";
const Avatar = ({name, brag}) => {
  return (
    <Stack alignItems={"center"} sx={{textAlign: "center"}} >
      <Box sx={{borderRadius: "32px", overflow: "hidden"}}>
        <img src={ali} width="100%" height="300px" alt="awesome founder" />
      </Box>
      <Box sx={{fontWeight: 600, fontSize: "1.2rem"}} mt={2}>{name}</Box>
      <Box sx={{fontWeight: 400}} mt={2}>{brag}</Box>
    </Stack>
  );
};

export const AboutUs = () => {
  return (
    <Stack direction="row" width="100%" alignItems={"center"} spacing={8}>
      <Avatar name="Ali" brag="Develops software / Full-stack eng. for 7 years"/>
      <Avatar name="Saqib" brag="Develops business / Selling stuff for 7 years"/>
    </Stack>
  );
};
