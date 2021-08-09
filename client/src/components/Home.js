import React from 'react'
import {NavLink} from 'react-router-dom';
import img1 from '../images/—Pngtree—creative flat coffee cup silhouette_5569828.png';
import img2 from '../images/coffee1.PNG';
import img3 from '../images/Coffee Lover_Monochromatic.png';
import img4 from '../images/coffee2.PNG';
import img5 from '../images/coffee3.PNG';
import img6 from '../images/coffee4.PNG';
import img7 from '../images/coffee5.PNG';
import img8 from '../images/coffee6.PNG';
import img9 from '../images/105381-OMRNIP-573.jpg';
import img10 from '../images/img.png';
import topcat1 from '../images/topcat1.png';
import topcat2 from '../images/topcat2.png';
import topcat3 from '../images/topcat3.png';
import topcat4 from '../images/topcat4.png';
import topcat5 from '../images/topcat5.png';
import topcat6 from '../images/topcat6.png';
import topcat7 from '../images/topcat7.png';
import topcat8 from '../images/topcat8.png';
import topcat9 from '../images/topcat9.png';

const Home = () => {
    return (
        <>
           {/* <h1 className="mt-5">Hello from home side</h1>  */}
           <header>

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
            <div className="headerimg">
                <img className="img-fluid" src={img1}
                    alt="vector coffee"/>
            </div>
            <h1 className="display-4 text-center font-weight-bold heading">Welcome to <span>Coffee Time</span></h1>
            <p className="main text-center">the best coffee in the world</p>
            <button className=" headerbtn btn btn-style btn-light btn-lg btn-outline-warning">Read More</button>
        </div>
        {/* <!-- banner ends --> */}

    </header>


    {/* <!-- explore starts --> */}
    <section id="explore" className="py-5">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-6 col-12 my-5 text-center">
                    <h3 className="text-uppercase title-text mt-5 " data-aos="flip-left"> <span>enjoy</span></h3>
                    <h2 className="text-uppercase title-text"> Our Store</h2>
                    <img style={{height: '50px', width: '50px', borderRadius: '50%'}} src={img2}
                        alt="black coffee"/>
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, explicabo saepe
                        repudiandae alias a totam fugiat pariatur, esse laborum ab magni autem eveniet. Eum laboriosam
                        fugit fuga vero dolorem pariatur!</p>

                    <NavLink to="#">About Us</NavLink>
                </div>
                <div className="col-md-6 col-12 justify-content-md-end exploreimg" data-aos="fade-left">
                    <figure>
                        <img src={img3} alt="coffee lover"/>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- explore ends --> */}



    {/* <!-- about section starts  --> */}
    <section id="about" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12 my-5 text-center">
                    <h1 className="text-uppercase title-text display-3">About us</h1>
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit
                        dolores vel consectetur in? Ipsam aliquid quaerat eligendi deleniti eius, culpa tempora
                        reiciendis incidunt accusantium cupiditate similique ex!</p>
                    <NavLink to="#" className="btn my-4 text-captalize">Know More</NavLink>
                </div>
                <div className="col-md-6 aboutimages col-12 my-5 d-none d-lg-block">
                    <img src={img4} alt="" className="img1 img-thumbnail aboutimg"/>
                    <img src={img5} alt="" className="img2 img-thumbnail aboutimg"/>
                    <img src={img6} alt="" className="img3 img-thumbnail aboutimg"/>
                    <img src={img7} alt="" className="img4 img-thumbnail aboutimg"/>
                    <img src={img8} alt="" className="img5 img-thumbnail aboutimg"/>
                </div>
                {/* <!--data-aos="zoom-in"--> */}
            </div>
        </div>
    </section>
    {/* <!-- about section ends  --> */}

    {/* <!-- top categories starts --> */}

    <section id="topcat">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-3 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-plane fa-3x"
                                style={{color: '#5a4433', marginTop: '20px', transform: 'rotate(-30deg)'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>Free Shipping</h4>
                            <p>On order over $100</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-wallet fa-3x" style={{color: '#5a4433', marginTop: '20px'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>Cash on delivery</h4>
                            <p>100% Money back gurantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-gift fa-3x" style={{color: '#5a4433', marginTop: '20px'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>Special Gift Card</h4>
                            <p>Offer Special bonuses</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="row mt-5 topcatheader">
                        <div className="col-md-3 col-6 text-center my-auto">
                            <i className="fas fa-headphones fa-3x" style={{color: '#5a4433', marginTop: '20px'}}></i>
                        </div>
                        <div className="col-md-9 col-6">
                            <h4>24/7 Service</h4>
                            <p>Call us at - 9429064588</p>
                        </div>
                    </div>
                </div>
                <div className="text-center topcatheading">
                    <h1>Top Categories</h1>
                </div>
            </div>

            <div className="row justify-content-center text-center mt-5 pb-5">
                <div className="col-md-4 col-12 catimg text-center" id="catimg1">
                    <h3>Latte</h3>
                    <hr className="mx-auto"/>
                    <NavLink to="#">View More</NavLink>
                </div>
                <div className="col-md-4 col-12 catimg" id="catimg2">
                    <h3>Mocha</h3>
                    <hr className="mx-auto"/>
                    <NavLink to="#">View More</NavLink>
                </div>
                <div className="col-md-4 col-12 catimg" id="catimg3">
                    <h3>Cappacino</h3>
                    <hr className="mx-auto"/>
                    <NavLink to="#">View More</NavLink>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- top categories ends --> */}

    {/* <!-- products starts  --> */}
    <section className="" id="products">
        <div className="container">
            <div className="col-md-12 col-12 text-center py-5">
                <h2 className="productheading mb-5">Top Products</h2>
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item active">
                        <button className="btn btn-style rounded-pill nav-link active" id="home-tab" data-toggle="tab"
                            to="#featured" role="tab" aria-controls="home" aria-selected="true">Featured</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-style rounded-pill nav-link" id="profile-tab" data-toggle="tab"
                            to="#bestseller" role="tab" aria-controls="profile" aria-selected="false">Best
                            Seller</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-style rounded-pill nav-link" id="contact-tab" data-toggle="tab"
                            to="#latest" role="tab" aria-controls="contact" aria-selected="false">Latest</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="home-tab">
                        {/* <!-- Featured --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-12 featured" id="featured1">
                                    <div className="discount1 ">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2"
                                            style={{display: 'flex', justifyContent: 'start',  backgroundColor: '#5a4433', color: '#fff'}}>-10%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat1} className="img-fluid mt-5" alt="featured-1"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="featured2">
                                    <div className="discount2">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2"
                                            style={{display: 'flex', justifyContent: 'start',  backgroundColor: '#5a4433', color: '#fff'}}>-15%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat2} className="img-fluid mt-5" alt="featured-2"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="featured3">
                                    <div className="discount3">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2"
                                            style={{display: 'flex', justifyContent: 'start',  backgroundColor: '#5a4433', color: '#fff'}}>-5%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat3} className="img-fluid mt-5" alt="featured-3"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="featured4">
                                    <div className="discount4 ">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2"
                                            style={{display: 'flex', justifyContent: 'start',  backgroundColor: '#5a4433', color: '#fff'}}>-5%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat4} style={{height: '150px',
                                        width: '150px'}} className="img-fluid mt-5" alt="featured-4"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="bestseller" role="tabpanel" aria-labelledby="profile-tab">
                        {/* <!-- Best Seller --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-12 featured" id="bestseller1">
                                    <div className="discount1 ">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-5%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat5} className="img-fluid mt-5" alt="bestseller-1"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="bestseller2">
                                    <div className="discount2">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-15%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat6}className="img-fluid mt-5" alt="bestseller-2"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="bestseller3">
                                    <div className="discount3">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-5%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat7} className="img-fluid mt-5" alt="bestseller-3"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="bestseller4">
                                    <div className="discount4 ">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-10%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat8} style={{height: '150px',
                                        width: '150px'}} className="img-fluid mt-5" alt="bestseller-4"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="contact-tab">
                        {/* <!-- Latest --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-12 featured" id="latest1">
                                    <div className="discount1 ">
                                        <button className="dis btn btn-style btn-sm rounded-pill mt-2">-5%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat1} className="img-fluid mt-5" alt="latest-1"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="latest2">
                                    <div className="discount2">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-10%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat2} className="img-fluid mt-5" alt="latest-2"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="latest3">
                                    <div className="discount3">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-8%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat9} className="img-fluid mt-5" alt="latest-3"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 featured" id="latest4">
                                    <div className="discount4 ">
                                        <button className="btn btn-style btn-sm rounded-pill mt-2">-15%</button>
                                    </div>
                                    <figure>
                                        <img src={topcat6} style={{height: '150px',
                                        width: '150px'}} className="img-fluid mt-5" alt="latest-4"/>
                                    </figure>
                                    <div className="star mt-5">
                                        <i className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i><i className="far fa-star"></i><i
                                            className="far fa-star"></i>
                                        <p className="mt-2">Irish Coffee</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-12" style={{display: 'flex', justifyContent: 'start'}}>
                                            <i className="fas fa-cart-plus fa-2x" style={{color: '#5a4433'}}></i>
                                        </div>
                                        <div className="cartprice col-md-8 col-12">
                                            <p>Rs 150.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- products ends  --> */}


    {/* <!-- contact starts  --> */}
    <section id="contact" className="pb-5">
        <div className="container">
            <div className="row ">
                {/* <!-- <h1 className="mt-4 topcatheading">Contact Us</h1> --> */}
                <div className="col-md-6 col-12 mt-5 justify-content-start">
                    <div className="text-right mt-4">
                        <h1 className="contactHeading">Contact</h1>
                        <p><i className="fas fa-map-marker-alt"></i>Ahmedabad , Gujarat - 380027</p>
                        <p><i className="fas fa-phone-alt"></i>+91 9429064588</p>
                        <p><i className="fas fa-envelope"></i>jyotsoni0053@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-6 col-12 mt-5">
                    <figure>
                        <img src={img9} style={{height: '300px'}} className="img-fluid"
                            alt="contact us"/>
                    </figure>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12 mt-5" data-aos="fade-right">
                        <iframe title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5552.884615535109!2d72.57976211314656!3d23.065585989896906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1624279319223!5m2!1sen!2sin"
                            width="600" height="450" style={{border:'0'}} allowFullScreen={false} loading="lazy">
                        </iframe>
                    </div>
                    <div className="col-md-6 col-12" style={{marginTop: '40px'}}>
                        <div className="outer-frame" data-aos="fade-left" data-aos-duration="2000">
                            <div className="inner-frame">
                                <form action="" className="mt-3">
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form6Example1" placeholder="First Name"
                                                    className="form-control" autoComplete="off"/>
                                                {/* <!-- <label className="form-label" for="form6Example1">First name</label> --> */}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form6Example2" placeholder="Last Name"
                                                    className="form-control" autoComplete="off"/>
                                                {/* <!-- <label className="form-label" for="form6Example2">Last name</label> --> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form6Example5" placeholder="Email"
                                            className="form-control" autoComplete="off"/>
                                        {/* <!-- <label className="form-label" for="form6Example5">Email</label> --> */}
                                    </div>

                                    {/* <!-- Number input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="number" id="form6Example6" placeholder="Phone"
                                            className="form-control" autoComplete="off"/>
                                        {/* <!-- <label className="form-label" for="form6Example6">Phone</label> --> */}
                                    </div>

                                    {/* <!-- Message input --> */}
                                    <div className="form-outline mb-4">
                                        <textarea className="form-control" id="form6Example7" placeholder="Message"
                                            rows="4"></textarea>
                                        {/* <!-- <label className="form-label" for="form6Example7">Additional information</label> --> */}
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
                                            <button type="submit" className="btn contactbtn mb-4">Send Message</button>
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

export default Home
