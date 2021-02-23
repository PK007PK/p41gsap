import { useContext } from "react";
import styled from "styled-components";
import AppProvider, { AppContext } from "./AppContext";
import Layout from "./components/Layout";
import GlobalStyles from "./components/styles/GlobalStyles";
import SvgScene from "./components/SvgScene";

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
      <Layout>
        <SvgScene />
      </Layout>
    </AppProvider>
  );
}

export default App;
