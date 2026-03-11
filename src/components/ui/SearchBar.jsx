import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => (
  <div className="columns is-centered mb-5">
    <div className="column is-half">
      <input
        className={`input is-medium has-background-white has-text-black ${styles.input}`}
        type="text"
        placeholder="Search Pokémon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default SearchBar;