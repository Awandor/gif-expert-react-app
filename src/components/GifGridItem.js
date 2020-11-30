import React from 'react'

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
