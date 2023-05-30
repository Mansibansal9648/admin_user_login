import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {LandingPage} from './LandingPage'
import './App.css';
import { PageNotFound } from './PageNotFound';
import { Profile } from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>

{/* <h1>Hello world</h1> */}
<Router>
  <Switch>
    <Route exact path={['/','/landingPage']}
    component={LandingPage}>
    </Route>

    <Route exact path={'/profile'}
    component={Profile}>
    </Route>

    <Route exact path={'/*'}
    component={PageNotFound}>
    </Route>
  </Switch>
</Router>
</>


  );
}

export default App;
