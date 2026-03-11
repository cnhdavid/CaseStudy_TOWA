import Card from "./Card";

const Grid = ({ items }) => (
  <div className="columns is-multiline">
    {items.map((item) => (
      <Card
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        url={item.url}
      />
    ))}
  </div>
);

export default Grid;
