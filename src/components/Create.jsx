import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Create = () => {
    const [Products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('Products')) || [];
        setProducts(products);
    })
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const [Category, setCategory] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setProducts([...Products, { id,Name, Price, Description, Category }]);
        localStorage.setItem('Products', JSON.stringify([...Products, { id, Name, Price, Description, Category }]))
        navigate('/')
    }
  return (
      <div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-screen'>
              <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Product Name' />
              <input onChange={(e) => setPrice(e.target.value)} type='text' placeholder='Enter Product Price' />
              <input onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Enter Product Description' />
              <input onChange={(e) => setCategory(e.target.value)} type='text' placeholder='Enter Product Category' />
              <button type='submit'>Add Product</button>
          </form>
    </div>
  )
}

export default Create