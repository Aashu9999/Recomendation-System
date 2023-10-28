import React, { useState } from 'react'

const Detail = () => {
  const purple = "#800080";
  const text = "Click Me";
  const[bg, setBg] = useState(purple);
  const[txt, setTxt] = useState(text);
  const[detail, setDetail] = useState("Click Up to Download the File");

  const[add, setAdd] = useState(0);

     const ChangeBackground = () =>{

      let newBg = "#34495e";
      let newTxt = "OMG ";
      let newDetail = "The file is downloading";
      setBg(newBg);
      setTxt(newTxt);
      setDetail(newDetail);
      
           
     };

  return (
    <div className='main_color' style={ {backgroundColor : bg,  } }>
     
           
        
        <button className='btn' onClick={ChangeBackground}>{txt}</button>

        <h1>{ detail }</h1>

        <div className="new">
          <button className='btn' onClick={()=>setAdd(add+1)}>+</button>
          <h1>{ add }</h1>
          <button className='btn' onClick={ () => (add===0) ? setAdd(0) : setAdd(add-1)}>-</button>
        </div>
      
    </div>
  )
}

export default Detail
