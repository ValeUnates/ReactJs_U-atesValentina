import React from 'react'
import "./Checkout.css"


const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
    return (
    <form className='formulario' onSubmit={handleSubmitForm}>
        <label className='nombre'>Nombre completo</label>
        <input type="text" name='fullname' value={dataForm.fullname} onChange={ handleChangeInput }/>

        <label className='telefono'> Telefono</label>
        <input type="number" name='phone' value={dataForm.phone} onChange={handleChangeInput} />

        <label className='email'>Email</label>
        <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput}/>
        <label className='email'>Repita su email</label>
        <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput}/>

        <button className='enviar' type='submit'>Enviar mi orden</button>

    </form>
    )
}

export default FormCheckout
