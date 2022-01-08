import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
