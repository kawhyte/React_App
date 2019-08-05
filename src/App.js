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
}


  render(){

    const filteredRobots = this.state.robots.filter(robot =>{
    
      return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
    });
  
    console.log(filteredRobots);

  return (
    <div className='tc'>
      <h1 className='f1'> Monsters</h1>
      <Searchbox searchChange ={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
    </div>
  );


  }
  
};

export default App;
