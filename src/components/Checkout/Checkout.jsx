import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import "./Checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({ 
        fullname: "",
        phone:"",
        email:""

    }) 
    
    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart }= useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        
        const order = {
            buyer: {...dataForm},
            products: {...cart},
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice()
        }
    uploadOrder(order)
}

    const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
        .then( (response) => setIdOrder(response.id) )
        .catch((error) => console.log(error))
        .finally( () => {
            deleteCart()
        })
    }

    return (
        <div>
            {
                idOrder === null ? (
                    <FormCheckout 
            dataForm={dataForm} 
            handleChangeInput={handleChangeInput} 
            handleSubmitForm={handleSubmitForm} />
                ) : (
                    <div className='checkout'>
                        <h2 className='mensaje-orden'>Su orden se realizó con éxito!! 😃</h2>
                        <p className='numero-seguimiento'>Este es su número de seguimiento: {idOrder}</p>
                        <Link className='volver-inicio' to="/" >Volver al inicio</Link>
                    </div>
                )
            }
            
        </div>
    )
}

export default Checkout
