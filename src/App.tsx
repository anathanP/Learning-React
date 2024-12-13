import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [display, setDisplay] = useState(false);
  const handleOnClick = (state: boolean) => {
    setDisplay(state);
  };
  return (
    <div>
      {display && (
        <Alert onClose={() => handleOnClick(false)}>
          Hello <b>World!</b>
        </Alert>
      )}
      <Button onClickButton={() => handleOnClick(true)}>My Button</Button>
    </div>
  );
}

export default App;
