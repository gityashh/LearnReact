import React, { useEffect, useState } from 'react'

const Products = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('Products')) || []; // Default to an empty array
        setProducts(products);
    }, []);
    return (
      Products.length > 0 && (
      <div className='flex flex-wrap w-full p-8'>
          {Products.map(product => (
              <div key={product.id}>
                  <h3>{product.Name}</h3>
                  <h5>{product.Price}</h5>
                  <p>{product.Description}</p>
                  <h5>{product.Category}</h5>
              </div>
          ))}
            </div>
      )
  )
}

export default Products
