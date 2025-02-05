import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
