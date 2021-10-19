import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import Caring from "./Pages/Caring/Caring";
import Home from "./Pages/Home/Home/Home";
import Notfound from "./Pages/Notfound/Notfound";

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

            <PrivateRoute path="/caring/:Id">
              <Caring></Caring>
            </PrivateRoute>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
