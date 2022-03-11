import './App.scss';
import Home from './pages/Home';
import About from './pages/AboutUs';
import ComingSoonPage from './component/ComingSoonPage';
import AppDashboard from './pages/App/Dashboard';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch, // for server rendering
    Route,
} from 'react-router-dom';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import VerifyCode from './pages/Auth/VerifyCode';
import ResetPassword from './pages/Auth/ResetPassword';
import ClubAdminReg from './pages/Club-Reg/ClubAdminReg';
import AdminSubPlan from './pages/Club-Reg/AdminSubPlan' 
import PaymentMethod from './pages/Club-Reg/PaymentMethod' 


function App() {
    return (
        <div className=''>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <Router>
                        <Switch>
                            <Route path='/app'>
                                <AppDashboard />
                            </Route>
                            <Route exact path='/about-us'>
                                <About />
                            </Route>
                            <Route exact path='/login'>
                                <Login />
                            </Route>
                            <Route exact path='/forgot-password'>
                                < ForgotPassword/>
                            </Route>
                            <Route exact path='/verify-code'>
                                < VerifyCode/>
                            </Route>
                            <Route exact path='/reset-password'>
                                < ResetPassword/>
                            </Route>
                            <Route exact path='/contact'>
                                <ComingSoonPage />
                            </Route>
                            <Route exact path='/blog'>
                                <ComingSoonPage />
                            </Route>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/club-admin-reg'>
                                <ClubAdminReg/>
                            </Route>
                            <Route exact path='/admin-sub-plan'>
                                <AdminSubPlan/>
                            </Route>
                            <Route exact path='/payment-plan'>
                                <PaymentMethod/>
                            </Route>
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
