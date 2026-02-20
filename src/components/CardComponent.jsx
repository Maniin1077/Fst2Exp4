import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function CardComponent({ item }) {
  const { dispatch } = useContext(AppContext);

  return (
    <div className="card p-3 m-2">
      <h5>{item.name}</h5>
      <p>Category: {item.category}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
      >
        Add to Cart
      </button>
    </div>
  );
}