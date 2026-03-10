import styles from "./Footer.module.css";

const NAV_ITEMS = [
  { label: "Piplup", href: "#" },
  { label: "Turtwig", href: "#" },
  { label: "Chimchar", href: "#" },
];

const Logo = () => (
  <a href="/" aria-label="Home">
    <svg
      viewBox="-0.5 -0.5 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
    >
      <path
        d="M7.5 14.337187499999999c3.7760624999999997 0 6.837187500000001 -3.061125 6.837187500000001 -6.837187500000001 0 -3.7760624999999997 -3.061125 -6.837187500000001 -6.837187500000001 -6.837187500000001C3.7239375000000003 0.6628125 0.6628125 3.7239375000000003 0.6628125 7.5c0 3.7760624999999997 3.061125 6.837187500000001 6.837187500000001 6.837187500000001Z"
        stroke="#363636"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        d="M7.5 9.551187500000001c1.132875 0 2.0511874999999997 -0.9183125000000001 2.0511874999999997 -2.0511874999999997S8.632875 5.4488125 7.5 5.4488125 5.4488125 6.367125 5.4488125 7.5 6.367125 9.551187500000001 7.5 9.551187500000001Z"
        stroke="#363636"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path d="M0.6628125 7.5h4.7860000000000005" stroke="#363636" strokeWidth="1" />
      <path d="M9.551187500000001 7.5h4.7860000000000005" stroke="#363636" strokeWidth="1" />
    </svg>
  </a>
);

const Footer = () => {
  return (
    <footer className={`has-background-white ${styles.footer}`}>
      <div className="container">
        <div className="columns is-variable is-6">
          <div className="column is-one-third">
            <Logo />
            <p className="has-text-grey-light is-size-7">
              Your go-to place for everything Pokémon.
            </p>
          </div>

          <div className="column is-one-third">
            <p className={`has-text-dark has-text-weight-semibold ${styles.columnHeading}`}>
              Navigation
            </p>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a className={`has-text-grey-dark ${styles.navLink}`} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="column is-one-third">
            <p className={`has-text-dark has-text-weight-semibold ${styles.columnHeading}`}>
              Contact
            </p>
            <p className="has-text-dark is-size-6 has-text-weight-medium">David Jovanovic</p>
            <p className="has-text-grey-dark is-size-7 mt-1">123 Pokémon Street, Vienna City</p>
            <p className="has-text-grey-dark is-size-7">+43 (123) 444-5555</p>
            <p className="has-text-grey-dark is-size-7">david@pokemon.com</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className="has-text-grey-dark is-size-7 has-text-centered">
            © {new Date().getFullYear()} Pokémon Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
