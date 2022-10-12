import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Contact from "./Contact";








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
          <Route path="/admin">
            <Admin />
            
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
