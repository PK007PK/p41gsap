import AppProvider from "./AppContext";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import GlobalStyles from "./components/styles/GlobalStyles";
import SvgScene from "./components/SvgScene";
import SvgScene2 from "./components/SvgScene2";
import SvgScene3 from "./components/SvgScene3";

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
      <Footer />
    </AppProvider>
  );
}

export default App;
