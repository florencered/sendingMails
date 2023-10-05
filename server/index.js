
const express = require('express')
const app = express() 
const dotenv=require("dotenv").config();
const cors = require('cors');
const port = 4000
const router=express.Router(); 
const bodyParser=require('body-parser');
const sendEmail = require('./controllers/sendEmail');
 

//middleware 
app.use(express.json());  
app.use(bodyParser.json()); 
app.use(cors()); 

//routes     
app.get('/', (req, res) => {
  res.send('backend is running')
}) 
app.post('/api/sendEmail',async (req, res) => {
  //user will enter the email
  //fetching email from the user 
  const {email}=req.body;  
  console.log(req.body);
  try{ 
    const send_to=email; 
    const sent_from="testweb32@gmail.com"; 
    const reply_to=email; 
    const subject="Thankyou message from a  human"; 
    const message=` 
        <h2>hello fellow user</h2> 
        <p>this is a test message for a fellow human being.Thankyou for regsitering 
        with us.We hope to see you become an active member of our society.Thankyou 
        for being a part of our time.This message is long so that it does not end
        up in the spam or te junk folder</p> 
        <p>Regards your fellow human being</p>
    ` 

    await sendEmail(subject,message,send_to,sent_from,reply_to); 
    res.status(200).json({message:"the req sending part is working properly"});
  } 
  catch(error){
    res.status(500).json(error.message);
  }
})

//router.post("/Forget_Password",authController.forgetPassword) ;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})