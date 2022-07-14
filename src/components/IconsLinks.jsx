import React from 'react';

const Iconslinks = ({ icon, link, alt}) => {
    return (
        <div className='icon'>
            <a href={link} className='icon__link'>
                <img className='icon__img' src={icon} alt={alt} />
            </a>
        </div>
    );
}

export default Iconslinks;
