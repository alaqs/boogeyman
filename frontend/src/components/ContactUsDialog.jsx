import { Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import {sx as buttonSx} from "./Button/button-sx.ts";

export const ContactUsDialog = ({label}) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setOpen(false), []);
  const handleOpen = React.useCallback(() => setOpen(true), []);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant={"contained"}
        size={"large"}
        sx={buttonSx}
      >
        {label}
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
