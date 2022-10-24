import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTumblr, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faWifi } from '@fortawesome/free-solid-svg-icons';
export default function cards() {
    return (
        <div style={{float:"left",paddingLeft:"200px",paddingTop:"100px",backgroundColor:"#707070",width:"100%"}}>
            <h4 style={{float:"left",color:"lightgray"}}>HABER </h4><h6 style={{width:"260px",color:"lightgray"}}>&copy; 2015 Privacy policy</h6>
            <br></br>
            <div >
            <FontAwesomeIcon icon={faTumblr} color="orange" />
            <FontAwesomeIcon icon={faTwitter} color="orange" style={{marginLeft:"20px"}}/>
            <FontAwesomeIcon icon={faYoutube} color="orange" style={{marginLeft:"20px"}}/>
            <FontAwesomeIcon icon={faWifi} color="orange" style={{marginLeft:"20px"}} />
            <FontAwesomeIcon icon={faFacebook} color="orange" style={{marginLeft:"20px"}} />
            <FontAwesomeIcon icon={faGoogle} color="orange" style={{marginLeft:"20px"}} />
            <div>
      <iframe src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" style={{ overflow: "hidden",width:"350px",marginLeft:"300px",marginTop:"-100px",marginLeft:"600px"}} loading="lazy"></iframe> 
      <img src='https://www.iconpacks.net/icons/2/free-up-arrow-icon-3097-thumb.png' height={30} width={30} style={{marginLeft:"50px",marginTop:"-280px"}}/>
        </div>
        </div>
        <br>
        </br>
            </div>
          
       
    )
    
}