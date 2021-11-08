import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
       <>
<div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
     
        
        <button type="button" className="close close-btn" data-dismiss="modal">&times;</button>
    
        <div className="modal-body md-custom">
               
             
                <form className="login-hide" action="">
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="email" name="" id="" placeholder="Enter your email here"/>
                    </div>
                    <div className="form-group">
                        <label for="">Password</label>
                        <input type="password" name="" id="" placeholder="Type your paasword here"/>
                    </div>
                    
                    <div className="form-inline">
                        <input type="checkbox" name="" id=""/>
                        <p>Remember Me</p>

                        <p className="fgt-btn">Forgot Password?</p>
                    </div>
                   <div className="signup-btn">
                    <button className="sgn-btn btn btn-web hvr-float-shadow"><Link to="/home">Submit</Link></button>
                   </div>
                </form>
                <div className="forgot-password">
                    <h3>Reset your password</h3>
                    <div className="form-group">
                        <label for="">Enter your recovery email here</label>
                        <input type="email" name="" id="" placeholder="Enter your recovery email here"/>
                    </div>
                    <p className="old-password">Or log in with old password</p>
                    <div className="rcvry-btn">
                        <button className="rcv-btn sgn-btn btn btn-web hvr-float-shadow">Send Message</button>
                    </div>
                </div>
                <form className="signup-hide" action="">
                    <h3>Create A New Account</h3>
                    <div className="form-group">
                        <label for="">Full Name</label>
                        <input type="text" name="" id="" placeholder="Enter your name here"/>
                    </div>
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="email" name="" id="" placeholder="Type your email here"/>
                    </div>
                    <div className="form-group">
                        <label for="">Password</label>
                        <input type="password" name="" id="" placeholder="Type your password here"/>
                    </div>
                    <div className="form-group">
                        <label for="">Confirm Password</label>
                        <input type="password" name="" id="" placeholder="Confirm your password"/>
                    </div>
                    
                   <div className="signup-btn">
                    <button className="sgn-btn btn btn-web hvr-float-shadow">Create Account</button>&nbsp;&nbsp;
                    <button className="lgn-btn sgn-btn btn btn-web hvr-float-shadow">Log in</button>
                   </div>
                </form>
              <div className="signup-detail">
                <p className="crt-btn">Create a New Account</p>
                <p>Or sign up with</p>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-google"></i>
              </div>
              <div className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>

            
        </div>
        
   
        
      </div>
    </div>
  </div>







<div className="modal fade" id="doctor-modal">
    <div className="modal-dialog">
      <div className="modal-content">
      
     
        
        <button type="button" className="close close-btn" data-dismiss="modal">&times;</button>
 
        <div className="modal-body md-custom">
               
             
                <form action="">
                    <h3>Register Here</h3>
                    <div className="form-group">
                        <label for="">Your Name</label>
                        <input type="text" name="" id="" placeholder="Your full name"/>
                    </div>
                    <div className="form-group">
                        <label for="">Your Address</label>
                        <input type="password" name="" id="" placeholder="Address"/>
                    </div>
                    
                    <div className="form-group">
                    <label for="">Your Phone No.</label>
                        <input type="text" name="" id="" placeholder="Phone no."/>
                    </div>
                    <div className="form-group">
                      <label for="">Your Speciality</label>
                          <input type="text" name="" id="" placeholder="Speciality"/>
                      </div>
                      <div className="form-group">
                        <label for="">Enter OTP (One Time Password)</label>
                            <input type="text" name="" id="" placeholder="OTP"/>
                        </div>
                   <div className="Register text-center">
                    <button className="btn btn-web hvr-float-shadow">Register</button>
                   </div>
                </form>

            
        </div>
        
    
      </div>
    </div>
  </div>




<div className="modal fade" id="library-modal">
    <div className="modal-dialog">
      <div className="modal-content">
      
     
        
        <button type="button" className="close close-btn" data-dismiss="modal">&times;</button>
    
        <div className="modal-body md-custom">
               
             
                <form action="">
                    <h3>Talk with Us</h3>
                    <div className="form-group">
                        <label for="">Your Name</label>
                        <input type="text" name="" id="" placeholder="Your full name"/>
                    </div>
                    
                    <div className="form-group">
                    <label for="">Your Phone No.</label>
                        <input type="text" name="" id="" placeholder="Phone no."/>
                    </div>
                    <div className="form-group">
                      <label for="">Your Email</label>
                          <input type="email" name="" id="" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label for="">Time And Date</label>
                            <input type="text" name="" id="" placeholder="Time and date"/>
                        </div>
                   <div className="Register text-center">
                    <button className="btn btn-web hvr-float-shadow">Confirm</button>
                   </div>
                </form>

            
        </div>
        
     
        
      </div>
    </div>
  </div>



       </>
    )
}
