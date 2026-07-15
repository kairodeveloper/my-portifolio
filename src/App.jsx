import { useTranslation } from "react-i18next";

import ContainerAboveAll from "./components/ContainerAboveAll";
import Header from "./components/Header";
// import Home from "./components/Home";
import './i18n';

function App() {
  const { t } = useTranslation();
  return (
    <ContainerAboveAll>
      <h2>{t('Welcome to React')}</h2>
      <Header />
      {/*<Home /> */}
    </ContainerAboveAll>
  );
}

export default App;
