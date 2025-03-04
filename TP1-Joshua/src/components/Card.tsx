type CardProps = {
  post: {
    id: string;
    imageSrc: string;
    titre: string;
    description: string;
  };
};

const Card = ({ post }: CardProps) => {
  return (
    <li className="card">
      {post.imageSrc && (
        <img className="card-image" src={post.imageSrc} alt={post.titre} />
      )}
      <div className="card-description">
        <h2>{post.titre}</h2>
        <p>{post.description}</p>
      </div>
    </li>
  );
};

export default Card;
