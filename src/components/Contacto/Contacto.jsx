import React, { useState } from 'react'

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviado", valores)
    }

    const handleValores = (e) =>{
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='ingresá tu nombre'
            value={valores.nombre}
            onChange={handleValores}
            name='nombre'
            />

            <input 
            type="email" 
            placeholder='ingresá tu email'
            value={valores.email}
            onChange={handleValores}
            name='email'
            />

            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contacto