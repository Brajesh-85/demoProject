"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

// const ProductList = () => {
//     const [product, setProduct] = useState([]);
//     const productListing = async () => {
//         let url = await fetch('https://dummyjson.com/products')
//         //  console.log(url.json());
//         let data = await url.json();
//         setProduct(data?.products)
//     }

//     useEffect(() => {
//         productListing();
//     }, [])

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <h3 className="px-4 text-center py-3">showing the products list</h3>
//                     {product.map((item, index) => (
//                         <div className="col-md-4 col-12 mb-4 d-flex justify-content-between align-items-top" key={index}>
//                             <div className="card w-100">
//                                 <img src={item.thumbnail} style={{ height: "250px" }} className="card-img-top" alt="..." />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.title}</h5>
//                                     <p className="card-text">{item.description.length > 20 ? item.description.substr(0, 40) + '...' : 'item.description'}</p>
//                                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                     }
//                 </div>

//             </div>
//         </>
//     )
// }
// export default ProductList;

const productListing = () => {
    const [posts, setPosts] = useState([])

    const postsList = async () => {
        const url = await fetch('https://dummyjson.com/posts', {
            method: "Get"
        })
        let respose = await url.json()
        // console.log(respose)
        setPosts(respose.posts)
    }

    useEffect(() => {
        postsList()
    }, [])


    function deleteCard(id) {
        // alert(id);
        fetch(`https://dummyjson.com/posts/${id}`, {
            method: "DELETE"
        }).then((result) => {
             result.json()
             //postsList()
            alert("card has been deleted successfully!")
        })
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="px-4 text-center py-3">Showing the products list</h3>
                    {posts.map((item, index) => {
                        return (
                            <div className="col-md-4 col-12 mb-4 d-flex justify-content-between align-items-top" key={index}>
                                <div className="card w-100">
                                    <h5 className="card-title">
                                        <ul className="d-flex justify-content-start pt-3 px-2" style={{ listStyleType: "none" }}>
                                            {item.tags.map((item, index) => {
                                                return (
                                                    <li className="fs-6 px-2 text-body-secondary" key={index}>
                                                        <Link href="/">{item}</Link>
                                                    </li>
                                                )
                                            })
                                            }
                                            <li className="d-flex justify-content-end w-100">
                                                <h6 className="card-title float-right idCircle">{item.id}</h6>
                                            </li>
                                        </ul>

                                    </h5>
                                    {/* <img src={item.thumbnail} style={{ height: "250px" }} className="card-img-top" alt="..." /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-texuserIdt">{item.body.length > 20 ? item.body.substr(0, 80) + '...' : 'item.body'}</p>
                                        <a href={null} className="btn btn-primary" onClick={() => deleteCard(item.id)}>delete</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        </>
    )
}

export default productListing;