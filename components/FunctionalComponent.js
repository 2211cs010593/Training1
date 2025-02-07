import React from 'react'
import './Styles.css'
function FunctionalComponent(props) {
    console.log(props);
    let applyStyle=props.apply ? 'heading':''
    let inlineStyle={
        color: "white",
    backgroundColor: "blue",
    fontSize:"15px"

    }
  return (
    <div >FunctionalComponent
        <h1 class={'${applyStyle} font-style'}>hello</h1>
        <h1 class={applyStyle}>{props.cname}</h1>
        <h1 style={inlineStyle}>{props.children}</h1>
    </div>
  )
}
export default FunctionalComponent;