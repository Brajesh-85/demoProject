'use client'

import React from "react";
import { useForm } from "react-hook-form"

const HookFrom = () => {
    const {register, handleSubmit} = useForm();
    const  onSubmit = (d) =>{
        alert(JSON.stringify(d));
    }

    return (
        <>
         <div className='container mt-3'>
                <form name="sendpostrequest" id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" {...register ("firstName")} required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" {...register ("lastName")} required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">body</label>
                        <input type="text" {...register ("body")} required className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
export default HookFrom;
