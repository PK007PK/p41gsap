import { ThemeProvider } from "styled-components";
import { theme } from "../assets/Theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto">{children}</div>
    </ThemeProvider>
  );
}
