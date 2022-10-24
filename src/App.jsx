import React from 'react';
//import ClassComp from './Components/ClassComponent';
import './App.css';
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel';
import Cards from './Components/Axios';
import MultipleImage from './Components/MultipleImage';
import Initialcards from './Components/Cards';
import Secondcards from './Components/Cards2';
import Cards3 from './Components/Cards3';
import { Route, Routes} from 'react-router-dom';
import Form from './Components/FormMain';
import Last from './Components/Last';
// 
function App() {
  return (
    <div>
    <NavBar />
    <Carousel/>
    <Initialcards/>
    <br></br>
    <Cards/>
   <Secondcards/>
   <br></br>   <br></br>
   <br></br> 
   <br></br><br></br> 
    <MultipleImage/>
    <br></br><br></br>
    <Form/>
    <Cards3/>
    <Last/>
 
    {/* <Routes>
        <Route path="" element={<FuncComp />}></Route>
         <Route path="classcom" element={<ClassComp />}></Route> 
        </Routes>  */}
        <br>
        </br>
          
          {/* <Footer /> */}
       
    </div>
  );
}

export default App;
