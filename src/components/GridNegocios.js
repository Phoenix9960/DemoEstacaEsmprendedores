import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { NegocioItem } from './NegocioItem';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

export const GridNegocios = () => {
  const [negocios, setNegocios] = useState([])
  const getNegocios = async() =>{

  const {data} = await axios.get('https://emprendedores-estaca-chilpo.herokuapp.com/api/negocios')
      setNegocios(data.negocios)
  }

  useEffect(() => {
      getNegocios()
  }, []);

  console.log(negocios)

  return (
    <>
      <div className='items'>
            {negocios.length>0 && negocios.map( (negocio, idx) => 
            <NegocioItem key={idx} nombre={negocio.nombre} logotipo={negocio.logotipo}/> )
            
        }
        
        </div>
        <form className='from' onSubmit={(e) => {e.preventDefault()
          const nombre = e.target[0].value
          const logotipo = e.target[1].value
          const ubicacion = e.target[2].value
          const telefono = e.target[3].value
          
          axios.post('https://emprendedores-estaca-chilpo.herokuapp.com/api/negocios',{nombre,logotipo,ubicacion,telefono})
          window.location.reload()
        }}>
          <div className="form-group">
            <label >Nombre</label>
            <input type="text" className="form-control" placeholder="Nombre del negocio"/>
            </div>
          <div className="form-group">
            <label >logotipo</label>
            <input type="text" className="form-control" placeholder="url de la imagen"/>
            </div>
          <div className="form-group">
            <label >Direccion</label>
            <input type="text" className="form-control" placeholder="Direccion del local"/>
          </div>
          <div className="form-group">
            <label >Telefono</label>
            <input type="text" className="form-control"/>
          
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </>
  )
}
