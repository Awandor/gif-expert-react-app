import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [ state, setState ] = useState( {
    images: [],
    loading: true
  } );

  useEffect( /* Eso no puede ser async */ () => {

    getGifs( category ).then( resp => {

      setTimeout( () => {

        console.log( resp );

        setState( {
          images: resp,
          loading: false
        } );

      }, 3000 );

    } );

  }, [ category ] ); // con el arreglo vacío sólo se ejecuta una vez, pero nos sale un warning sobre category

  /* setTimeout( () => {

    setState( {
      images: [ 1, 2, 3, 4, 5 ],
      loading: false
    } );

  }, 3000 ); */

  return state;

}
