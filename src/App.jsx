import ContainerAboveAll from "./components/ContainerAboveAll";
import Header from "./components/Header";
import Home from "./components/Home";
import "./i18n";

function App() {
  return (
    <ContainerAboveAll>
      <Header />
      <Home />
    </ContainerAboveAll>
  );
}

export default App;
