import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useSelector } from 'react-redux';

const Hero = () => {

  const { userInfo } = useSelector( (state) => state.auth);


  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          { userInfo ? 
            <>
              <h2 className='text-center mb-4'> Welcome back {userInfo.name} </h2>
              <p className='text-center mb-4'> Email: {userInfo.email} </p>
              <div className='d-flex'>
                <LinkContainer to='/profile'>
                    <Button variant='primary' className='me-3'>
                    Manage Profile
                    </Button>
                </LinkContainer>
              </div>
            </>
            : 
            <>
              <h2 className='text-center mb-4'> Compass User  </h2>
              <p className='text-center mb-4'> Please Login to access User Dashboard </p>
              <div className='d-flex'>
                <LinkContainer to='/login'>
                    <Button variant='primary' className='me-3'>
                    Login
                    </Button>
                </LinkContainer>
              </div>
            </> 
          }
        </Card>
      </Container>
    </div>
  );
};

export default Hero;