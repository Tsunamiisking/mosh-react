

function ListGroup() {
    // Using "<> </>" as "fragments" to wrap all the elements in this component 
    // because we cannot render more than one element in a component that is not nested
    return (
        <> 
        <h1>List</h1>
        <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
        </>
    );
}

export default ListGroup;