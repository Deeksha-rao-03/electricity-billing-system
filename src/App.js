import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Landing/Home';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" component={Home} exact />
    </Switch>
  </Router>
  );
}

export default App;
