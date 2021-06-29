import './App.css';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Portfolio from './components/Portfolio'
import SignInPage from './pages/signin';


function App() {
  return (
  <Router>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/' component={Portfolio} exact/>
      <Route path='/contact' component={SignInPage} exact/>
    </Switch>
    <GlobalStyle/>
  </Router>
  );
}

export default App;
