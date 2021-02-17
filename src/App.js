import './App.css';
import React, { Component, useState,PureComponent,createRef } from 'react';
import User from './User';
import Student from './Student';
import {CommonContext} from './components/CommonContext'
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';

/* Constructor life cycle method */
// class App extends Component {
//   constructor()
//   {
//     super(); //parent ko call krne k lie super use krte h
//     this.state = {
//       data:"Anshul"
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World! {this.state.data}</h1>
//         <User/>
//       </div>

//     )
//   }

// }

// export default App;

/* ComponentDidMount life cycle method */
class App extends Component {
// class App extends PureComponent {

  constructor() {
    super();
    this.updateColor=(color)=>{
      this.setState({
        color:color
      })
    }

    this.state = {
      //  count: 1
    //  show:true
    color:'green',
    updateColor:this.updateColor
    }

 

    //useRef
  //  this.inputRef=createRef();

  }

  componentDidMount() {
   // console.log("ComponentDidMount"); //sirf ek bar chlega jab hmara dom ready hoga bar bar ni chlega
  //  console.log(this.inputRef.current.value="1000"); 
   }

  // componentDidUpdate(prevProps,prevState,snapshot) {
  //   console.log("componentDidUpdate",prevState); //jab b jitni bar component update hoga tbi chlega,
  //   // if (this.state.count<10) {
  //   //   this.setState({count:this.state.count+1});
  //   // }
  // }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate", this.state.count); //It comes in updating phase, Hm isme conditions b lga skte hain, by default ye false hota h
  //   if (this.state.count < 5 && this.state.count < 10) {
  //     return true;
  //   }
  // }

// getVal(){
//   console.log(this.inputRef.current.value);
//   this.inputRef.current.style.color ="red";
//   this.inputRef.current.style.backgroundColor ="black";
// }

// Context API with example

  render() {
    // console.log("Render");



    return (
      <div className="App">
        {/* <h1>Component Did Mount {this.state.name}</h1> */}
      {/* {
        this.state.show?<Student/>:<h1>Child Component Removed</h1>
      }
        <button onClick={() => this.setState({ show: !this.state.show})}>Toggle Child Component</button> */}


         {/*  Pure component in ReactJs */}
         {/* <User count={this.state.count}/>
      <button onClick={()=> this.setState({count:1})}>Update Count</button>  */}

        {/* Ref with Example */}
        {/* <h1>Ref with Example</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=> this.getVal()}>Check Ref</button> */}

        {/* Context API with example */}
        <CommonContext.Provider value={this.state}>
        <Header/>
        <CommonContext.Consumer>
                {
                    ({color})=>(
                     <h1 style={{ backgroundColor:color}}> Context API with example</h1>
                    )
                }
            </CommonContext.Consumer>
       
        <Main/>
        <UpdateButton/>
        <Footer/>
        </CommonContext.Provider>








      </div>

    )
  }

}

export default App;




















/* Render life cycle method */
// function App() {

//   const [name,setName]=useState("Anshul");

//   return (
//     <div className="App">
//              <h1>Render Method in React! </h1>
//             <User />
//             {/* <button onClick={()=>setName("Manish")}>Update Name</button> */}
//           </div>
//   );
// }

// export default App;