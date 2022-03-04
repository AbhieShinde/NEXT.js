/* eslint-disable react-hooks/rules-of-hooks */
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import { useState } from 'react';

function addNewHero() {
    const [form, setForm] = useState({
        superHero: '',
        realName: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = async (e) => {
        e.preventDefault()

        try {
            const res = await axios('http://localhost:3000/api/hero', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(form)
            })

            Router.push('/')

        } catch (error) {
            console.log( error )
        }
    }

  return (
    <div className='container'>
        <h1 className='display-5'>Add a new Hero Identity</h1>
        <form onSubmit={handleForm} method="post">
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='Super Hero'
                type='text'
                name='superHero'/>
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='Real Name'
                type='text'
                name='realName'/>
            <MDBBtn className='my-2' type='submit'>Add New Hero</MDBBtn>
        </form>
    </div>
  )
}

export default addNewHero