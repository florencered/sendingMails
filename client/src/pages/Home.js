import React, { useState } from 'react'; 


const Home = () => {  
  const [email,setEmail]=useState("");
  const sendEmail= async (e)=>{  
    e.preventDefault();  
    // i need to send json data basically 
    const data={
      email
    }; 
    const response = await fetch("/api/sendEmail", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "no-cors", // no-cors, *cors, same-origin(DONT USE IT )
      headers: {
        "Content-Type": "application/json", 
        // 'Content-Type': 'application/x-www-form-urlencoded', 
        "Access-Control-Origin": "*",
        "accepts":"application/json"
      }, 
      
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
    
    ); 

  
  //console.log(response.json); 
  //const json = await response.json()

    if (!response.ok) {
      console.log("error");
    }
    if (response.ok) {
      console.log("good to go")
    }
  



  }
  return (
    <div> 
    <form onSubmit={sendEmail}>
    <h1>Sending Mails</h1>  
    <label  >Enter your valid email:</label><br/>
    <input placeholder='enter your email'type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
    <button type='submit'>SUBMIT</button>
    </form>
    
  </div>
  )
}

export default Home