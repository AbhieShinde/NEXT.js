/* eslint-disable react-hooks/rules-of-hooks */
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Router, { useRouter } from 'next/router';
import { useState } from 'react';

function editHero({heros}) {
    const router = useRouter()
    const heroId = router.query.id

    const [form, setForm] = useState({
        superHero: heros.superHero,
        realName: heros.realName
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
            const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: 'PUT',
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
        <h5 className='display-5'>Edit Hero Identity</h5>
        <form onSubmit={handleForm} method="post">
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='SuperHero'
                type='text'
                name='superHero'
                value={form.superHero}/>
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='RealName'
                type='text'
                name='realName'
                value={form.realName}/>
            <MDBBtn className='my-2 btn btn-info' type='submit'>Save</MDBBtn>
        </form>
    </div>
  )
}

export async function getServerSideProps({params}) {
    const res = await axios(`http://localhost:3000/api/hero/${params.id}`)
  
    const {hero} = res.data
    
    return {
      props: {
        heros: hero
      } 
    }
  }

export default editHero