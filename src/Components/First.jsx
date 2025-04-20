//import React from 'react';
import { Link } from "react-router-dom";


const First = () => {
  return (
    <>
      <div className="image" style={{ 
        backgroundImage: 'url(/image2.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
    </div>
    <div className="container">
    
      <div className="content" style={{marginLeft:"450px"}}>
      {/* <img src="/pixelcut-export.png" alt="Logo" className="logo" style={{width:"430px", height:"430px", }}/> */}

        <h1 style={{ textAlign: "center", color:"black" }}>Welcome To KnowAFest!!!</h1>
        
        <button className="get-started-button" style={{backgroundColor:"#FF7D29",marginLeft:"250px"}}>
          <Link to="/Signup" style={{ fontWeight: "bold" }}>GET STARTED</Link>
        </button>
      
    </div>
    </div>
    
    </>
  );
}

export default First;


<style>
  
.container {
    `display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100%;
  `
}

.content {
  `text-align: center;
  `
}

.get-started-button {
  `padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;`
}

.get-started-button:hover {
  `background-color: #ffa07a;`
}

</style>












