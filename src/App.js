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





function App() {
  return (
    
    <div className="App">
      <Router>

        <Switch>
      
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
          <Admin />
          </Route>

          
          <Route path="/admin">
            <Admin />
          <AdminSidebar />
          <AdminProduct />
          </Route>

          <Route path="/admin-products">
            <div className='product1'>
          <AdminSidebar />
          <AdminProduct />
          </div>
          </Route>


          <Route path="/admin-contact">
          <AdminSidebar />
          <AdminContact />
          
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
