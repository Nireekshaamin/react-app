import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/style.css';

//npm install react-jss --force -> css
import { createUseStyles } from "react-jss";

const cardStyle=createUseStyles({
    h5:{
        textAlign:'center',
        color:'orange'
    }

})
const Get = () => {
  const styles=cardStyle()
  const [data, setData] = useState([])
  useEffect(() => {
  
    fetchdata()
  }, [])
  const fetchdata = async () => {

    const response = await axios.get("https://localhost:7048/api/Cards2");
    setData(response.data)
  }

  return (
    <div className='back' style={{backgroundColor:"lightgray"}}>
      <br></br>
      <h2><center>ADVICE ON HOW TO MAKE WISE INVESTMENTS</center></h2>
      <p><center>A real digital workplace is not fixed to any site or location and should support personnel wherever they are working – even and especially under unexpected conditions.Digital inequality often manifests in people not having equal access to digital services, or not having equal skills in using such services.</center></p>
    <div>
      
      <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginLeft:"200px"}}>
      {data.map((x, index) => (
  <div class="col">
 
    <div class="card" >
  
      <img src="https://www.incimages.com/uploaded_files/image/1920x1080/intro-pan_15365.jpg" class="card-img-top" alt="..."  height={200} style={{border:"10px solid white"}}/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign:"center",color:"orange"}}>{x.title}</h5>
        <p class="card-text">{x.description}</p>
        <center><img src="https://static.vecteezy.com/system/resources/previews/001/186/945/non_2x/orange-arrow-button-png.png" height={30} width={30}/></center>
      </div>
    </div>
    </div>
      ))}
     <div class="col">
    <div class="card">
  
      <img src="https://citistaffmgmt.com/wp-content/uploads/2016/10/img_1-370x252.jpg" class="card-img-top" alt="..." height={200} style={{border:"10px solid white"}}/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign:"center",color:"orange"}}>Recruitment & Talent Acquisiton</h5>
        <p class="card-text">Finding the right employees is an important part of strengthening your business. It can be also considered as very time-consuming and expensive too.</p>
        <center><img src="https://cdn.pixabay.com/photo/2012/04/23/15/47/arrow-38632_960_720.png" height={30} width={30}/></center>
      </div>
    </div>
    </div>
    <div class="card">
   <div class="col">
      <img src="https://www.lawleyinsurance.com/wp-content/uploads/2018/04/medicare2-1024x457.jpg" class="card-img-top" alt="..." height={200} style={{border:"10px solid white"}} />
      <div class="card-body">
        <h5 class="card-title" style={{textAlign:"center",color:"orange"}}>How Can We Help?</h5>
        <p class="card-text">Finding a Medicare plan that fits your needs is a breeze with the right help. Our licensed agents can help answer all your questions hence they will solve all your queries.</p>
        <center><img src="https://cdn.pixabay.com/photo/2012/04/23/15/47/arrow-38632_960_720.png" height={30} width={30}/></center>
      </div>
    </div>
    </div>
      
  </div>
  
  </div>
  <br></br>
  <br></br>
 </div>
  )
}
export default Get;