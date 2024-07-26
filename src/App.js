import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
constructor(){
  super();
  this.state=
  {
     mode : 'light',
     text : 'Enable dark mode'
  };
  document.title ="Newsapp";
}



// togglemode = () =>{
//   if(this.state.mode === 'light'){
//     this.setState('dark');
//     document.body.style.backgroundColor='grey';
//   }

//   else{
//     document.body.style.backgroundColor = 'white';
//   }
// }

togglemode = () => {
  this.setState((prevState) => ({
    mode: prevState.mode === 'light' ? 'dark' : 'light',
    text : prevState.mode === 'light' ? 'Enable light mode' : 'Enable dark mode'
  }), () => {
    document.body.style.backgroundColor = this.state.mode === 'dark' ? 'grey' : 'white';
  });
}
  render() {
    return (
    
      <div>
         
          <Router>
         
        <Navbar mode={this.state.mode} text ={this.state.text} togglemode = {()=>this.togglemode()}/>
        <Routes>
  <Route exact path="/" element ={<News key="home" apikey={'c21b4baa4aac43daa704418e3344cbdc'} category={'General'} mode={this.state.mode}/>} />

    <Route exact path="/science" element={<News key='science' apikey={'c21b4baa4aac43daa704418e3344cbdc'} category={'Science'} mode={this.state.mode}/>} />
          
    <Route exact path="/sports" element={<News key ='sports' apikey={'c21b4baa4aac43daa704418e3344cbdc'}  category='Sports' mode={this.state.mode}/>}/>

    

    <Route exact path="/entertainment" element ={<News key ='entertainment' apikey={'c21b4baa4aac43daa704418e3344cbdc'}  category='Entertainment' mode={this.state.mode}/>}/>

    <Route exact path="/business" element ={<News key='business'  apikey={'c21b4baa4aac43daa704418e3344cbdc'}  category='Business' mode={this.state.mode}/>}/>
     
    <Route exact path="/health" element ={<News key='health' apikey={'c21b4baa4aac43daa704418e3344cbdc'}  category='Health' mode={this.state.mode}/>}/>

          
        
    </Routes>
        </Router>
      </div>
    )
  }
}

