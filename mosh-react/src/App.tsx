import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    { City: "New York", Id: 1 },
    { City: "Italy", Id: 2 },
    { City: "Japanese", Id: 3 },
    { City: "France", Id: 4 },
    { City: "Congo", Id: 5 },
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }
  return <div><ListGroup items={items}  heading="Cities" onSelectedItem={handleSelectedItem}/></div>
}

export default App;