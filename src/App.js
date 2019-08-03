import React, { Component }from "react";
import "./App.css";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import { robots } from "./robots";



class App extends Component {
constructor() {
  super();
  this.state = { 
    robots: robots,
   searchfeild: ''
  }

}

onSearchChange =(event)=> {
  this.setState( {searchfeild: event.target.value});

  const filteredRobots = this.state.robots.filter(robot =>{
    
    return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
  });
  console.log(event.target.value);
  console.log(filteredRobots);

}


  render(){
  return (
    <div className='tc'>
      <h1> Monsters</h1>
      <Searchbox searchChange ={this.onSearchChange}/>
      <CardList robots={this.state.robots} />
    </div>
  );


  }
  
};

export default App;
