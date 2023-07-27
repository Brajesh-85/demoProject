'use client'

import Link from "next/link";

const StudentListing = () => {

    const nameList = ["Brajesh", "Prerna", "Himangi", "Rudra"]
    const 
        employees = [
          {id:"1","firstName":"John", "lastName":"Doe"},
          {id:"2","firstName":"Anna", "lastName":"Smith"},
          {id:"3","firstName":"Peter", "lastName":"Jones"}
        ]
console.log(employees);      

// const nameDelete = (id) => {

//    fetch(`employees/${id}`, {
//     method : "Delete"
//    }).then((res) => {
//            let data = res.json(); 
//            console.log(data)
//    })
//  }   




    return (
        <>
            <h2>List of Students</h2>
            <ul>
                {employees.map((item, index) => (
                    (
                        <>
                        <li className="d-flex py-3"><Link href="" style={{textDecoration:"none"}} key={index}>{item.id} {item.firstName} {item.lastName}</Link>
                            <a href="#" onClick={() => nameDelete(item.id)} className="fs-6 px-3 d-flex justify-content-end align-items-center text-red">delete</a>
                        </li>
                        </>
                    )
                )
            )}
            </ul>
            {/* <ul>
                <li><Link href="/studentlist/brajesh">Brajesh</Link></li>
                <li><Link href="/studentlist/prerna">Prerna</Link></li>
                <li><Link href="/studentlist/himangi">Himangi</Link></li>
                <li><Link href="/studentlist/rudra">Rudra</Link></li>
            </ul> */}
        </>
    )
}
export default StudentListing;