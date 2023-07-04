"use client"
import { useEffect, useState } from "react"

const ProductList = () => {
    const [products, setProducts] = useState([])

    const getProductList = async () => {
        let url = await fetch("https://dummyjson.com/products")
        let data = await url.json();
        //console.log(data)
        setProducts(data.products)
    }
    useEffect(() => {
        getProductList();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="px-4 text-center py-3">showing the products list</h3>
                    {products.map((item, index) => (
                        <div className="col-md-4 col-12 mb-4 d-flex justify-content-between align-items-top">
                            <div className="card" key={index}>
                                <img src={item.thumbnail} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
    )
}
export default ProductList;