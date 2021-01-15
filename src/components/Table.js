import React from "react";

function Table(props) {
    return(
        <tr>
            <th><img src={props.image}></img></th>
            <th>{props.fName}</th>
            <th>{props.lName}</th>
            <th>{props.age}</th>
            <th>{props.gender}</th>
            <th>{props.phone}</th>
            <th>{props.email}</th>
        </tr>
    );
}

export default Table;