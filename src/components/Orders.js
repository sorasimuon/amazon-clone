import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./Orders.css";
import { useStateValue } from "../utilities/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      console.log("bp 1");
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      console.log("bp 2");
    } else {
      console.log("bp 3");
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  return (
    <div className="orders">
      <div className="orders-container">
        <h1>Your Orders</h1>
        {orders.map((order) => (
          <Order order={order} />
        ))}

        {/* <Order
          order={{
            amount: 5980.0,
            created: "October, 30th 2020, 18:46 UTC",
            basket: [
              {
                id: 48792349872035,
                image:
                  "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
                price: 19.9,
                rating: 3.5,
                title: "The Lean Startup",
              },
              {
                id: 48792349872036,
                image:
                  "https://images.frandroid.com/wp-content/uploads/2020/07/mi-band-5.jpg",
                price: 39.9,
                rating: 4,
                title: "Product Xiaomi Mi Band 4",
              },
              {
                id: 48792349872037,
                image:
                  "https://images-na.ssl-images-amazon.com/images/I/81-BaXX9stL._AC_SL1500_.jpg",
                price: 979.9,
                rating: 4,
                title: "Apple iPhone 11 Pro Max 256Go - Space Grey",
              },
            ],
          }}
        /> */}
      </div>
    </div>
  );
}

export default Orders;
