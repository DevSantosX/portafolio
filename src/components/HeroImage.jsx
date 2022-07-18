import React from 'react';

const Heroimage = ({username}) => {
    return (
        <>
            <div id='home' className="hero">
                <div className="hero__container">
                    <div className="hero__content">
                        <div className="hero__img">
                            <div className="hero__img-content">
                                <div className="hero__img-title">
                                    <h1>Hola amigo!</h1> 
                                    <h1>Soy <span>{username}</span>.</h1>
                                    <h1>Soy desarrollador full-stack.</h1>
                                </div>
                                <div className="hero__img-button">
                                    <a href='#contact' className='btn btn-contacto' id='btn-contacto'>Contacto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heroimage;
