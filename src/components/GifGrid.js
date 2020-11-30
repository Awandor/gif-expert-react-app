// import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

// import { getGifs } from "../helpers/getGifs";

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ( { category } ) => {

    const { images, loading } = useFetchGifs( category );

    // console.log( loading );
    // console.log( data );

    /* const [images, setImages] = useState( [] )

    useEffect( () => {

        // getGifs( category ).then( resp=>setImages( resp ) ) // Nuevo estado con las imágenes procesadas como queremos);
        getGifs( category ).then( setImages ) // Simplificación

    }, [category] ); // con el arreglo vacío sólo se ejecuta una vez, pero nos sale un warning sobre category */

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {/* {loading ? 'Cargando...' : 'Datos cargados'} */}
        {loading && <p className="animate__animated animate__flash">Loading</p> }
        <div className="card-grid">
            {
                images.map( ( elem ) => {

                    // key no debe ser el index, debe de ser único, normalmente de base de datos

                    // return <li key={elem.id}>{elem.title}</li>

                    // return <GifGridItem key={elem.id} img={elem} />
                    
                    // Con desestructuración podemos enviar todas las propiedades de elem como un atributo independiente
                    
                    return <GifGridItem key={elem.id} {...elem} />
                
} )
            }
        </div>
        </>
    )

}

// Estamos exportando al comienzo