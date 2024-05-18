import { Stack } from "@mui/material";
import { ContactUsDialog } from "./ContactUsDialog";

export const ContactUs = () => {
  return (
    <Stack width="100%" alignItems={"center"} spacing={2}>
      <Stack direction="row" spacing={8}>
        <ContactUsDialog label="I'm definitely sold!" />
        <ContactUsDialog label="I'm almost sold!" />
      </Stack>
      <p style={{ fontSize: "0.8rem" }}>
        (Psst! Both buttons will bring you to us!)
      </p>
    </Stack>
  );
};
