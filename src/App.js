import AppProvider from "./AppContext";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import GlobalStyles from "./components/styles/GlobalStyles";
import SvgScene from "./components/SvgScene";
import SplitTextComponent from "./components/SplitTextComponent";
import Toogler from "./components/Toogler";

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Menu />
      <Layout>
        <SvgScene />
        <SplitTextComponent />
        <Toogler />
      </Layout>
      <Footer />
    </AppProvider>
  );
}

export default App;
