import Card from "./Card";

const Grid = ({ items, title, centered }) => (
  <div className="mb-6">
    {title && <h2 className="title is-4 has-text-white mb-4">{title}</h2>}
    <div className={`columns is-multiline ${centered ? "is-centered" : ""}`}>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default Grid;
