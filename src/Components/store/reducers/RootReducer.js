import { combineReducers } from 'redux';
import tariffReducer from './TariffReducer';
import connectionReducer from './ConnectionReducer';
import PaymentReducer from './PaymentReducer';
import customerReducer from './CustomerReducer';
import billingReducer from './billingReducer';


const rootReducer = combineReducers({
	tariffReducer, connectionReducer, PaymentReducer, customerReducer, billingReducer
});

export default rootReducer;