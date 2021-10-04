import React, { Component } from 'react'
import axios from 'axios'

class Beef extends Component {
// get beef cuts api by axios get the kind of beef
    getBeefCuts = () => {
        axios.get('http://localhost:8080/beef/cuts')

  render() {
    return (
      <>
        
      </>
    )
  }
}

export default Beef
