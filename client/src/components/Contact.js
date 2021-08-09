import React , {useState,useEffect} from 'react'
// import {useHistory} from 'react-router-dom';
import img10 from '../images/img.png';
const Contact = () => {

        const [userData, setUserData] = useState({name: '',email: '',phone: '',message: ''});
        const callContactPage = async () => {
            try {
                const response = await fetch('/getData',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                const data = await response.json();
               
                if(response.status==400){
                    throw new Error(response.error);
                }else{
                    setUserData({...userData,name: data.name,email: data.email,phone: data.phone});
                    // console.log(userData);
                }
        
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(()=>{
            callContactPage();
        },[]);

        const handleInputs = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setUserData({...userData, [name]:value});
        }

        const contactForm = async (e) => {
            e.preventDefault();
            const {name,email,phone,message} = userData;
            const response = await fetch('/contact',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body : JSON.stringify({name,email,phone,message})
            });
            const data = await response.json();
            if(!data){
                window.alert("Message Failed");
            }else{
                window.alert('Message Sent');
                setUserData({...userData,message:""});
            }
        };

    return (
        <>
          {/* <h1>Hello from Contact side</h1>   */}
              {/* <!-- contact starts  --> */}
            <section id="contact" className="" style={{paddingTop:'100px'}}>
                <div className="container">
                    <div className="row ">
                    <div className="row text-center">
                <div className="col-md-4 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-mobile-alt fa-3x"
                                style={{color: '#5a4433'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>Phone Number</h4>
                            <p>+91 9429064588</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-envelope-square fa-3x" style={{color: '#5a4433'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>E-Mail</h4>
                            <p>jyotsoni0053@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
         
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-map-marker-alt fa-3x" style={{color: '#5a4433'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>Address</h4>
                            <p>Ahmedabad,Gujarat  380027 </p>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="row my-5 text-center">
                        <h1 className="text-capitalize title-text display-3 mt-5">Want to Ask Something !!!</h1>
                            <div className="col-md-6 col-12 mt-5">
                                <iframe title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5552.884615535109!2d72.57976211314656!3d23.065585989896906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1624279319223!5m2!1sen!2sin"
                                    width="600" height="450" style={{border:'0'}} allowFullScreen={false} loading="lazy">
                                </iframe>
                            </div>
                            <div className="col-md-6 col-12" style={{marginTop: '40px'}}>
                                <div className="outer-frame">
                                    <div className="inner-frame">
                                        <form method="POST" className="mt-3">
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <input type="text" id="form6Example1" name="name"
                                                        onChange={handleInputs} placeholder="Your Name"
                                                            className="form-control" autoComplete="off" value={userData.name}/>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form6Example5" name="email"
                                                onChange={handleInputs} placeholder="Email"
                                                    className="form-control" autoComplete="off"  value={userData.email}/>
                                            </div>

                                            {/* <!-- Number input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="number" id="form6Example6" 
                                                onChange={handleInputs} placeholder="Phone" name="phone"
                                                    className="form-control" autoComplete="off"  value={userData.phone}/>
                                            </div>

                                            {/* <!-- Message input --> */}
                                            <div className="form-outline mb-4">
                                                <textarea className="form-control" id="form6Example7" name="message"
                                                onChange={handleInputs} placeholder="Message"
                                                    rows="4" value={userData.message}></textarea>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4 contactimg">

                                                    <figure>
                                                        <img src={img10} style={{height: '100px', width: '100px'}}
                                                            className="img-fluid" alt="img10"/>
                                                    </figure>

                                                </div>
                                                <div className="col-md-8 mt-4 ">
                                                    {/* <!-- Submit button --> */}
                                                    <button type="submit" onClick={contactForm} className="btn contactbtn mb-4">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
    {/* <!-- contact ends  --> */}
        </>
    )
}

export default Contact
