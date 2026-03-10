import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav
        className="navbar has-background-danger"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <svg
              viewBox="-0.5 -0.5 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
            >
              <path
                d="M7.5 14.337187499999999c3.7760624999999997 0 6.837187500000001 -3.061125 6.837187500000001 -6.837187500000001 0 -3.7760624999999997 -3.061125 -6.837187500000001 -6.837187500000001 -6.837187500000001C3.7239375000000003 0.6628125 0.6628125 3.7239375000000003 0.6628125 7.5c0 3.7760624999999997 3.061125 6.837187500000001 6.837187500000001 6.837187500000001Z"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              ></path>
              <path
                d="M7.5 9.551187500000001c1.132875 0 2.0511874999999997 -0.9183125000000001 2.0511874999999997 -2.0511874999999997S8.632875 5.4488125 7.5 5.4488125 5.4488125 6.367125 5.4488125 7.5 6.367125 9.551187500000001 7.5 9.551187500000001Z"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              ></path>
              <path
                d="M0.6628125 7.5h4.7860000000000005"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path
                d="M9.551187500000001 7.5h4.7860000000000005"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          <a
            role="button"
            className={`navbar-burger has-text-white ${isOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          className={`navbar-menu has-background-danger ${isOpen ? "is-active" : ""}`}
        >
          <div className="navbar-end has-text-centered" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "0.6rem" }}>
            <a className="navbar-item has-text-white" href="#">
              Piplup
            </a>
            <a className="navbar-item has-text-white" href="#">
              Turtwig
            </a>
            <a className="navbar-item has-text-white" href="#">
              Chimchar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
