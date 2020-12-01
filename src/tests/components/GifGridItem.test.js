import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

// import { render } from '@testing-library/react';

describe( 'Pruebas en <GifGridItem />', () => {

  const id = "werweer34";

  const title = "Algo";

  const url = 'https://algo.com/algo.jpg';

  const wrapper = shallow( <GifGridItem key={id} title={title} url={url} /> );

  // Este test se hace con Enzyme

  test( 'debe mostrar <GifGridItem /> correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  } );

  test( 'debe tener un parrafo con title', () => {

    const p = wrapper.find( 'p' );

    expect( p.text().trim() ).toBe( title );

  } );
  
  test( 'debe tener una imagen igual al url', () => {

    const img = wrapper.find( 'img' );

    console.log( img.props() ); // props() nos da los atributos de img en forma de propiedades de objeto
    console.log( img.prop( 'src' ) ); // otra manera de acceder a una propiedad

    // expect( img.props().src ).toBe( url );
    expect( img.prop( 'src' ) ).toBe( url );

    expect( img.prop( 'alt' ) ).toBe( title );

  } );

  test( 'debe tener un div con clase animate__fadeIn', () => {

    const div = wrapper.find( 'div' );

    console.log( div.props() );

    expect( div.prop( 'className' ) ).toContain( 'animate__fadeIn' );
    
    expect( div.prop( 'className' ).includes( 'animate__fadeIn' ) ).toBe( true ); // Otra manera

  } );

} );
