import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Exercise from "./components/Exercise";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

// AVAILABLE BUTTON COLORS
// 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

function App() {
  let items = [
    { City: "New York", Id: 1 },
    { City: "Italy", Id: 2 },
    { City: "Japanese", Id: 3 },
    { City: "France", Id: 4 },
    { City: "Congo", Id: 5 },
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  // const handleAlertClick = () => {
  //   const element = document.querySelector(".alertBox") as HTMLElement;
  //   if (element) {
  //     element.style.display = "none";
  //   }
  // };

  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      { visibility && <Alert onClick={() => {setVisibility(false)}}>There's a problem with the system</Alert>}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />

      <Exercise onClick={() => {setVisibility(true)}} color="primary">
        Click Me!
      </Exercise>
    </div>
  );
}

export default App;
