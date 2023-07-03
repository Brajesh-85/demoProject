'use client'

const StudentListing = ({ params }) => {
    console.log(params)
    return (
        <>
            <h2>Student's details</h2>
            <h3>Name of student is {params.student}</h3>
        </>
    )
}
export default StudentListing;