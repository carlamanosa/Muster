import React from "react";

export default function MyLink({ title, type }) {
    return (
        <tr>
            <td>{title}</td>
            <td>{type}</td>
        </tr>
    )
}