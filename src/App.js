import { useContext } from "react";
import styled from "styled-components";
import AppProvider, { AppContext } from "./AppContext";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

import GlobalStyles from "./components/styles/GlobalStyles";
import SvgScene from "./components/SvgScene";
import SvgScene2 from "./components/SvgScene2";
import SvgScene3 from "./components/SvgScene3";

const StyledDiv = styled.div`
  color: var(--black);
  ${({ theme }) => theme.media.lgAbove} {
    color: red;
  }
`;

const Button = () => {
  const { toogleIsActive, isActive } = useContext(AppContext);
  return (
    <button onClick={toogleIsActive}>{isActive ? "True" : "False"}</button>
  );
};

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Menu />
      <Layout>
        <SvgScene />
        <div style={{ height: "100px" }} />
        <SvgScene2 />
        <div style={{ height: "100px" }} />
        <SvgScene3 />
        <div style={{ height: "100px" }} />
      </Layout>
    </AppProvider>
  );
}

export default App;
