import Axios from 'axios'
import { useEffect, useState } from 'react'
import { ContainerImg } from './ContainerImg'
import Moveable from "react-moveable";

export const API = () => {
const [imagen, setImagen] = useState([])

useEffect(() => {
  Axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(({data}) => {
        setImagen(data)
    })
    .catch(function(error){
        setImagen(error)
    })

}, [])

  return (
    <>
        <ContainerImg imagen={imagen}/>
    </>
  )
}
