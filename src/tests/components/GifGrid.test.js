import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Creamos un mock de datos retornado por useFetchGifs

jest.mock( '../../hooks/useFetchGifs' );

// All implementar el mock el componente falla

describe( 'Pruebas en <GifGrid />', () => {

    const busqueda = 'Snoopy';

    // Este test se hace con Enzyme

    test( 'debe mostrar <GifGrid /> correctamente', () => {

        const gifs = [];

        useFetchGifs.mockReturnValue( {
            images: gifs,
            loading: true
        } );

        // Tenemos que definir el wrapper después de useFetchGifs.mockReturnValue

        const wrapper = shallow( <GifGrid category={busqueda} /> );

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        // Vamos a crear un mock

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/algo/algo.gif',
            title: 'Cualquier cosa'
        }];

        // Creamos un mock de datos retornado por useFetchGifs

        useFetchGifs.mockReturnValue( {
            images: gifs,
            loading: false
        } );

        // Tenemos que definir el wrapper después de useFetchGifs.mockReturnValue

        const wrapper = shallow( <GifGrid category={busqueda} /> );

        expect( wrapper.find( 'p' ).exists() ).toBe( false ); // No debe verse el párrafo "loading"

        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

    } );

} );