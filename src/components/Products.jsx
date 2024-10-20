import React, { useState } from 'react';
import { axiosInstance } from '../utils/axios';

const Products = () => {
  const [Products, setproducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axiosInstance.get('/products');
      setproducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1>Products</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={getProducts}
      >
        Get products
      </button>
      <div className='w-full flex flex-wrap gap-4'>
        {Products.map((products) => {
          return <div className="w-[300px] h-[200px] rounded flex flex-col items-center justify-center" key={products.id}>
            <div className='w-full h-[80%] flex items-center justify-center overflow-hidden'><img src={products.image} alt={products.title} className='w-full h-full object-cover' /></div>
            <h1>{products.title}</h1>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Products;
