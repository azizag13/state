import React,{useState,Component, useEffect} from 'react';
import Bio from './component/Bio'
import Fullname from './component/Fullname'
import Profession from './component/Profession'
import './App.css';
class  App extends Component {
  state ={
    show:false,
    time:0
  }
 hide =() =>this.setState({
   show : ! this.state.show
 })
 componentDidMount =()=>{
   setInterval(()=>{this.setState ({time:this.state.time+1
  }) } ,1000)
 }
 render (){

  return (
    
    <div >
      <button className ='btns'  onClick ={this.hide}>{this.state.show?"Hide":"show"}</button>
      {this.state.show?(
      <>
      <Fullname/>
      <Profession/>
      <Bio/>
      
      <p className="hjh"> {this.state.time}</p>
      </>
      ):(<> </>)
 }
    </div>
  );
}}
export default App ;