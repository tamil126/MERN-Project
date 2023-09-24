import React from "react";
import Typewriter from 'typewriter-effect';


export function Booking(){
    return(
        <>
            <div className="book-bg">
            <h1 className="text-danger text-center p-2"><Typewriter options={{ strings: ['Your order is successfully,<br/> Booked😎!'], autoStart: true, loop: true, }} /></h1>

            </div>
        </>
    );
}