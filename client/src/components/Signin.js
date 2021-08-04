import React from 'react'
import {NavLink} from 'react-router-dom';
import SigninPic from '../images/signin-image.jpg';

const Signin = () => {
    return (
        <>
        <section class="my sign-in mt-3">
            <div class="container1">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={SigninPic} alt="signin"/></figure>
                        <NavLink style={{fontSize:'20px'}} to="/register" class="signup-image-link">Create an account</NavLink>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="fa fa-user"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="fa fa-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Signin
