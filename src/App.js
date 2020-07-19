import React from "react";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { About } from "./pages/About";
import {CityInfo} from './pages/CityInfo'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="container pt-4">
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={About} />
          <Route path="/cityinfo" component={CityInfo} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
