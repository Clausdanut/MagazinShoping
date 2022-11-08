import './App.css';
import './design.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import AdminSidebar from './AdminSidebar';
import AdminProduct from './Admin-products';
import AdminContact from './Admin-contact';
import Admin from "./Admin";
import Create from "./Create";
import ProductDelete from "./ProductDelete"
import ContactDelete from "./ContactDelete"
import HomeScreen from "./HomeScreen";
import ContactEdit from "./ContactEdit";
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './Payment'
import Orders from './Orders'
import React, { useEffect } from 'react';
const promise = loadStripe(
  "pk_test_51HPvesLv2wbjCv6jorIW0Jwaj6EZNvoCM9f1MiXoWxeqKNAzQMNzkz4sKMJ7FAfm4BTqg6RjQuJCsDCjJzxDSDVT00hE9xbBLW"
)


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User >>>", authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    
    <div className="App">
      <Router>

        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
   
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/contact">
            <Header /> 
            <Contact />  

          </Route>
          <Route path="/admin-panou">
          <Header /> 
          <AdminSidebar />
      
          </Route>

          
          <Route path="/admin">
          <Header /> 
          <Admin />
          
          </Route>


          <Route path="/homescreen">
          <Header /> 
          <div className='product1'>
          <AdminSidebar />
          <HomeScreen />
          </div>
          </Route>


          <Route path="/admin-product">
          <Header /> 
            <div className='product1'>
          <AdminSidebar />
          
          <AdminProduct />
         
          </div>
     
          </Route>


          <Route path="/admin-contact">
          <Header /> 
          <div className='product1'>
          <AdminSidebar />
          <AdminContact />
          </div>
          </Route>
        
          <Route path="/create">
          <Header />
          <div className='product1'>
          <AdminSidebar />
          <Create />
          </div>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>
 
        
        </Switch>

      </Router>

    </div>
  );
}

export default App;