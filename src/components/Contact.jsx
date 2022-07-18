import React, { useRef, useEffect, useState } from 'react';
import useObserver from '../hooks/useObserver';
import Loader from './Loader';
import EmoIcon from '../assets/img/laugh.svg';

const ModalThanks = ({ show}) => {
  return (
    <div className={show ? "modal" : 'modal modal-hidden'}>
      <div className="modal__container">
        <div className="modal__content">
          <h2>Gracias por tu mensaje!</h2>
          <img src={EmoIcon} width='100px' alt="" />
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const msg = useRef();

  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    observador.observe(form.current);

    return () => observador.disconnect()
  }, []);


  const handleClickEnviar = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    setShowLoader(true);
    fetch('https://formsubmit.co/ajax/0ca3e33e14c61dbcc67513e390cf6d7f',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        message: msg.current.value
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data.success)
      setShowLoader(false);
      if (data.success) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          name.current.value = '';
          email.current.value = '';
          msg.current.value = '';
        }, 2000)
      }
    })
    .catch(error => {
      console.log(error);
      setShowLoader(false)
    });
  }

  return (
    <div id='contact' className='contact'>
      <div className="container">
        <div className="content">
          <div className="contact__title">
            <h1>Contact</h1>
          </div>
          <div className="contact__content">
              <div ref={form} id="form-contact" className='contact__form'>
                <input ref={name} type="text" id='form-name' className='form-name' placeholder='Escribe tu nombre*' title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required name='form-name' />
                <input ref={email} type="text" id='form-mail' className='form-mail' placeholder='Escribe tu correo*' required name='form-mail' title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" />
                <textarea ref={msg} className='form-msg' name="form-msg" id="form-msg" cols="30" rows="10" placeholder="Déjame tus comentarios *" required></textarea>
                <button onClick={(e) => handleClickEnviar(e)} className='form-send' id="form-send" name="form-send">Enviar</button>
              </div>
          </div>
        </div>
      </div>
      <ModalThanks show={showModal}/>
      <Loader show={showLoader}/>
    </div>
  );
}

export default Contact;
