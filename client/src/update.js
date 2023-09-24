import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Upadteuser() {
    var { id } = useParams()
    const [roll, setRoll] = useState('')

    useEffect(() => {
        fetch("http://localhost:3662/userupdate/" + id)
            .then(res => res.json())
            .then((output) => {
                setRoll(output[0].roll)
            })
    }, [])

    function handleUpdate(event) {
        event.preventDefault()
        var roll = document.getElementById("roll").value
        console.log(roll);
        var key = { roll: roll }
        console.log(key);

        if (roll == '') {
            alert("Enter the Roll")
        }
        else {
            axios.put('http://localhost:3662/userupdate/' + id, key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data are not updated")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("Data are updateted")
                        window.location.href = '/users'
                        console.log(key)
                    }
                })
            }
    }

    return (
        <>
            <div className='coloor container-fluid'>
                <div className="user-form">
                    <h2>Update Form</h2>
                    <form onSubmit={handleUpdate}>
                        <label>Roll</label>
                        <select id="roll">
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}