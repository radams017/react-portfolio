import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Project} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
