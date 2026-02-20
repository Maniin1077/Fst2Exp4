import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand text-light" to="/">EXP4</Link>

      <div>
        <Link className="text-light me-3" to="/">Home</Link>
        <Link className="text-light me-3" to="/cart">Cart</Link>
        <Link className="text-light" to="/login">Login</Link>
      </div>
    </nav>
  );
}