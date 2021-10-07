import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
