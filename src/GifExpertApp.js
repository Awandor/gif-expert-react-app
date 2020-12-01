// ========================================
// Functional Component
// ========================================

import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ( { defaultCategories = [] } ) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    // const [categories, setCategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );
    
    // const [categories, setCategories] = useState( ['One Punch'] );
    
    const [categories, setCategories] = useState( defaultCategories );

    console.log( 'categories: ', categories );

    /* const handleAdd = () => {

        // Para añadir elementos a array hay dos formas

        // setCategories( [...categories, 'Wolverine'] );

        setCategories( estadoAnterior =>{

            return [...estadoAnterior, 'Wolverine'];

        } );

    } */

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map( ( elem ) => {

                        // key no debe ser el index, debe de ser único, normalmente de base de datos

                        // return <li key={elem}>{elem}</li>

                        return <GifGrid key={elem} category={elem} />

                    } )
                }
            </ol>
        </>
    );

};

export default GifExpertApp;