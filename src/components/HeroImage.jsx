import React from 'react';
import '../assets/styles/HeroImage.css';
import Button from './Button';
import ProfileAvatar from './ProfileAvatar';

const Heroimage = () => {
    return (
        <>
            <div className="hero">
                <div className="hero__img">
                    <div className="hero__img-container">
                        <div className="hero__img-content">
                            <h1 className='hero__title'>Hola soy tu amigo desarrollador</h1>
                            <h2 className='hero__name'>Pedro Santos</h2>
                        </div>
                        <div className='hero__btnContacto'>
                            <ProfileAvatar/>
                            <Button className='bg-red-600' name='btn-contacto' id='btn-contacto' value='Contacto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heroimage;
