import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/products.actions";
import { addToCart } from "./../../redux/Cart/cart.actions";
import Button from "../../components/Button";
import "./styles.scss";

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const history = useHistory();
  const { productID } = useParams();

  const {
    productThumbnail,
    productName,
    productPrice,
    productCategory,
    productDesc,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));
    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <div className="productDetailsContainer">
      <div className="productBox">
        <div className="thumbnailBox">
          <img src={productThumbnail} alt={productName} />
        </div>
        <div className="infoBox">
          <span className="productPrice"> {productPrice} $</span>
          <h2>{productName}</h2>
          <h3>Description :</h3>
          <p className="description">
            <span dangerouslySetInnerHTML={{ __html: productDesc }} />
          </p>
          <div className="line"></div>
          <div className="handleBox">
            <Button
              onClick={() => handleAddToCart(product)}
              className="productAddBtn"
              title="Add to Cart"
            />
          </div>
          <div className="line"></div>
          <span className="categoryGroup">
            Category : For {productCategory}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
