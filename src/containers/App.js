import React, { Component }from "react";
import "./App.css";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import { robots } from "../robots";


class App extends Component {

constructor() {
  super();
  this.state = { 
    robots: [],
   searchfeild: ''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>{
    return response.json()
  })
  .then( users => {
    this.setState({robots:users})
    
  })
}

onSearchChange =(event)=> {
  this.setState( {searchfeild: event.target.value});
}


  render(){

    const filteredRobots = this.state.robots.filter(robot =>{
    
      return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
    });

  return (this.state.robots.length === 0)? <h1>Loading...</h1> : 
    
   (
    <div className='tc'>
      <h1 className='f1'> Monsters</h1>
      <Searchbox searchChange ={this.onSearchChange}/>
      {/* <Scroll> */}
      <CardList robots={filteredRobots} />
      {/* </Scroll> */}
    </div>
  );


  }
};

export default App;
