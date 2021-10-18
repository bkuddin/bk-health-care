import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Shared/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Caring from "./Pages/Caring/Caring";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/caring/:Id">
              <Caring></Caring>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
