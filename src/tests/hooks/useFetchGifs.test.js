const { renderHook } = require( "@testing-library/react-hooks" );
const { useFetchGifs } = require( "../../hooks/useFetchGifs" );

describe( 'Pruebas en el Hook useFetchGifs', () => {

  // Aquí no se puede hacer el match con el snapshot pues no hay nada que se vaya a renderizar

  test( 'debe retornar el estado inicial', async() => {

    // const { images, loading } = useFetchGifs( 'Snoopy' ); // No funciona, da error, hay que usar renderHook

    // renderHook crea un componente virtual y coloca nuestro custom Hook en él

    // const resp = renderHook( () => useFetchGifs( 'Snoopy' ) );

    // console.log( resp );

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Snoopy' ) );

    const { images, loading } = result.current;

    await waitForNextUpdate();

    // console.log( { images, loading } );

    expect( images ).toEqual( [] );

    expect( loading ).toBe( true );

  } );

  test( 'debe retornar un arreglo de imágenes y loading en false', async() => {

    // Para esperar el resultado usamos waitForNextUpdate de renderHook que retorna una promesa por lo que usamos async

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Snoopy' ) );

    await waitForNextUpdate();

    // Cuando se ejecuta la prueba anterior el renderHook crea un componente virtual y cuando termina se elimina (unmount)
    // este componente y se cambia el estado, para que no de error debemos implementar await waitForNextUpdate() también
    // en el test anterior para limpiar

    const { images, loading } = result.current;

    // console.log( { images, loading } );

    expect( images.length ).toBe( 10 );

    expect( loading ).toBe( false );

  } );

} );
