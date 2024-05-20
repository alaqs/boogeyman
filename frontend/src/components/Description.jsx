import { Highlight } from "./Highlight";
import { Link } from "./Link";

export const Description = () => (
  <span style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
    We're not your average jacks of all trades — we're{" "}
    full-stack engineering rockstars, who build amazing tech in their sleep, and eat bugs for breakfast.{" "}
    <br />
    <br />
    With a dynamic duo featuring{" "}
    <Link href="https://www.linkedin.com/in/alimaqsood95/">an ex-Amazon maestro</Link>{" "}
    and{" "}
    <Link href="https://www.linkedin.com/in/saqib-chohan-ba5b4a2b2/">an ex-Barclays genius</Link>,{" "}
    <Highlight>techmelon</Highlight> is your ticket to full-stack{" "}
    greatness! Let's flex those 💪🏽 muscles and light up those 🧠 brains{" "}
    as we build your rockstar full-stack engineering team!
  </span>
);
