import React from 'react'
import '../styles.css';

export const NegocioItem = ({nombre, logotipo}) => {

    return (
        <div className='item'>
          <p className ='p'>{nombre}  </p>
          <img className='img' src= {logotipo}  alt='imagen del negocio '/>
        </div>
    )
}