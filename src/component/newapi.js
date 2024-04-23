import React, { useState, useEffect } from 'react';

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {product ? (
        <div className="card">
          <img src={product.image} alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductCard;
