export const getGifs = async( category ) => {

  const apiKey = 'pklQKMIzCzr0TcMCxH6bVdYujPWUf4OW';

  // const category = 'Beavis';

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=${apiKey}`;

  const respuesta = await fetch( url );

  const { data } = await respuesta.json(); // await porque json() retorna una promesa

  const gifs = data.map( img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };

  } )

  console.log( gifs );

  return gifs; // No retorna inmediatamente, retorna una promesa

}
