import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { state } = useContext(AppContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">EXP4</Link>

        <div>
          <Link className="text-light me-4" to="/">Home</Link>
          <Link className="text-light me-4" to="/cart">
            Cart ({state.cart.length})
          </Link>
          <Link className="text-light" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}