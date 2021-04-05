import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductsStart } from "./../../redux/Products/products.actions";
import "./styles.scss";
import ProductCard from "../../components/ProductCard";
import FormSelect from "../../components/FormSelect";
import LoadMore from "./../LoadMore";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductsResults = () => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/products/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className="productsBox">
        <p>No items...</p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: "Show all",
        value: "",
      },
      {
        name: "Mens",
        value: "mens",
      },
      {
        name: "Womens",
        value: "womens",
      },
    ],
    handleChange: handleFilter,
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <>
      <div className="productsContainer">
        <div className="title">
          <h2>Browse through our Products</h2>
          <FormSelect {...configFilters} />
        </div>
        <div className="productsBox">
          {data.map((product, index) => {
            const { productThumbnail, productName, productPrice } = product;
            if (
              !productThumbnail ||
              !productName ||
              typeof productPrice === "undefined"
            )
              return null;
            return <ProductCard key={index} {...product} />;
          })}
        </div>
        {!isLastPage && (
          <LoadMore className="loadMoreBtn" {...configLoadMore} />
        )}
      </div>
    </>
  );
};

export default ProductsResults;
