import React from "react";
import Meme from "./Meme/Meme";
import {Routes,Route} from "react-router-dom";
import MemeGenerated from "./MemeGenerated/MemeGenerated";

function App(){
  return (
    <>
        <h1 style={{color:'#fffffe'}}>Meme Generator</h1>
       <Routes>
          <Route exact path='/' element={<Meme/>}>   
          </Route>
          <Route exact path='/generated' element={<MemeGenerated/>}>
          </Route>
      </Routes>

      <h3 style={{color:'#fffffe'}}><a href="https://www.linkedin.com/in/aayush-prajapati-60709a1b0" target="_blank">Connect on Linkedin</a></h3>
    </>
  );
}


export default App;
