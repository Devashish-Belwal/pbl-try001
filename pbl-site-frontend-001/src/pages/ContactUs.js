import React from "react";
import './contactUs.css'; // Import the CSS file
const ContactUs = () => {
  const htmlContent = `
    
  <h2 class="common-heading2">Use the <a href="https://www.google.com/maps/place/Mandakini+Hostel/@12.9866673,80.2396643,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525dc649e0238d:0x7281f9319dd88224!8m2!3d12.9866673!4d80.241853" class="anchor" target="_blank">directions</a> feature to reach to the venue !
  </h2>
  <a href="https://www.google.com/maps?pb=!1m18!1m12!1m3!1d3887.768280536859!2d80.23966431044082!3d12.98666733288462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc649e0238d%3A0x7281f9319dd88224!2sMandakini%20Hostel!5e0!3m2!1sen!2sin!4v1713802542912!5m2!1sen!2sin" target="_blank" style="display:block; width:80%; height:400px; border:none; margin-left:100px;" rel="noopener noreferrer">
  
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.768280536859!2d80.23966431044082!3d12.98666733288462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc649e0238d%3A0x7281f9319dd88224!2sMandakini%20Hostel!5e0!3m2!1sen!2sin!4v1713802542912!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style="border:0" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</a>

    </div>
    <h2 class="common-heading">Contact us</h2>
    <div class="contact-container">
      <p class="name">Name: Shreyansh Mall (Event Head )</a></p>
      
      <p class="email">Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMpwZwGBghtJjGjWkdTxHBVBBnFnLMldLCKTDqCwhLWqTGHfMWlclcrMnRccGSSpcVnnL">23f1002638@ds.study.iitm.ac.in</a></p>
    </div>
  `;

  return (
    <div className="contact-us-container"> {/* Add this div element */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default ContactUs;
