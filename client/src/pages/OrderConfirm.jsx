import  { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Layout from "../Layouts/Layouts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderDetailAction } from "../Redux/Actions/Order";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { orderDetailAction } from "../Redux/Actions/Order";

const OrderConfirmation = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderDetailAction(id));
  }, [dispatch, id])
  
  const orderDetailReducer = useSelector((state)=>state.orderDetailReducer)
  const { order, loading } = orderDetailReducer;
  // Confetti state
  const [confettiActive, setConfettiActive] = useState(true);

  // Confetti timer to stop after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-white">
          {confettiActive && <Confetti />}
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Thank you for your order.
            </p>
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Order Summary
              </h2>
              {order && (
                <div className="text-left">
                  <p>
                    <strong>Order ID:</strong> {order._id}
                  </p>
                  <p>
                    <strong>Payer Name:</strong> {order.user.name}{" "}
                  </p>
                  <p>
                    <strong>Payer Email:</strong> {order.user.email}
                  </p>
                  {/* Add more details as needed */}
                </div>
               )} 
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200"
              onClick={() => {
                window.location.href = "/"; // Redirect to homepage or another page
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
       )} 
    </Layout>
  );
};

export default OrderConfirmation;
