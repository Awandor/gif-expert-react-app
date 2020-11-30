// ========================================
// Functional Component
// ========================================

import { useState } from "react";

import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

  const [ inputValue, setInputValue ] = useState( '' ); // Iniciamos con string vacío de lo contrario es undefined y da error

  const handleInputChange = ( event ) => {

    console.log( event.target.value );

    setInputValue( event.target.value ); // sobreescribimos inputValue

  }

  const handleAdd = () => {

    // Para añadir elementos a array hay dos formas

    // setCategories( [...categories, 'Wolverine'] );

    /* setCategories( estadoAnterior =>{

        return [...estadoAnterior, 'Wolverine'];

    } ); */

  };

  const handleSubmit = ( e ) => {

    // No queremos que haga el submit porque eso refresca la página, lo manejaremos de otra forma

    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {

      // Si no tenemos acceso a categories podemos usar callback function que trae categories como argumento

      setCategories( cat => [ inputValue, ...cat ] );

      setInputValue( '' );

    }


  };

  return ( <
    form onSubmit = { handleSubmit } >
    <
    h1 > { inputValue } < /h1> <
    input type = "text"
    value = { inputValue }
    onChange = { handleInputChange }
    /> <
    br / >
    <
    br / >
    <
    button onClick = { handleAdd } > Agregar < /button> <
    /form>
  )

};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
