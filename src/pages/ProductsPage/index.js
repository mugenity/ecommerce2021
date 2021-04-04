import React from "react";
import ProductsResults from "../../components/ProductsResults";
import "./styles.scss";

const ProductsPage = () => {
  return (
    <>
      <div className="productsPageContainer">
        <ProductsResults />
      </div>
    </>
  );
};

export default ProductsPage;
