'use client'

import React from "react"
import { useEffect, useState } from "react"
import UserNameList from "../users.json"

const UserList = () => {
    const [username, setUserName] = useState([]);

    const ShowAllUsers = () => {
        const userResult = UserNameList;
        setUserName(userResult)
    }

const deleteCard = (id) => {
    fetch(`userResult${id}`,{
        method : "DELETE"
    }).then(response => {
        response.json();
         alert('Card has been deleted!')
    })
   
    
}



    useEffect(() => {
        ShowAllUsers()
    }, [])


    return (
        <>
            <div className="container">
                <h3>New User List - Add and Delete</h3>

                <div className="row">
                    {username.map((item, index) => {
                        return (
                            <div className="col-md-4 col-12 mb-4 d-flex justify-content-between align-items-top" key={index}>
                                <div className="card w-100">
                                    <h5 className="card-title">{item.id}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.todo}</h5>
                                        <p className="card-texuserIdt">{item.completed}</p>
                                        <p className="card-texuserIdt">{item.userId}</p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href={null} className="btn btn-primary" onClick={() => deleteCard(item.id)}>delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


        </>
    )
}
export default UserList;
