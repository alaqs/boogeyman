import {Button} from "@mui/material";

export const Initiate = () => {
  return (
    <Button
      variant={"contained"}
      color="info"
      size={"large"}
      sx={{
        color: "black",
        fontWeight: 700,
        textTransform: "initial",
        marginTop: 8,
        backgroundColor: '#a3bab4',
        borderColor: '#274442',
        '&:hover': {
          backgroundColor: '#748e81',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#748e81',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      }}
    >
      Lets talk!
    </Button>
  );
}