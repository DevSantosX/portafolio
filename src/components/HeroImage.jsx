import React from 'react';
import MButton from './MButton';
import ProfileAvatar from './ProfileAvatar';

const Heroimage = () => {
    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__content">
                        <div className="hero__img">
                            <div className="hero__img-content">
                                <div className="hero__img-title">
                                    <h1>Hola amigo!</h1> 
                                    <h1>Soy <span>Pedro Santos</span>.</h1>
                                    <h1>Soy desarrollador full-stack.</h1>
                                </div>
                                <div className="hero__img-button">
                                    <MButton name='btn-contacto' id='btn-contacto' value='Contacto' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hero__img">
                    <div className="hero__img-container">
                        <div className="hero__img-content">
                            <h1 className='hero__title'>Hola soy tu amigo desarrollador</h1>
                            <h2 className='hero__name'>Pedro Santos</h2>
                        </div>
                        <div className='hero__btnContacto'>
                            <Button className='bg-red-600' name='btn-contacto' id='btn-contacto' value='Contacto' />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Heroimage;
