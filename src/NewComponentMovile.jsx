import { useState } from "react"


export const NewComponentMovile = ({id, url}) => {

    const [target1, settarget] = useState()
    
    const handelClicl = ({target}) => {
        console.log(target.alt)
    }
  return (
    <>

        <img src={url} alt={id} className='rounded m-2' id="target" onClick={handelClicl}/>
        
    </>
  )
}
