import React from "react";

function List(props) {

const itemList = props.groceries.map(item => {return (<li>{item.name}</li>)});
    
return (
    <ul className="list-group">
    {itemList}
    </ul>
  );
}

export default List;
