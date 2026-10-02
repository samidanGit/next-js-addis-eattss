"use client";

import { useState } from "react";
//import CartClient from "../components/CartClient";
import CartClient from "../components/CartClient";
export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Kitfo",
      price: 350,
      quantity: 1,
      id: 2,
      name: "Doro Wot",
      price: 400,
      quantity: 2,
    },
  ]);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <article key={item.id}>
          <h3>{item.name}</h3>

          <p>
            {item.quantity} × {item.price} ETB
          </p>
        </article>
      ))}

      <h3>Total: {total} ETB</h3>
    </section>
  );
}
