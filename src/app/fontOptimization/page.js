    'use client'
import { Roboto } from "next/font/google"

const roboto =  Roboto({
    weight : '100',
    subsets : ['latin'],
    display : 'swap'
})


export default function FontOptimization () {
    return (
        <>
            <div className="container p-4">
                <div className="row">
                    <div className="col-12">
                        <h3 className={roboto.className}>Font Optimization in nextjs 13</h3>
                        <h2 style={{fontFamily:'roboto', fontWeight:'100'}}>Font Optimization in nextjs 13</h2>

                    </div>
                </div>
            </div>
        </>
    )
}