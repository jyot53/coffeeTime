import React , {useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom';
// import SignupPic from '../images/signup-image.jpg';
import SignupPic from '../images/regsitrationpic.jpg';
import titlepic from '../images/titlepic.png';

const Registration = () => {

    const history = useHistory();

    const [user,setUser] = useState({
        name : "", email : "", phone : "",work:"",password : "", cpassword : ""
    });
    let name,value;
    const handleInputs = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value});
    };

    const postData = async (e) => {
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} = user;
        
        const response = await fetch('/register',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data = await response.json();
        if(data.error){
            window.alert(`${data.error}`);
        }else if(data.message){
            window.alert(`${data.message}`);
            history.push('/login');
        }
    };

    return (
        <>

            <section className="py-5 register">
                <div className="container frame">
                    <div className="row offset-1">
                        <div className="col-md-5 col-12">
                            <figure>
                                <img className="img-fluid" src={SignupPic} alt="Registration"/>
                            </figure>
                        </div>
                        <div className="col-md-7 col-12">
                                <div className="title text-center my-3 d-flex justify-content-center align-items-center ">
                                    <h1>Coffee Time</h1>
                                    <figure><img className="img-fluid" alt="register pic" src={titlepic}></img></figure>
                                </div>                               
                                <div className="offset-1">
                                    <form method="POST">
                                        <div class="form-group">                                           
                                            <input type="text" class="form-control" name="name" placeholder="Your Name" autoComplete="off"
                                            value={user.name}
                                            onChange={handleInputs}
                                            />
                                        </div>
                                        <div class="form-group">                                           
                                            <input type="email" class="form-control" name="email" placeholder="Your email" autoComplete="off" value={user.email}
                                            onChange={handleInputs}/>
                                        </div>
                                        <div class="form-group">                                            
                                            <input type="number" class="form-control" name="phone" placeholder="Your Phone Number" autoComplete="off" value={user.phone} onChange={handleInputs}/>
                                        </div>
                                        <div class="form-group">                                            
                                            <input type="text" class="form-control" name="work" placeholder="Your Work" autoComplete="off" value={user.work} onChange={handleInputs}/>
                                        </div>
                                        <div class="form-group">                                        
                                            <input type="password" class="form-control" name="password" placeholder="Your Password" autoComplete="off" value={user.password}
                                            onChange={handleInputs}/>
                                        </div>
                                        <div class="form-group">
                                            
                                            <input type="password" class="form-control" name="cpassword" placeholder="Confirm Password" autoComplete="off" value={user.cpassword}
                                            onChange={handleInputs}/>
                                        </div>
                                        <div className="d-flex align-items-center text-center">
                                            <button type="submit" class="btn btn-primary registerbtn d-flex align-items-center justify-content-center" onClick={postData}>Register</button>
                                            <NavLink to="/login" class="btn btn-primary loginbtn d-flex align-items-center justify-content-center">Login</NavLink>
                                        </div>
                                  
                                    </form>
                                </div>
                            
                        </div>
                    </div>
                </div>

            </section>








        {/* <section className="my signup mt-5">
            <div className="container1">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="fa fa-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="fa fa-envelope"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"><i className="fa fa-phone"></i></label>
                                <input type="number" name="phone" id="phone" placeholder="Your Phone" autoComplete="off"
                                value={user.phone}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work"><i className="fa fa-briefcase"></i></label>
                                <input type="text" name="work" id="work" placeholder="Your Work" autoComplete="off"
                                value={user.work}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="fa fa-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Your Password" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword"><i className="fa fa-lock"></i></label>
                                <input type="password" name="cpassword" id="cpassword" placeholder="Repeat your password" autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}
                                />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData}/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={SignupPic} alt="sing up pic"/></figure>
                        <NavLink style={{fontSize:'20px'}} to="/login" className="signup-image-link">I am already member</NavLink>
                    </div>
                </div>
            </div>
        </section>  */}
        </>
    )
}

export default Registration
