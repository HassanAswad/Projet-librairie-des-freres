import React from 'react'

export const Category = ({id, name}) => {
    return (
        <tr key={id} className="border_ border-0_ border-light_">
            <td>{id}</td>
            <td>{name}</td>
        </tr>
    )
}
