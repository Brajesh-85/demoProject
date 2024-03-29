"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"


const Register= () => {
   // const LoginPage[name, setName] = useState(" ");
    const [password, setPassword] = useState(" ")
   

    async function userLogin() {
        let item = {name, password}
        //fetch('https://dummyjson.com/auth/login', {
          //  method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify({
                //username: 'kminchelle',
                //password: '0lelplR',
                // expiresInMins: 60, // optional
            //})
        //})
          //  .then(res => res.json())
            //.then(console.log);

            console.log("data :- ", name, password)
    }




    return (
        <>
            <Header />
            <div className="container p-5">
                <div className="card p-4 mx-auto" style={{width : "300px"}}>
                    <div className="row">
                        <div className="col-12 mb-3 text-left">
                            <h5>Register</h5>
                        </div>
                        <div className="col-md-12 col-12 mb-3">
                            <label className="form-label">Name</label>
                            <input type="name" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-12 col-12 mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-12 col-12">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-md-6 col-12 mt-4 text-left">
                            <button type="submit" onClick={userLogin} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;