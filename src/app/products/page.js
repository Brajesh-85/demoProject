"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import LoadingCard from '/components/loading'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)


    const productListing = async () => {
        let url = await fetch('https://dummyjson.com/products')
        //  console.log(url.json());
        let data = await url.json();
        setProduct(data?.products)
    }

    useEffect(() => {
        productListing();
    }, [])

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    function addInfo() {
        fetch(`https://dummyjson.com/products/add`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Brajesh",
                lastName: "Kumar"
            })
        }).then((resp) => {
            resp.json()
           // console.log(resp)
            alert('New record has been created successfully!')
        })
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-9 mb-2">
                        <h3 className="px-1 text-left py-3">Products List</h3>
                    </div>

                    <div className="col-md-6 col-3 d-flex align-items-center justify-content-end">
                        <Link href="#" className="btn btn-primary float-end" onClick={() => addInfo()}>Add</Link>
                    </div>
                    {loading ? <LoadingCard /> :
                        <>
                            {product.map((item, index) => (
                                <div className="col-md-4 col-12 mb-4 d-flex justify-content-between align-items-top" key={index}>
                                    <div className="card w-100">
                                        {/* <img src={item.thumbnail} style={{ height: "250px" }} className="card-img-top" alt="..." /> */}
                                        <LazyLoadImage
                                            src={item.thumbnail}
                                            className="card-img-top"
                                            effect="blur"
                                            style={{ height: "250px", borderRadius:"20px", padding:"10px 10px 0 10px", border:"1px solid #fcfcfc"}}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description.length > 20 ? item.description.substr(0, 40) + '...' : 'item.description'}</p>
                                            <a href="" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </>
                    }


                </div>
            </div>
        </>
    )
}
export default ProductList;

