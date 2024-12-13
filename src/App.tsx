import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="success" onClickButton={() => console.log("hello")}>
        Click here
      </Button>
    </div>
  );
}

export default App;
