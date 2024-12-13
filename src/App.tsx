import "./components/ListGroups.tsx";
import ListGroup from "./components/ListGroups.tsx";

function App() {
  const cities = ["shiraz", "tehran", "mashhad", "ahvaz", "karaj"];
  const handleOnSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleOnSelectItem}
      />
    </div>
  );
}

export default App;
