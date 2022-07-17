import React from 'react';

const MButton = ({id, name, value, className}) => {
    return (
        <div>
            <button data-mdb-ripple="true" data-mdb-ripple-color="light" id={id} name={name} className={'btn  ' + className }>{ value }</button>
        </div>
    );
}

export default MButton;
