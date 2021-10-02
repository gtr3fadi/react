import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);   
        this.state = {  
            post: [],
            random:"/random.php"

        }

    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1` + this.state.random)
        .then(res => {
            this.setState({
                post: res.data.drinks
            })
        })  .catch(err => {
            console.log(err);
        })                                  

    }
  render() {
      const { post } = this.state;
      const postList = post.map(post => { 
            return (
                <div className="col-md-4" key={post.id}>    
                    <div className="card mb-4 shadow-sm">
                        <img src={post.strDrinkThumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{post.name}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Link to={`/lookup.php?i=${post.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

          
        //map() method creates a new array with the results of calling a function for every array element.
     
    return (
      <>
      //home page
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Welcome to Cocktail DB</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link to="/lookup" className="btn btn-primary btn-lg">Lookup</Link>
                </p>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {postList}
            </div>
        </div>
      
        {/* <ul>
            <li><Link to="/" data-text="Home">Home</Link></li>
            <li><Link to="/ByName" data-text="By Name">By Name</Link></li>
            <li><Link to="/ByFirstLetter" data-text="By First Letter">By First Letter</Link></li>
            <li><Link to="/Alcohlic" data-text="Alcohkic">Alcohlic</Link></li>
            <li><Link to="/NonAlcohlic" data-text="Non Alcohlic">Non Alcohlic</Link></li>
        </ul> */}
        <div className="container">
            <div className="row">
                {postList}
            </div>
        </div>
      </>
    
      
    )
  }
}

export default Home
