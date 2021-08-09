import React,{useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom';
// import SigninPic from '../images/signin-image.jpg';
import LoginPic from '../images/james.jpg';
import titlepic from '../images/titlepic.png';
const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const loginUser = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/signin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({
                email,password
            })
        });

        const data = await response.json();
        if(data.error){
            window.alert(`${data.error}`);
        }else if(data.message){
            window.alert(`${data.message}`);
            history.push('/');
        }
    };


    return (
        <>

<section className="py-5 register">
                <div className="container frame">
                    <div className="row offset-1 ">
                        <div className="col-md-7 col-12 d-flex align-items-center justify-content-center flex-column">
                                <div className="title my-3 d-flex justify-content-center align-items-center ">
                                    <h1>Coffee Time</h1>
                                    <figure><img className="img-fluid" alt="login pic" src={titlepic}></img></figure>
                                </div>                               
                                <div className="offset-1">
                                    <form method="POST">
                                        <div class="form-group">                                           
                                            <input type="email" class="form-control" name="email" placeholder="Enter email" autoComplete="off" value={email}
                                            onChange={(e)=>setEmail(e.target.value) }/>
                                        </div>
                                        <div class="form-group">                                        
                                            <input type="password" class="form-control" name="password" placeholder="Password" autoComplete="off" value={password}
                                            onChange={(e)=>setPassword(e.target.value) }/>
                                        </div>
                                  
                                        <div className="d-flex align-items-center text-center">
                                            <button type="submit" class="btn btn-primary registerbtn d-flex align-items-center justify-content-center" onClick={loginUser}>Login</button>
                                            <NavLink to="/register" class="btn btn-primary loginbtn d-flex align-items-center justify-content-center">Register</NavLink>
                                        </div>                                 
                                    </form>
                                </div>
                            
                        </div>
                        <div className="col-md-5 col-12">
                            <figure>
                                <img className="img-fluid" src={LoginPic} alt="Registration"/>
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
        {/* <section className="my sign-in mt-5">
            <div className="container1">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={SigninPic} alt="signin"/></figure>
                        <NavLink style={{fontSize:'20px'}} to="/register" className="signup-image-link">Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="email"><i className="fa fa-user"></i></label>
                                <input type="text" name="email" id="email" placeholder="Your Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value) }
                                autoComplete="off"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="fa fa-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Your Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value) }
                                autoComplete="off"
                                />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"
                                onClick={loginUser}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    )
}

export default Login
