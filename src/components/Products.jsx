import React, { useState} from 'react';
import { axiosInstance } from "../utils/axios"

const Products = () => {
    const getProducts = async () => {
        const res = await axiosInstance.get("/products")
        console.log(res.data);
    }
  return (
    <div className='w-full h-[80vh] flex flex-col items-center justify-center gap-4'>
      <h1>Products</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={getProducts}>Get products</button>
    </div>
  );
};

export default Products;
