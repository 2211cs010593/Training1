import React from 'react'

 const FBCStateEx = () => {
    const [value , setValue] =React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);

    }
  return (
    <div>FBCStateEx
        <hi>{value}</hi>
        <button onClick={changeValue}>changevalue</button>
    </div>
  )
}

export default FBCStateEx