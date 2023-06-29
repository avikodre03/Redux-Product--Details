import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useSelector } from 'react-redux';
import productStore from '../../../Redux/Store';

const ProductDetails = () => {

    const [productDetails, setproductDetails] = useState([{}])
    const navigate = useNavigate();
    const { id, category } = useParams();
    const productData = useSelector((productStore) => {
        return productStore
    })

    useEffect(() => {
        switch (category) {
            case "electronics":
                setproductDetails(productData.electronicProducts.filter((ele) => ele.id == id))
                break;
            case "jewelery":
                setproductDetails(productData.jeweleryProducts.filter((ele) => ele.id == id))
                break;
            case "men's clothing":
                setproductDetails(productData.mensProducts.filter((ele) => ele.id == id))
                break;
            case "women's clothing":
                setproductDetails(productData.womensProducts.filter((ele) => ele.id == id))
                break;
        };
    }, [])
    return (
        // <div className='productDetails'>ProductDetails
        //     <br />
        
        //     {console.log(productDetails)}
        //     <h1>{productDetails[0] && productDetails[0].category}</h1>
        //     <div className="detaisCard">
        //         <img src={productDetails[0] && productDetails[0].image} alt="" height='200px' width="300px" />
        //         <h3>{productDetails[0] && productDetails[0].title}</h3>
        //     </div>
        // </div>
        <>
        {productDetails && (
            <div className="productdetails">
                    <button onClick={() => {
                navigate('/product')
            }
            }>Go back product component</button>
                <div className="productdetails_maincontainer">
                    <div className="topheading">

                        <h2>{productDetails[0] && productDetails[0].category} Category</h2>
                    </div>
                    <div className="lower_maincontainer">
                        <div className="image_container">
                            <img src={productDetails[0] && productDetails[0].image} alt="" />

                        </div>
                        <div className="details_container">
                            <div className="pname">
                                <h3>Product Name</h3>
                                <p>{productDetails[0].title}</p>
                            </div>
                            <div className="pname">
                                <h3>Product Price</h3>
                                <p>${productDetails[0].price}</p>
                            </div>
                            <div className="pname">
                                <h3>Product Description</h3>
                                <p>{productDetails[0].description}</p>
                            </div>
                            <div className="pname">
                                <h3>Product Rating</h3>
                                <p>{productDetails[0].rating && productDetails[0].rating.rate}</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )}
    </>
    )
}

export default ProductDetails