'use client'
import React from "react";
import axios from "axios";

export default function FormMethod() {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const author = e.target.author.value;
        const data = { title, body, author };
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response) => {
                console.log(response);
                e.target.reset();
                alert('Form has been submitted successfully!')
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <div className='container'>
                <form name="sendpostrequest" id="contactForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Body</label>
                        <input type="text" name="body" required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" name="author" required className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
