import React, { Component ,Fragment } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import axios from 'axios';
import {BrowserRouter ,Switch, Router, Route, Link} from 'react-router-dom';
import SingleDrink from './component/SingleDrink/SingleDrink';
import Cocktails from './component/Cocktails/Cocktails';
import BeefCuts from './component/BeefCuts/BeefCuts';


class App extends Component {
 



   render() {

    
     


     return (  
      <BrowserRouter>
        <Fragment>


        

         
        
        <nav className="navbar navbar-expand-lg navbar-light navbar-fa">
          <Link className="navbar-brand" to="#">BarBeuce.com</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Cocktails">Cocktails</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BeefCuts">Beef Cuts</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link " to="/">Cheese</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">Wine</Link>
              </li>
            </ul>
          </div>
        </nav>


        <Switch>
          <Route  path="/Cocktails" component={Cocktails} exact/>
          <Route path="/drink/:SingleDrink_id" component={SingleDrink} />
          <Route path="/BeefCuts" component={BeefCuts} />
        </Switch>
       
          </Fragment>
        </BrowserRouter>



     );

   }

}


  export default App;