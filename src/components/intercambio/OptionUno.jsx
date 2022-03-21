import React from 'react'
import Selec from './Selec'

const options =[
    {value: 1, text: "Azul"},
    {value: 2, text: "Rojo"}
]
export default function OptionUno() {
  return (
    <Selec options={options}/>
  )
}
