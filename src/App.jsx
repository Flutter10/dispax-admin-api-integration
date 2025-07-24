import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ActiveCompany from './components/Dashboard/ActiveCompany';
import ActiveDrivers from './components/Dashboard/ActiveDrivers';
import ActiveTrucksData from './components/Dashboard/ActiveTrucks';
import OrderStatus from './components/Dashboard/OrderStatus';
import Revenue from './components/Dashboard/Revenue';
import TotalShipments from './components/Dashboard/TotalShipments';
import Layout from './components/Layout/Layout';
import Customization from './pages/Customization/Customization';
import Dashboard from './pages/Dashboard/Dashboard';
import InvoicePayment from './pages/InvoicePayment/InvoicePayment';
import Login from './pages/Login/Login';
import ManageCompany from './pages/ManageCompany/ManageCompany';
import OrderShipping from './pages/OrderShipping/OrderShipping';
import ReportsData from './pages/ReportsData/ReportsData';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Security from './pages/Security/Security';
import Signup from './pages/Signup/Signup';
import Support from './pages/Support/Support';
import UserRole from './pages/UserRole/UserRole';
import store from './redux/store';
import CompanyManagement from './components/ManageCompany/CompanyManagement/Index';
import Performance from './components/ManageCompany/CompanyManagement/Performance';
import ActivityLogs from './components/ManageCompany/CompanyManagement/ActivityLogs';
import TruckManagement from './components/ManageCompany/TruckManagement/Index';

function App() {
  return (
    <Provider store={store}>
      
        <div
          className="min-h-screen w-full"
          // background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)',
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #1D2461 0%, #080625 100%)'
          }}
        >
          <Routes>
            {/* Routes without Sidebar and Header */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Login />} />

            {/* Routes with Sidebar and Header */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/manage-company" element={<Navigate to="/manage-company" />} /> */}

              <Route path="/manage-company" element={<ManageCompany />}>
                <Route index element={<CompanyManagement />} />
                <Route path="/manage-company/performance/:id" element={<Performance />} />
                <Route path="/manage-company/activity-logs/:id" element={<ActivityLogs />} />
                <Route path="/manage-company/truck-managment" element={<TruckManagement />} />
              </Route>
              <Route path="/order-shipping" element={<OrderShipping />} />
              <Route path="/invoice-payment" element={<InvoicePayment />} />
              <Route path="/reports-data" element={<ReportsData />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/user-role" element={<UserRole />} />
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/dashboard/active-company" element={<ActiveCompany />} />
              <Route path="/dashboard/total-shipments" element={<TotalShipments />} />
              <Route path="/dashboard/active-trucks" element={<ActiveTrucksData />} />
              <Route path="/dashboard/active-drivers" element={<ActiveDrivers />} />
              <Route path="/dashboard/order-status" element={<OrderStatus />} />
              <Route path="/dashboard/revenue" element={<Revenue />} />
            </Route>
          </Routes>
        </div>
    
    </Provider>
  );
}

export default App;