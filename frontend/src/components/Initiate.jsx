import { Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { colors } from "../colors";

export const Initiate = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setOpen(false), []);
  const handleOpen = React.useCallback(() => setOpen(true), []);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant={"contained"}
        size={"large"}
        sx={{
          color: "black",
          fontWeight: 700,
          textTransform: "initial",
          backgroundColor: colors.green.light,
          "&:hover": {
            backgroundColor: colors.green.dark,
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: colors.green.dark,
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
          },
        }}
      >
        Lets start the conversation!
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          This could be the start of something beautiful 🤩
        </DialogTitle>
        <iframe
          title="google-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSducuUXhykLpTuV9gPj7iQ_SzKhBPlJG0egqyjxuz1ZdbN_Kw/viewform?embedded=true"
          width="100%"
          height="700"
        >
          Loading…
        </iframe>
      </Dialog>
    </>
  );
};
