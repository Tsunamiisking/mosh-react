import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Exercise from "./components/Exercise";

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
  const handleButtonClick = () => {

  }
  const handleAlertClick = () => {

  }
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />

      <Alert onClick={handleAlertClick}>
        Hello <span> World </span>
      </Alert>
      
      <Exercise onClick={handleButtonClick} color='primary'>
        Click Me!
       </Exercise>
    </div>


  );
}

export default App;
