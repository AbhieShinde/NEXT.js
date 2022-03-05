/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Link from 'next/link'

const index = ({heros}) => {
  return (
    <div className="container">
      <span className="display-5 my-2">Superhero Identity Manager</span>
      <div>
      {heros.map(hero => {
        return (
          <MDBCard className='border border-2 my-2' style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <MDBCardText>
                Reveal the Identity
              </MDBCardText>
              <Link href={`/${hero._id}`} passHref><MDBBtn className="mx-2">View Hero</MDBBtn></Link>
              <Link href={`/${hero._id}/edit`} passHref><MDBBtn>Edit Hero</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        )
      })}

      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios('http://localhost:3000/api/hero')
  
  return {
    props: {
      heros: res.data.hero
    } 
  }
}

export default index