import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from "./../../redux/Products/products.actions";

import InputField from "./../../components/InputField";
import FormSelect from "./../../components/FormSelect";
import Modal from "./../../components/Modal";
import Button from "./../../components/Button";
// import CKEditor from "ckeditor4-react";
import "./styles.scss";
import LoadMore from "../../components/LoadMore";
import CKEditor from "ckeditor4-react";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState("mens");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory("mens");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
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
      <div className="contentBox">
        <h1>Manage Products</h1>

        <Button
          className="addNewProduct"
          title="Add New Product"
          onClick={() => toggleModal()}
        />
        <Modal {...configModal}>
          <div className="modalContent">
            <form onSubmit={handleSubmit}>
              <h2>Add new product</h2>

              <FormSelect
                label="Category"
                options={[
                  {
                    value: "mens",
                    name: "Mens",
                  },
                  {
                    value: "womens",
                    name: "Womens",
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />

              <InputField
                label="Name"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />

              <InputField
                label="Main image URL"
                type="url"
                value={productThumbnail}
                onChange={(e) => setProductThumbnail(e.target.value)}
              />

              <InputField
                label="Price"
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />

              <CKEditor
                onChange={(evt) => setProductDesc(evt.editor.getData())}
              />

              <br />

              <Button type="submit" title="Add product" className="modalBtn" />
            </form>
          </div>
        </Modal>
        <table className="tableContainer">
          <thead>
            <tr>
              <th colSpan="2">Thumbnail</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((product, index) => {
                const {
                  productName,
                  productThumbnail,
                  productPrice,
                  documentID,
                } = product;

                return (
                  <tr key={index}>
                    <td colSpan="2" className="imgBox">
                      <img src={productThumbnail} alt="product-img" />
                    </td>
                    <td> {productName} </td>
                    <td> {productPrice} $ </td>
                    <td>
                      <Button
                        className="deleteBtn"
                        title="Delete"
                        onClick={() => dispatch(deleteProductStart(documentID))}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!isLastPage && <LoadMore {...configLoadMore} />}
      </div>
    </>
  );
};

export default Admin;
