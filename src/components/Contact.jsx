import React, { useRef, useEffect, useState } from 'react';
import useObserver from '../hooks/useObserver';

const Contact = () => {
  const name = useRef()

  useEffect(() => {
    const  observador = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        console.log(entries[0].target.childNodes)
        for (let i=0; i < entries[0].target.childNodes.length; i++) {
          console.log(entries[0].target.childNodes[i].classList.add("visible"))
        }
      } else {
        for (let i=0; i < entries[0].target.childNodes.length; i++) {
          console.log(entries[0].target.childNodes[i].classList.remove("visible"))
        }
      }
    },{
      root: null,
      threshold: .5
    })
    observador.observe(name.current);

    return () => observador.disconnect()
  }, []);

  return (
    <div className='contact'>
      <div className="container">
        <div className="content">
          <div className="contact__title">
            <h1>Contact</h1>
          </div>
          <div className="contact__content">
              <form ref={name} id="form-contact" className='contact__form'>
                <input type="text" id='form-name' className='form-name' placeholder='Escribe tu nombre*' title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required name='form-name' />
                <input type="text" id='form-mail' className='form-mail' placeholder='Escribe tu correo*' required name='form-mail' title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" />
                <textarea className='form-msg' name="form-msg" id="form-msg" cols="30" rows="10" placeholder="Déjame tus comentarios *" required></textarea>
                <button className='form-send' id="form-send" name="form-send">Enviar</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
