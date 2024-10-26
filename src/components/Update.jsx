import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const [Products, setProducts] = useState([]);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  useEffect(() => {
      const products = JSON.parse(localStorage.getItem("Products")) || [];
      console.log(id);
    setProducts(products);
    const product = products.find((product) => product.id === id);
    if (product) {
      setName(product.Name);
      setPrice(product.Price);
      setDescription(product.Description);
      setCategory(product.Category);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = Products.map((products) =>
      products.id === id ? { Name, Price, Description, Category, id } : products
    );
      localStorage.setItem("Products", JSON.stringify(updatedProducts));
      navigate('/');
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          defaultValue={Name}
          type="text"
          placeholder="Enter Product Name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={Price}
          type="text"
          placeholder="Enter Product Price"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={Description}
          type="text"
          placeholder="Enter Product Description"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={Category}
          type="text"
          placeholder="Enter Product Category"
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default Update;
