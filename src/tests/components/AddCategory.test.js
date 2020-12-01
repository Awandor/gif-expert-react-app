import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe( 'Pruebas en <AddCategory />', () => {

    // const setCategories = () => { };

    // Usamos el método fn() de Jest para decir que es una función y saber varias cosas, si fue llamada, cuántas veces, etc

    const setCategories = jest.fn();

    // Para poner el formulario en blanco antes de cada prueba

    let wrapper;

    beforeEach( ()=>{

        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
        
    } );


    // Este test se hace con Enzyme

    test( 'debe mostrar <AddCategory /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe de cambiar h1', () => {

        const input = wrapper.find( 'input' );

        const value = 'Hola mundo';

        // input.simulate('change', {}); // {} es el evento que envía handleInputChange

        // input.simulate( 'change', { target:{ value: value } } );
        input.simulate( 'change', { target: { value } } );

        const h1 = wrapper.find( 'h1' ).text().trim();

        console.log( h1 );

        expect( h1 ).toBe( value );

    } );

    test( 'debe de no hacer hacer petición si hay menos de dos caracteres o son espacios vacíos', () => {

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault: ()=>{} } );

        // Ahora setCategories no se debería de haber disparado pues no hemos añadido un término de búsqueda

        console.log( setCategories );

        expect( setCategories ).not.toHaveBeenCalled();

    } );

    test( 'debe de hacer hacer petición y limpiar el buscador', () => {

        const input = wrapper.find( 'input' );

        const value = 'Goku';

        input.simulate( 'change', { target: { value } } );

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault: ()=>{} } );

        // Ahora setCategories se debe disparar

        console.log( setCategories );

        expect( setCategories ).toHaveBeenCalled();

        expect( setCategories ).toHaveBeenCalledTimes( 1 );

        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( input.prop( 'value' ) ).toBe( '' );

        

    } );

} );