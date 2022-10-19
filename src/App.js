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
import Create from "./Create"






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
          <Header /> 
          <AdminSidebar />
          </Route>

          
          <Route path="/admin">
          <Header /> 
          <Admin />
          
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
