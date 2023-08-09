import {Box, Typography} from "@mui/material";

export const InformationBox = ({children, title}) => {
  return (
    <Box
      sx={{border: "1px solid #274442", borderRadius: 4, minHeight: 40, padding: 4}}
    >
      <Typography variant={"h4"}>
        <strong>{title}</strong>
      </Typography>
      <Typography variant={"body1"} sx={{marginTop: 2}}>
        {children}
      </Typography>
    </Box>
  );

}