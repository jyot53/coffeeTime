import React , {useState} from 'react'
import {NavLink} from 'react-router-dom';
import SignupPic from '../images/signup-image.jpg';

const Registration = () => {

    const [user,setUser] = useState({
        name : " ", email : " ", password : " ", cpassword : " ",
    });

    return (
        <>
        <section className="my signup mt-3">
            <div className="container1">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i class="fa fa-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i class="fa fa-envelope"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone"><i class="fa fa-phone"></i></label>
                                <input type="number" name="phone" id="phone" placeholder="Your Phone"/>
                            </div>
                            <div className="form-group">
                                <label for="work"><i class="fa fa-briefcase"></i></label>
                                <input type="text" name="work" id="work" placeholder="Your Work"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i class="fa fa-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i class="fa fa-lock"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={SignupPic} alt="sing up pic"/></figure>
                        <NavLink style={{fontSize:'20px'}} to="/signin" class="signup-image-link">I am already member</NavLink>
                    </div>
                </div>
            </div>
        </section> 
        </>
    )
}

export default Registration
