import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetailsStart } from "./../../redux/Orders/orders.actions";
import OrderDetails from "../../components/OrdersDetails";

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

const Order = () => {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderID } = useParams();
  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, []);

  return (
    <div>
      <h1>Order ID: # {orderID} </h1>

      <OrderDetails order={orderDetails} />
      <h3> Total: ${orderTotal} </h3>
    </div>
  );
};

export default Order;
