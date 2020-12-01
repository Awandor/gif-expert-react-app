
import PropTypes from 'prop-types';

// export const GifGridItem = ( { img } ) => {

export const GifGridItem = ( { id, title, url } ) => {

    // console.log( 'GifGridItem', img );

    return (
        <div className="card animate__animated animate__fadeIn">
           <img src={url} alt={title} />
           <p>{title}</p>
        </div>
    );

};

GifGridItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
