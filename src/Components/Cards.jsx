import React from 'react';
export default function cards() {
    return (
        <div>
            <br></br>
            <h2><center>OUR FOCUS IS CLIENT'S SUCCESS</center></h2>
    
        <div style={{marginLeft:"150px"}}>
            
            <br></br>
            <div style={{float:"left"}}>
                <center><img src="https://cdn-icons-png.flaticon.com/512/181/181569.png"  height={70} width={70}></img></center>
                <br></br><h3 style={{fontSize:"medium"}}><center>PRIVATE BANKING</center></h3>
                <p style={{width:"200px"}}>Private banking is banking, investment and other services provided by banks and financial institutions </p>
                <center><button className='btn' style={{border:"2px solid orange",color:"orange"}}>Read more</button></center>
        
            </div>
            <div  style={{float:"left",marginLeft:"50px"}}>
            <center><img src="https://brc.org.uk/media/679766/benefits-68.png"  height={70} width={70}></img></center>
                <br></br><h3 style={{fontSize:"medium"}}><center>TIME SAVING TIPS</center></h3>
                <p style={{width:"200px"}}>Individuals often create daily schedules that combine personal and professional responsibilities. </p>
                 
                <center><button className='btn' style={{backgroundColor:"white",border:"2px solid black"}}>Read more</button></center>
                   </div>
            <div  style={{float:"left",marginLeft:"50px"}} >
               <center><img src="https://images.assetsdelivery.com/compings_v2/arhimicrostok/arhimicrostok1707/arhimicrostok170700009.jpg"  height={70} width={70}></img>
               </center><br></br> <h3 style={{fontSize:"medium"}}><center>BUDGETING TIPS</center></h3>
                <p style={{width:"200px"}}>Budgeting is a crucial step toward a healthy financial life. It allows you to look at your monthly income</p>
                <center><button className='btn' style={{backgroundColor:"white",border:"2px solid black"}} >Read more</button></center>
            </div>
            <div style={{float:"left",marginLeft:"50px"}} >
                <center><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd5f9e12-833f-4580-96bd-72f0b5b5c0df/deamgzk-71222a07-3335-476d-a116-5997519ad656.png/v1/fill/w_995,h_803,strp/nicktoons_network_symbol_by_braydennohaideviant_deamgzk-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEwMiIsInBhdGgiOiJcL2ZcL2NkNWY5ZTEyLTgzM2YtNDU4MC05NmJkLTcyZjBiNWI1YzBkZlwvZGVhbWd6ay03MTIyMmEwNy0zMzM1LTQ3NmQtYTExNi01OTk3NTE5YWQ2NTYucG5nIiwid2lkdGgiOiI8PTI2MDYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._k6W-RlfOZEIp566DFjKGnzktjWvri13XQfY0-mhOKs" height={70} width={70}></img>
                </center> <br></br> <h3 style={{fontSize:"medium"}}><center>MONEY SAVING IDEAS</center></h3>
                <p style={{width:"200px"}}>The first step to start saving money is figuring out how much you spend. Keep track of all your expenses</p>
                <center><button style={{backgroundColor:"white",border:"2px solid black"}} className='btn' >Read more</button></center>
            </div>
            </div>
            <br></br> <br></br>
        </div>
        
    )
}