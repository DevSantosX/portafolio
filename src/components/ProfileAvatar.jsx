import React from 'react';
import avatar from '../assets/img/avatar.jpg';

const ProfileAvatar = () => {
    return (
        <>
            <picture className='profile__avatar'>
                <img className='profile__avatar-img' src={avatar} alt="Pedro Ernesto Santos Diaz" />
            </picture>
        </>
    );
}

export default ProfileAvatar;
