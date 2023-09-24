import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export function Main() {
    return (
        <>
            <div className="main_bg text-light">
                <h2 className="text-danger text-center p-2"><Typewriter options={{ strings: ['First you Login or Register, For moving to Home page'], autoStart: true, loop: true, }} /></h2>

                <div className="d-flex mains align-items-center ">
                    <div className="bg_color ms-5 ps-5 rounded-5">
                        <div>
                            <div className="d-flex ms-md-5 ps-5 justify-content-center">
                               <div>
                                 <h1 className="text-dark">Click here</h1>
                                
                                    <Link to="/register"><button className="btn mx-3 fs-5 btn-primary"> Register</button></Link>
                                    <Link to="/login"><button className="btn fs-5 mx-3 btn-primary">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}