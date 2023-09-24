import axios from 'axios';
import React from 'react';

export function Login() {
    function handleSubmit(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        var key = {
            username: username,
            password: password
        }
        if (username == '') {
            alert("Plz,Enter the username")
        }
        else if (password == '') {
            alert("Plz,Enter the password")
        }
        else {
            axios.post("http://localhost:3662/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("plz enter the username or register a new one")
                    }
                    else if (res.data.status === "success") {
                        var roll = res.data.roll
                        alert("successfull Logedin")
                        if (roll === "admin") {
                            window.location.href = `/users`
                        } else if (roll === "user") {
                            window.location.href = `/menu`

                        }
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("plz check your password")
                    }
                    else if (res.data.status === "error") {
                        alert("all the data are invalid")
                    }
                    else {
                        alert("plz register your details first")
                    }
                })
        }
    }

    return (
        <>
            <div className='login-bg'>
                <div className="login-form">
                    <h2 className='text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="forms-group">
                            <label>Username</label><br />
                            <input type="text" id="username" placeholder='Email' required />
                        </div>
                        <div className="forms-group">
                            <label>Password</label><br />
                            <input type="password" id="password" placeholder='Password' required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}