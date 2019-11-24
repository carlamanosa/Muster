import React from "react";

export default function MyLink({ title, type }) {
    console.log("EventRow: ", title, type);
    return (
        <tr>
            <td>{title}</td>
            <td>{type}</td>
        </tr>
    )
}