import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <!-- footer starts  --> */}

    <footer className="text-center text-white" style={{backgroundColor: '#c7a17a'}}>
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
         
            <section className="mb-4">
            
                <NavLink className="btn btn-link btn-floating btn-lg text-light m-1" to="#!" role="button"
                    data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></NavLink>

                
                <NavLink className="btn btn-link btn-floating btn-lg text-light m-1" to="#!" role="button"
                    data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></NavLink>

                <NavLink className="btn btn-link btn-floating btn-lg text-light m-1" to="#!" role="button"
                    data-mdb-ripple-color="dark"><i className="fab fa-google"></i></NavLink>

              
                <NavLink className="btn btn-link btn-floating btn-lg text-light m-1" to="#!" role="button"
                    data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></NavLink>
            </section>
        </div>

        <div className="text-center text-light p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2021 Copyright:
            <NavLink className="text-light" to="#"> Coffee Time</NavLink>
        </div>
    </footer>
        </>
    )
}

export default Footer
