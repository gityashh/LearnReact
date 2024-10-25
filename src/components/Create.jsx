import React, { useState } from 'react'

const Create = () => {
    const [Products, setProducts] = useState([]);
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Description, setDescription] = useState('')
    const [Category, setCategory] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...Products, { Name, Price, Description, Category }]);
        localStorage.setItem('Products', JSON.stringify([...Products, { Name, Price, Description, Category}]))
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
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