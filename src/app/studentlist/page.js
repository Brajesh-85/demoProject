import Link from "next/link";

const StudentListing = () => {
    return (
        <>
            <h2>List of Students</h2>
            <ul>
                <li><Link href="/studentlist/brajesh">Brajesh</Link></li>
                <li><Link href="/studentlist/prerna">Prerna</Link></li>
                <li><Link href="/studentlist/himangi">Himangi</Link></li>
                <li><Link href="/studentlist/rudra">Rudra</Link></li>
            </ul>
        </>
    )
}
export default StudentListing;