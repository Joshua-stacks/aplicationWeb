import Card from "./Card";

type CardListProps = {
  posts: {
    id: string;
    imageSrc: string;
    titre: string;
    description: string;
  }[];
};

const CardList = ({ posts }: CardListProps) => {
  return (
    <div className="card-list">
      {posts.length > 0 ? (
        posts.map((item) => <Card key={item.id} post={item} />)
      ) : (
        <p>Aucun post trouvé pour ce profil.</p>
      )}
    </div>
  );
};

export default CardList;
