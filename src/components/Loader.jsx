import React from 'react';

const Loader = ({ show }) => {
  return (
    <div className={show ? 'loader' : 'loader loader-hidden'}>
      <div className="loader__container">
        <div className="loader__content">
          <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1>Enviando mensaje..</h1>
        </div>
      </div>      
    </div>
  );
}

export default Loader;
