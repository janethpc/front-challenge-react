import { NewComponentMovile } from "./NewComponentMovile"



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
