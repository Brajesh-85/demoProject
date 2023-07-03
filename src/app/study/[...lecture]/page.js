'use client'
export default function Lectures({ params }) {
    console.log(params)
    return (
        <>
            <h2>Days and Lecture of the colleges</h2>
            <h3>Day : {params.lecture[0]}</h3>
            <h3>Lecture : {params.lecture[1]}</h3>
        </>
    )
}