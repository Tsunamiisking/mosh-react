function ListGroup() {
  // List of of bjects
  let items = [
    { City: "New York", Id: 1 },
    { City: "Italy", Id: 2 },
    { City: "Japanese", Id: 3 },
    { City: "France", Id: 4 },
    { City: "Congo", Id: 5 },
  ];
  let selectedIndex = 1;
  // Event Handler
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const element = event.currentTarget;
    
    element.classList.toggle('active');
};
  // items = []
  // Using "<> </>" as "fragments" to wrap all the elements in this component
  // because we cannot render more than one element in a component that is not nested
  return (
    <>
      <h1>List</h1>
      {/* Checks if items are inside the items list.. 
        in logical operations, true && <value> returns <value>, 
        false && <value> returns <value> */}
      {items.length === 0 && <p>No list item</p>}
      <ul className="list-group">
        {/* Using <list>.map to render the values in the list 
        embeding them in an 'li' tag*/}
        {/* Indexing List objects for data usage */}
        {items.map((item) => (
          <li
            className= {selectedIndex === item.Id ? 'list-group-item active' : 'list-group-item'}
            key={item.Id}
            onClick={handleClick}
          >
            {item.City}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
