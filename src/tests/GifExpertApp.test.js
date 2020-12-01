import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe( 'Pruebas en <GifExpertApp />', () => {

    // Este test se hace con Enzyme

    test( 'debe mostrar <GifExpertApp /> correctamente', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe mostrar una lista de categorías', () => {

        const categories = ['Snoopy', 'Dragon Ball'];

        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );

    } );

} );