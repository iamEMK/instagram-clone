import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feeds from "./components/Feeds";
import Header from './components/Header';
import Loading from "./components/Loading";
import Login from "./components/Login";
import { auth } from "./fireb";


function App() {

  const [ user, loading ] = useAuthState(auth);

  return (
    
          <div className="App">
          {
            loading ? ( 
              <Loading />
            ) : ""
          }
          <Router>
          <Switch>
                <Route exact path="/">
                  <Header/>
                  <Feeds/>
                </Route>
                <Route path="/login">
                <Login/>
                </Route>
                <Route path="/loading">
                <Loading/>
                </Route>
                
          </Switch>
          
    </Router>
    </div>
  );
}

export default App;
