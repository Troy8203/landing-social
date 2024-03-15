import logoCtrlDev from "./assets/logo.svg";
import "./App.css";

function Navbar() {
  return (
      <nav>
        <picture>
          <img src={logoCtrlDev} className="logo" alt="Ctrl+Dev logo" />
        </picture>
      </nav>
  );
}

export default Navbar;
