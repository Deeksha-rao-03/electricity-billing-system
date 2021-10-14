
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

import adminwork from './Components/Admin/adminwork';
import TariffHome from './Components/Tariff/TariffHome';
import ContactUs from './Components/Home/ContactUs';
import FetchAllTariffs from './Components/Tariff/FetchAllTariffs';
import AddTariff from './Components/Tariff/AddTariff';
import UpdateTariff from './Components/Tariff/UpdateTariff';
import DeleteTariff from './Components/Tariff/DeleteTariff';
import FetchTarrifs from './Components/Tariff/FetchAllTariffs';
import FetchById from './Components/Tariff/FetchById';
import ConnectionBody from './Components/Connection/ConnectionBody';
import SearchConnectionById from './Components/Connection/SearchConnectionById';
import AddConnection from './Components/Connection/AddConnection';
import FetchAllConnections from './Components/Connection/FetchAllConnections';
import DeleteConnection from './Components/Connection/DeleteConnection';
import ConsumptionHome from './Components/Consumption/ConsumptionHome';
import FetchAllConsumptions from './Components/Consumption/FetchAllConsumptions';
import SaveConsumption from './Components/Consumption/SaveConsumption';
import FetchByConsumptionId from './Components/Consumption/FetchByConsumptionId';
import UpdateConsumption from './Components/Consumption/UpdateConsumption';
import DeleteConsumption from './Components/Consumption/DeleteConsumption';
import PaymentHome from './Components/Payment/Landing/PaymentHome';

import SavePayment from './Components/Payment/SavePayment';
import FetchAllPayment from './Components/Payment/FetchAllPayments';
import FetchAllBills from './Components/Billing/FetchAllBills';
import FetchBillByNo from './Components/Billing/FetchBillByNo';
import SaveBill from './Components/Billing/SaveBill';
import UpdateBill from './Components/Billing/UpdateBill';
import DeleteBill from './Components/Billing/DeleteBill';
import ViewByDate from './Components/Billing/ViewByDate';
import FetchByCustomerId from './Components/Billing/FetchByCustomerId';
import UserFetchByBillNo from './Components/Billing/UserFetchByBillNo';
import UserBillingHome from './Components/Billing/UserBillingHome';
import userBilling from './Components/Billing/AdminBillingHome';
import SearchPaymentById from './Components/Payment/FetchPaymentById';
import LoginForm from './Components/Admin/LoginForm';
import FetchCustomerDetails from './Components/Customer/FetchCustomerDetails';
import AdminViewPayment from './Components/Payment/AdminViewPayment';


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
    <Route path="/FetchCustomerById/:id" component={FetchCustomerDetails} exact/>
    <Route path="/admin" component={adminwork} exact/>
    <Route path="/admin/login" component ={LoginForm} exact/>
    <Route path="/TariffHome" component={TariffHome} exact />
    <Route path="/contactus" component={ContactUs}/>
    <Route path="/fetchallTariff" component={FetchAllTariffs}/>
    <Route path="/AddTariff" component={AddTariff} />
    <Route path="/updateTariff/:id" component={UpdateTariff} />
    <Route path="/deleteTraiff/:id" component={DeleteTariff} />
    <Route path="/ViewTraiff" component={FetchTarrifs} />
    <Route path="/searchTariff" component={FetchById}/>
    <Route path="/ConnectionHome" component={ConnectionBody}/>
    <Route path ="/searchConnection" component = {SearchConnectionById}/>
    <Route path ="/saveConnection" component = {AddConnection}/> 
    <Route path ="/allConnection" component = {FetchAllConnections} /> 
    <Route path ="/deleteConnection/:id" component = {DeleteConnection} />
    <Route path="/ConsumptionHome" component={ConsumptionHome} exact/>
    <Route path="/allConsumption" component={FetchAllConsumptions} exact/>
    <Route path="/saveConsumption/" component={SaveConsumption} exact/>
    <Route path="/getConsumption/:id" component={FetchByConsumptionId} exact/>
    <Route path="/updateConsumption/:id" component={UpdateConsumption} exact/>
    <Route path="/deleteConsumption/:id" component={DeleteConsumption} exact/>
    <Route path="/PaymentHome" component={PaymentHome} exact/>
    <Route path="/getPaymentId/" component ={SearchPaymentById} exact/>
    <Route path="/savePayment/" component={SavePayment} exact />
    <Route path="/payment/all" component={FetchAllPayment} exact />
    <Route path="/all" component={FetchAllBills} exact />    
    <Route path="/getBill/:id" component={FetchBillByNo}exact />  
    <Route path="/saveBill" component={SaveBill} exact/>
    <Route path="/alterBill/:id" component={UpdateBill} exact/>
    <Route path="/deleteBill/:id" component={DeleteBill} exact/>
    <Route path="/getByDate" component={ViewByDate}exact />
    <Route path="/allByCustomerId" component={FetchByCustomerId}exact/>
    <Route path="/billGet" component={UserFetchByBillNo} exact/>
    <Route path="/userBilling" component={UserBillingHome} exact/>
    <Route path="/adminBilling" component={userBilling} exact/> 
    <Route path="/AdminViewPayment" component={AdminViewPayment} exact/>

    </Switch>
  </Router>
  );
}
export default App ;