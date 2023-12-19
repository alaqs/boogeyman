export const Link = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ color: "inherit", fontWeight: 700 }}
  >
    {children}
  </a>
);
