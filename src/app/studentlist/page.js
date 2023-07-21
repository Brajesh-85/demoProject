import Link from "next/link";

const StudentListing = () => {

    const nameList = ["Brajesh", "Prerna", "Himangi", "Rudra"]
    const 
        employees = [
          {id:"1","firstName":"John", "lastName":"Doe"},
          {id:"2","firstName":"Anna", "lastName":"Smith"},
          {id:"3","firstName":"Peter", "lastName":"Jones"}
        ]
console.log(employees)        

    return (
        <>
            <h2>List of Students</h2>
                {employees.map((item, index) => (
                    (
                        <>
                        <ul><li><Link href="" style={{textDecoration:"none"}} key={index}>{item.firstName} {item.lastName}</Link></li></ul>
                        </>
                    )
                )
            )}
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