import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <Header />
      <h1>App Pages</h1>
      <Home />
      <About />
    </>
  );
}

export default App;
