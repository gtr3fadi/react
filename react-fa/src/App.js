import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter ,Switch, Router, Route, Link} from 'react-router-dom';
import SingleDrink from './component/SingleDrink/SingleDrink';
// import ByName from './component/ByName/ByName';
// import ByFirstLetter from './component/ByFirstLetter/ByFirstLetter';
// import Alcoholic from './component/Alcoholic/Alcoholic';
// import NonAlcohlic from './component/NonAlcoholic/NonAlcoholic';
// import Home from './component/Home/Home';
// import Lookup from './component/Lookup';


 class App extends Component {
   constructor(props){
      super(props);
      this.state = {
        drinks: [],
        searchValue: 'a',
      }
    }
   
  componentDidMount(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1//search.php?f=${this.state.searchValue}`)
    .then(res => {
      this.setState({
        drinks: res.data.drinks
        
      })
      console.log(res.data.drinks)
    })
    .catch(err => {
      console.log(err);
    }
    )
}




   render() { 
     const {drinks} = this.state;
     const {searchValue} = this.state;
     const drinksList = this.state.drinks.map(drink => {
        return(
          // in card with image and name in row-cols-3 and button to go to drink page
          <div className="card" key={drink.idDrink}>
            <div className="card-image">
              <img src={drink.strDrinkThumb} alt="drink" />
              <span className="card-title">{drink.strDrink}</span>
            </div>
            <div className="card-content">
              <p>{drink.strInstructions}</p>
            </div>
            <div className="card-action">
              <Link to={`/drink/${drink.idDrink}`}>
                <button className="btn-small">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>


       )})

  
            


     return (  
        <BrowserRouter>

        {/* <Link to="/">Home</Link>
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
        </switch> */}

        <Switch>
          <Route  path="/" component={App} />
          <Route path="/drink/:id" component={SingleDrink} />
        </Switch>


        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link " href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>


        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group m-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          {drinksList}
        </div>
          
        </BrowserRouter>



     );
   }
  }


  export default App;