function ListGroup(){

    let items = [
        'San Francisco',
        'New York',
        'Boston',
        'London'
    ];

    items = [];

    if (items.length == 0)
      return <><h1>List</h1><p>No item found</p></>;

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(item => <li>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;