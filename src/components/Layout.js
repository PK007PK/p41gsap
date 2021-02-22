import { ThemeProvider } from "styled-components";
import { theme } from "../assets/Theme";
import { BootsContainer } from "./BootsElements";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <BootsContainer>{children}</BootsContainer>
    </ThemeProvider>
  );
}
