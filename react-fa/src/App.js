import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter , Router, Route, Link} from 'react-router-dom';
import ByName from './component/ByName/ByName';
import ByFirstLetter from './component/ByFirstLetter/ByFirstLetter';
import Alcoholic from './component/Alcoholic/Alcoholic';
import NonAlcohlic from './component/NonAlcoholic/NonAlcoholic';
import Home from './component/Home/Home';
import Lookup from './component/Lookup';


 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {  }
   }
   render() { 
     return (  
        <BrowserRouter>

        <Link to="/">Home</Link>
        <Link to="/ByName">By Nmae</Link>
        <Link to="/ByFirstLetter">By First Letter</Link>
        <Link to="/Alcohlic">Alcohlic</Link>
        <Link to="/NonAlcohlic">Non Alcohlic</Link>
        <Link to="/lookup">lookup</Link>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/ByName" component={ByName} />
          <Route path="/ByFirstLetter" component={ByFirstLetter} />
          <Route path="/Alcohlic" component={Alcoholic} />
          <Route path="/NonAlcohlic" component={NonAlcohlic} />
          <Route path="/lookup" component={Lookup} />
        </switch>

          
        </BrowserRouter>



     );
   }
 }
  
 export default App;