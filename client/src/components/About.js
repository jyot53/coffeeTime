import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom';
import img1 from '../images/beansTransparent1.png';
import img4 from '../images/pngfind.com-milk-carton-png-365545.png';
import img5 from '../images/beans.png';
import img6 from '../images/cinamon.png';
import img7 from '../images/cup.png';
import img8 from '../images/cacao_PNG22.png';
import '../About.css';

const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});
    const callAboutPage = async () => {
        try {
            const response = await fetch('/about',{
                method: 'GET',
                headers: {
                    Accept: 'application/json', 
                    'Content-Type': 'application/json'
                },
                credentials : "include"
            });
    
            const data = await response.json();
           
            if(response.status==400){
                throw new Error(response.error);
            }else{
                setUserData(data);
                // console.log(userData);
            }
    
        } catch (error) {
            console.log(error);
            history.push('/login');  
        }
    }

    useEffect(()=>{
        callAboutPage();
    },[]);

    return (
        <>
            {/* <h1>Hello from about side</h1>
            <h2>{userData.name}</h2> */}
            <header id="aboutHeader">

                {/* <!-- navbar starts --> */}
                {/* <nav className="navbar navbar-expand-lg fixed-top nav-menu">
                    <NavLink to="/" style={{marginLeft: '20px'}}><i className="fas fa-mug-hot fa-3x"></i></NavLink>
                    <button className="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#navbar">
                        <div className="bg-light bar1"></div>
                        <div className="bg-light bar2"></div>
                        <div className="bg-light bar3"></div>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link m-2 menu">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link m-2 menu">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" className="nav-link m-2 menu">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" className="nav-link m-2 menu">Merchandise</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                {/* <!-- navbar ends --> */}

                {/* <!-- banner starts --> */}
                <div className="text-light text-right banner text-center">
                    <p className="main text-center">About Us</p>
                    <p className="main text-center">Welcome {userData.name} To Coffee Time</p>
                </div>
                {/* <!-- banner ends --> */}

            </header>


            <section className="firstsec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12 mx-auto mt-5 text-center">
                            <figure>
                                <img src={img1} alt="Coffee Beans" className="img-fluid"/>
                            </figure>
                            <h1 className="my-4">--------- About <span>Coffee Time </span>---------</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis dolore illum
                                pariatur, aut magnam facilis consectetur nam quas amet inventore porro velit eveniet cum eos
                                illo aliquam temporibus ratione dolor sit amet consectetur, adipisicing elit. Deserunt corporis
                                dolore illum pariatur, aut magnam facilis consectetur nam quas amet</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="middlesec my-5">
                <div className="container-fluid">
                    <div className="row text-center">
                        <span className="mt-4">Coffee Build Your Base</span>
                        <div className="col-md-4">
                            <div className="">
                                <img src={img5} alt="beans"/>
                                <p>Beans</p>
                            </div>
                            <div className="">
                                <img src={img6} alt="cinamon"/>
                                <p>Cinamon</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <img className="mt-5" style={{height: '400px'}} src={img7} alt="Cup"/>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <img src={img8} alt="Cacao"/>
                                <p>Cacao</p>
                            </div>
                            <div className="">
                                <img src={img4} alt="Milk"/>
                                <p className="mt-2">Milk</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="thirdsec">
                <div className="contianer">
                    <div className="row text-center" id="counter">
                        <div className="col-md-3">
                            <span>215</span>
                            <h1>Variety Of Coffee</h1>
                            <p>Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit </p>
                        </div>
                        <div className="col-md-3">
                            <span>115</span>
                            <h1>HOURS OF TESTING</h1>
                            <p>Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit</p>
                        </div>
                        <div className="col-md-3">
                            <span>412</span>
                            <h1>COFFEE MARKETS</h1>
                            <p>Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit</p>
                        </div>
                        <div className="col-md-3">
                            <span>120</span>
                            <h1>COFFEE BRANDS</h1>
                            <p>Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
