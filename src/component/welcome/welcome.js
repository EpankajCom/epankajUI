// import React from 'react';
import './welcome.css';
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {productData && (
        <>
          <div className="image-container">
            <img src={productData.image} alt="Product" className="product-image" />
          </div>
          <div className="info-container">
            <h2 className="product-title">{productData.title}</h2>
            <p className="product-description">{productData.description}</p>
            {/* <p className="product-rating">Rating: {`${productData.rating.rate}/5`}</p> */}
            <p className="product-price">Price: ₹{productData.price}</p>
            <p className="product-offer">Offer: Flat INR 1500 Off on ICICI CreditCards</p>
            <p className="product-delivery">Delivery: FREE delivery Tue, 23 Apr</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
