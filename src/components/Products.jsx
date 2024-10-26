import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('Products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem('Products', JSON.stringify(newProducts));
  };

  return (
    products.length > 0 ? (
      <div className="flex flex-wrap w-full p-8 bg-gray-100">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6 m-4 w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{product.Name}</h3>
            <h5 className="text-lg font-medium text-gray-700">Price: ${product.Price}</h5>
            <p className="text-gray-600 my-3">{product.Description}</p>
            <h5 className="text-sm font-medium text-gray-500">Category: {product.Category}</h5>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => handleDelete(product.id)}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <NavLink
                to={`/update/${product.id}`}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Update
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center p-8 text-gray-600">
        No products available. Please add some products to display.
      </div>
    )
  );
};

export default Products;