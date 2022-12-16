import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import s from './style.module.sass'

export default function App() {
  return (
    <div className={['wrapper', s.container].join(' ')}>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='pt-4'>
          <section className='mb-4'>
            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fab fa-facebook-f' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fa-twitter' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fa-google' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fa-instagram' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating

              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fa-linkedin' />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color='link'
              floating
              className='text-muted m-1'
              href='#!'
              role='button'
            >
              <MDBIcon size='2x' fab className='fa-github' />
            </MDBBtn>
          </section>
        </MDBContainer>
        <MDBContainer className='p-4 pb-3'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size='auto' className='mb-4 mb-md-0'>
                <p className='pt-2 fs-6 text-muted'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' size='12' className='mb-4 mb-md-0 text-muted'>
                <MDBInput type='text' id='form5Example2' label='Email address' />
              </MDBCol>

              <MDBCol size='auto' className='mb-4 mb-md-0' >
                <MDBBtn className={s.subscribe_btn}>Subscribe</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: '#6a797e', color: 'white' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}