import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Cart() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="container-fluid px-5 mt-4">
      <h2>Cart Items</h2>

      {state.cart.length === 0 && <p>No items in cart.</p>}

      {state.cart.map((item, index) => (
        <div key={index} className="card p-2 my-2">
          <h5>{item.name}</h5>

          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: index })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}