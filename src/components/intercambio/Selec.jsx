import React from 'react'

export default function Selec({options, onSelect, defaultOption=1}) {
  return (
    <select onChange={(evt) => onSelect(Number(evt.target.value))}>
        {
            options.map((o)=>(
                <option value={o.value}>{o.text}</option>
            ))
        }
    </select>
  )
}
