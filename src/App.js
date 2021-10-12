
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import RegisterCustomer from './Components/Customer/RegisterCustomer'
import LoginCustomer from './Components/Customer/LoginCustomer'
import AboutUs from './Components/Home/AboutUs';
import CustomerApplication from './Components/Customer/CustomerApplication'
import CustomerAccount from './Components/Customer/CustomerAccount';
import DeleteCustomer from './Components/Customer/DeleteCustomer';
import LogoutCustomer from './Components/Customer/LogoutCustomer';
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/RegisterCustomer" component={RegisterCustomer} exact />
    <Route path="/LoginCustomer" component={LoginCustomer} exact />
    <Route path="/AboutUs" component={AboutUs} exact />
    <Route path="/CustomerApplication" component={CustomerApplication} exact />
    <Route path="/CustomerAccount" component={CustomerAccount} exact />
    <Route path="/DeleteCustomer" component={DeleteCustomer} exact />
    <Route path="/LogoutCustomer" component={LogoutCustomer} exact />
    </Switch>
  </Router>
  );
}
export default App ;