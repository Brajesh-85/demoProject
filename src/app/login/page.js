"use client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginPage = () => {
    const [name, setName] = useState(" ");
    const [password, setPassword] = useState(" ")

    const customToast = () =>
        toast.success("Login Successful", {
            position: "top-center",
            autoClose: 5000,
        })

    const handleSubmit = () => {
        // e.prevantDefault();

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            })
        })
        .then(res => res.json())
        toast.success("Login Successful", {
            position: "top-center",
            autoClose: 1000,
        })
    }

    return (
        <>
            <Header />
            <div className="container p-5">
                <div className="card p-4 mx-auto" style={{ width: "300px" }}>
                    <div className="row">
                        <div className="col-12 mb-3 text-left">
                            <h5>Login</h5>
                        </div>
                        <div className="col-md-12 col-12 mb-3">
                            <label className="form-label">Name</label>
                            <input type="name" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-12 col-12">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-md-6 col-12 mt-4 text-left">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;