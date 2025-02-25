import ListGroup from "./components/ListGroup";
import Header from "./components/Header";

function App() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <Header />
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
