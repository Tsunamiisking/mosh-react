

function ListGroup() {

    const items = [
        'New York',
        'Italy',
        'Japanese',
        'France',
        'Congo'
    ]
    // Using "<> </>" as "fragments" to wrap all the elements in this component 
    // because we cannot render more than one element in a component that is not nested
    return (
        <> 
        <h1>List</h1>
        <ul className="list-group">
        {/* Using <list>.map to render the values in the list 
        embeding them in an 'li' tag*/}
        {items.map(item => <li>{item}</li>)}
    </ul>
        </>
    );
}

export default ListGroup;