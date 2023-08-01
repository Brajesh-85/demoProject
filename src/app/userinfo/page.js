"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

const UpdateProductName = () => {
    const [userlist, setUserList] = useState([])

    const UsersList = async () => {
        const URL = await fetch('https://dummyjson.com/users');
        let data = await URL.json();
       // console.log(data);
        if (data.users) {
            setUserList(data.users)
        }
        else {
            setUserList("Data not found!")
        }

    }

    useEffect(() => {
        UsersList();
    }, [])

    function updateCard(id) {
        fetch(`https://dummyjson.com/users/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: "Brajesh",
                lastName: "Kumar",
                address: "Laxmi Nagar Colory, Jaspur, Udham Singh Nagar, Uttarakhand"
            })
        }).then((resp) => {
            resp.json()
           // console.log(resp)
            alert("Card has been updated successfully!")
        })
    }

function addInfo(id){
    fetch(`https://dummyjson.com/users/${id}`,{
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            bike : "Platina"
        })
    }).then ((response) => {
        response.json();
        console.log(response)
    })
}    





    return (
        <>
            <div className="container py-4">
                <h3 className="text-center">Users Information</h3>
                <div className="row">
                    {userlist.map((item, index) => {
                        return (
                            <div className="col-md-4 col-12">
                                <div className="card mb-4" key={index}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center align-items-top"> <img src={item.image} className="w-25" alt="user" /></div>
                                        <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">id : <span className="idCircle">{item.id}</span></h6> */}
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Age : {item.age}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Gender : {item.gender}  </h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Email id : <Link href={`mailto:${item.email}`}>{item.email}</Link></h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Phone No : {item.phone}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Blood Group : {item.bloodGroup}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Height : {item.height}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Weight : {item.weight}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Birth Date : {item.birthDate}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Eye color : {item.eyeColor}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Hair color : {item.hair.color}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Hair type : {item.hair.type}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Domain : {item.domain}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Address : {item.address.address}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">City : {item.address.city}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">University : {item.university}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">card Expire : {item.bank.cardExpire}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">card Number : {item.bank.cardNumber}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">card Type : {item.bank.cardType}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">Currency : {item.bank.currency}</h6>
                                        <a href={null} className="btn btn-primary float-right" onClick={() => updateCard(item.id)}>Update</a>
                                        <a href={null} className="btn btn-primary float-right mx-3" onClick={() => addInfo(item.id)}>Add Info</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}
export default UpdateProductName;