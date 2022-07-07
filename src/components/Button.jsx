import React from 'react';
import '../assets/styles/Button.css';

const Button = ({id, name, value, className}) => {
    return (
        <div>
            <button data-mdb-ripple="true" data-mdb-ripple-color="light" id={id} name={name} className={className + ' btn'}>{ value }</button>
        </div>
    );
}

export default Button;
