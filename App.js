

//function App() {
 // return (
   // <div className="App">
    //<h1>Header</h1>
    //</div>
  //);
//}

import RefExamples from "./hookexamples/RefExamples";

//export default App;


//!component composition

//import React from 'react'
//import Navbar from './component/Navbar'
//import Main from './component/Main'
//import Sidebar1 from './component/Sidebar1'
//import Sidebar2 from './component/Sidebar2'
//import Footer from './component/Footer'
//const App = () => {
  //return (
    //<div className='app'>
      //<Navbar/>
      //<Main/>
      //<div className='sidebar'>
      //<Sidebar1/>
      //<Sidebar2/>
    //</div>
    //<Footer/>
    //</div>
 // )
//}

//export default App


//!props

// import React, { Component } from 'react'
// import CBCPropEx from'./propsex/CBCPropEx'
// import FBCPropEx from './FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <CBCPropEx
//         username="Vijay"
//         age={20}
//         hobbies={["playing","reading books","trading"]}
//         address={{city:"sircilla", area:"gandinagar"}}
//         senFun={function(){alert("hi iam vijay")}}
//         />
//       </div>
//     )
//   }
// }

// {/* <FBCPropEx
// username="Abhinay"
// isMarried={true}
// hobbies={{"playing","sleeping","eating"}}
// /> */}

// import React from 'react'
// import FBCStateEx from './stateexample/FBCStateEx'
// const App = () => {
//   return (
//     <div>
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App


//import './App.css';

function App() {
  return (
    <div className="App">
      <RefExamples/>
     </div>
  );
}

export default App;



