import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import InputField from "./../../components/InputField";
import Button from "../Button";
import { CountryDropdown } from "react-country-region-selector";
import { apiInstance } from "./../../Utils";
import { saveOrderHistory } from "./../../redux/Orders/orders.actions";
import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from "./../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";

const initialAddressState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });

  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });

  const [recipientName, setRecipientName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  useEffect(() => {
    if (itemCount < 1) {
      history.push("/dashboard");
    }
  }, [itemCount]);

  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handleBilling = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const cardElement = elements.getElement("card");

    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postal_code ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    ) {
      return;
    }

    apiInstance
      .post("/payments/create", {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAddress,
          },
        },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: {
                ...billingAddress,
              },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(({ paymentIntent }) => {
                const configOrder = {
                  orderTotal: total,
                  orderItems: cartItems.map((item) => {
                    const {
                      documentID,
                      productThumbnail,
                      productName,
                      productPrice,
                      quantity,
                    } = item;

                    return {
                      documentID,
                      productThumbnail,
                      productName,
                      productPrice,
                      quantity,
                    };
                  }),
                };

                dispatch(saveOrderHistory(configOrder));
              });
          });
      });
  };

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="checkoutFormContainer">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <InputField
            required
            placeholder="Recipient Name"
            type="text"
            name="recipientName"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
          <InputField
            required
            placeholder="Line 1"
            type="text"
            name="line1"
            value={shippingAddress.line1}
            onChange={(e) => handleShipping(e)}
          />
          <InputField
            placeholder="Line 2"
            type="text"
            name="line2"
            value={shippingAddress.line2}
            onChange={(e) => handleShipping(e)}
          />
          <InputField
            required
            placeholder="City"
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={(e) => handleShipping(e)}
          />
          <InputField
            required
            placeholder="State"
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={(e) => handleShipping(e)}
          />
          <InputField
            required
            placeholder="Postal Code"
            type="text"
            name="postal_code"
            value={shippingAddress.postal_code}
            onChange={(e) => handleShipping(e)}
          />

          <CountryDropdown
            required
            onChange={(val) =>
              handleShipping({
                target: {
                  name: "country",
                  value: val,
                },
              })
            }
            className="countryDropdown"
            valueType="short"
            value={shippingAddress.country}
          />
        </div>

        <div className="group">
          <h2>Billing Address</h2>

          <InputField
            required
            placeholder="Name on Card"
            type="text"
            name="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
          <InputField
            required
            placeholder="Line 1"
            type="text"
            name="line1"
            value={billingAddress.line1}
            onChange={(e) => handleBilling(e)}
          />
          <InputField
            placeholder="Line 2"
            type="text"
            name="line2"
            value={billingAddress.line2}
            onChange={(e) => handleBilling(e)}
          />
          <InputField
            required
            placeholder="City"
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={(e) => handleBilling(e)}
          />
          <InputField
            required
            placeholder="State"
            type="text"
            name="state"
            value={billingAddress.state}
            onChange={(e) => handleBilling(e)}
          />
          <InputField
            required
            placeholder="Postal Code"
            type="text"
            name="postal_code"
            value={billingAddress.postal_code}
            onChange={(e) => handleBilling(e)}
          />

          <CountryDropdown
            required
            className="countryDropdown"
            valueType="short"
            value={billingAddress.country}
            onChange={(val) =>
              handleBilling({
                target: {
                  name: "country",
                  value: val,
                },
              })
            }
          />
        </div>

        <div className="group">
          <h2>Card Details</h2>
          <CardElement option={configCardElement} />
          <Button type="submit" className="checkoutFormBtn" title="Pay Now" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
