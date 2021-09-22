import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Login from "./components/Login";

function App() {
  return (
    <Router>
          <div className="App">
          <Switch>
                <Route exact path="/">
                  <Header/>
                </Route>
                <Route path="/login">
                <Login/>
                </Route>
          </Switch>
          </div>
    </Router>
 
  );
}

export default App;
