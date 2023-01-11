import { NewComponentMovile } from "./NewComponentMovile"
import { useEffect, useState } from "react";



export const ContainerImg = ({ imagen }) => {

    
    return (
        <>
            {
                imagen.map(img => (

                    <>
                        <NewComponentMovile
                            id={img.id}
                            url={img.url}
                        />
                       
                    </>
                ))
            }


        </>
    )
}
