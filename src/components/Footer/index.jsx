import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import s from './style.module.sass'

export default function Footer() {
  return (
    <div className={['wrapper', s.container].join(' ')}>
      <MDBFooter bgColor='bg-light bg-gradient' className='text-white text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-muted'>Footer Content</h5>

              <p className="fs-6 fw-light text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                atque cumque eum delectus sint!
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <section className='mb-4'>
                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#3b5998' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#55acee' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#dd4b39' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#ac2bac' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#0082ca' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#333333' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='github' />
                </MDBBtn>
              </section>
            </MDBCol>


          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}