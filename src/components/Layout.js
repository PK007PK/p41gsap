import { ThemeProvider } from "styled-components";
import { theme } from "../assets/Theme";
import { BootsContainer } from "./BootsElements";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto p-60 bg-green-100 ">{children}</div>
    </ThemeProvider>
  );
}
