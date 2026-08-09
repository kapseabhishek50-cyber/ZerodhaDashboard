import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { positions } from "../data/data";
import axios from 'axios';






const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("https://zerodhabackend-1-2s0t.onrender.com/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    })
  }, []);
  return (
    <>
    <h3 className="title">Total Orders ({allOrders.length})</h3>
      <div className="order-table">
        <div className="orders">
        <table>
          <tr>
            <th>Order Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((stock, index)=>{
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}.</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              )
            }
          )}
        </table>

        </div>
      </div>
    </>
  );
};

export default Orders;