const { getGifs } = require( "../../helpers/getGifs" )



describe( 'Pruebas con getGifs fetch', () => {

  test( 'debe de traer 10 elementos', async() => {

    const gifs = await getGifs( 'snoopy' );

    // console.log( gifs ); // Arreglo de 10 elementos

    expect( gifs.length ).toBe( 10 );

  } );

  test( 'debe de traer 0 elementos si no hay término de búsqueda', async() => {

    const gifs = await getGifs( '' );

    // console.log( gifs ); // Arreglo de 10 elementos

    expect( gifs.length ).toBe( 0 );

  } );

} );
