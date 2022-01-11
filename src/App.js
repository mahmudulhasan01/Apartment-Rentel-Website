import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;

// Live-Link:  https://rent-a-apartment.web.app/
// Claint-side-code:  https://github.com/mahmudulhasan01/Apartment-Rentel-Website

// Note: My Team Project is destroyed many times, then finally I made my own repo. and then create a so short project. I work with it. Now I am submitting my own repo just only code which is not all code some code is destroyed.
