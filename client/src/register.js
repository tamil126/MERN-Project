import React from "react";
import axios from "axios";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Register() {
    function handlelogin(event) {
        event.preventDefault()
        var roll = document.getElementById("roll").value
        var name = document.getElementById("name").value
        var phone = document.getElementById("phone").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value

        var key = {
            roll: roll,
            name: name,
            phone: phone,
            email: email,
            password: password
        }
        if (name == '') {
            alert("Enter the Name")
        }
        else if (phone == '') {
            alert("Enter the Phone")
        }
        else if (email == '') {
            alert("Enter the Email")
        }
        else if (password == '') {
            alert("Enter the Password")
        }
        else {
            axios.post("http://localhost:3662/register", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data are not inserted")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("Data are inserted")
                        window.location.href = '/login'
                    }
                })
        }
    }

    return (
        <>
            <div className='coloor container-fluid'>
                <div className="user-form">
                    <h1 className="regis_head">Create Account</h1>
                    <form onSubmit={handlelogin}>
                        <div className="form-group d-flex">
                            <h4><pre>ROLL </pre> </h4>
                            <input type="checkbox" id="roll" value="user" />
                                <h5>USER</h5>
                                </div>
                                <div className="form-group">
                                    <h5>Name</h5>
                                    <input type="text" id="name" name="first_name" required />
                                </div>
                                <div className="form-group">
                                    <h5>Phone</h5>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <div className="form-group">
                                    <h5>Email</h5>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <h5>Password</h5>
                                    <input type="password" id="password" name="password" minLength={6} required /><br />
                                    <p> <FontAwesomeIcon icon={faInfo} className="i_icon" />
                                        &nbsp; Passwords must be at least 6 characters.</p>
                                </div>
                                <button type="submit"><h3>Register</h3></button>
                                <div><br />
                                    <p>Already have an account? <Link to="/login" className="btn btn-primary">Sign In</Link> </p>
                                </div>
                            </form>
                        </div>
                </div>
            </>
            );
}