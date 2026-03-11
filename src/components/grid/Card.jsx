const Card = ({ image, title, text, url }) => (
  <a href={url} className="column is-full-mobile is-half-tablet is-one-third-desktop">
    <div className="card h-100 has-background-white">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5 has-text-black">{title}</p>
        <p
          className="content is-size-6"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  </a>
);

export default Card;
