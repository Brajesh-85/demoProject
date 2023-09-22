'use client'
import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul style={{display:"flex", justifyContent:"flex-end", listStyle:"none", alignItems :"center"}}>
                        <li>
                            <Link href={'/login'} className="navbar-text px-4" style={{ cursor: "pointer" }}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href={'/register'} className="navbar-text" style={{ cursor: "pointer" }}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}