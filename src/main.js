import React from "react";
import "./App.css";
import Home from './home'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Ordermedicines from "./Order_medicines";
import Healthcareproducts from "./Healthcare_products";
import Diagnostics from "./diagnostics";
import Cart from './cart'

function Main() {
    return (
        <Router>
       <Switch>
        <>
        
        <Route exact path='/Order_medicines'>
            <Ordermedicines />
        </Route>
        <Route exact path='/Healthcare_products'>
            <Healthcareproducts />
        </Route>
      <Route exact path='/Diagnostic_test'>
          <Diagnostics />
      </Route>

        <Route exact path='/Cart'>
            <Cart />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>

        </>
        </Switch>
        </Router>
    )
}
export default Main;

