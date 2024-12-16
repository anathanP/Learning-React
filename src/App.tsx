import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={(item: string) => console.log(item)} />
    </div>
  );
}

export default App;
