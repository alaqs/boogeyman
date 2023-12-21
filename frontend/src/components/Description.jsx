import { Highlight } from "./Highlight";
import { Link } from "./Link";

export const Description = () => (
  <span style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
    Run by a{" "}
    <Link href="https://www.linkedin.com/in/alimaqsood95/">
      seasoned engineer
    </Link>{" "}
    (ex-Amazon) and a{" "}
    <Link href="https://www.linkedin.com/in/saqib-r-chohan/">
      top-notch entrepreneur
    </Link>{" "}
    (ex-Barclays), <Highlight>techmelon</Highlight> is keen on delivering one
    goal - get you the 💪🏽 muscle and 🧠 brains to build amazing tech for your
    business, and do wonders!
  </span>
);
