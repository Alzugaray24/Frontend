import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import "../styles/productPage.css"

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductsContainer /> {/* Renderiza el contenedor de productos */}
    </div>
  );
};

export default ProductPage;
