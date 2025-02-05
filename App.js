

//function App() {
 // return (
   // <div className="App">
    //<h1>Header</h1>
    //</div>
  //);
//}

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

import React, { Component } from 'react'
import CBCPropEx from'./propsex/CBCPropEx'

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx
        username="Vijay"
        age={20}
        hobbies={["playing","reading books","trading"]}
        address={{city:"sircilla", area:"gandinagar"}}
        senFun={function(){alert("hi iam vijay")}}
        />
      </div>
    )
  }
}




