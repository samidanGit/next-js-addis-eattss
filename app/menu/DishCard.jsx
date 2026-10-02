"use client"
import {useState} from "react"
export default function DishCard({ dish }) {
    const [added,setAdded]=useState(false);
    return (
        <article>
            <h3>{dish.name}</h3>
            <p>Price: {dish.price} ETB</p>
            <button onClick={()=>setAdded(true)}>{added? "Added":"Add to Cart"}</button>
        </article>
    );
}