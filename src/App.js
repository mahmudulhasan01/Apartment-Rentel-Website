import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

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
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
