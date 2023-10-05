const nodemailer=require('nodemailer');  
// const {google}=require('googleapis'); 
// //////////0auth  part/////////////
// const CLIENT_ID= process.env.CLIENT_ID;
// const CLIENT_SECRET=process.env.CLIENT_SECRET;
// const REFRESH_TOKEN=process.env.REFRESH_TOKEN;
// const REDIRECT_URI="https://developers.google.com/oauthplayground"; 
// const MY_EMAIL=process.env.EMAIL_USER; 
// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// ); 
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
//create a function to take user input values 
const sendEmail=async (subject,message,send_to,sent_from,reply_to)=>{ 
  //const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST, 
        //service:"gmail",
        port: "587",
        //secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net> 
          // type: "OAuth2",
          user: process.env.EMAIL_USER,
          pass:process.env.EMAIL_PASS, 
          // clientId: CLIENT_ID,
          // clientSecret: CLIENT_SECRET,
          // refreshToken: REFRESH_TOKEN,
          // accessToken: ACCESS_TOKEN,
        }, 
        tls:{
            rejectUnauthorized:false,
        }
      });  
      const options={
        from:sent_from,
        to:send_to,
        replyTo:reply_to,
        subject:subject,
        html:message
      } 
      //send email
      transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err);
        } 
        else{
            console.log(info);
        }
      })
     
      
} 
module.exports=sendEmail;