import React from 'react';
import s from './style.module.sass'
import GoogleMapsContainer from './GoogleMapsContainer';
import { MDBIcon } from 'mdb-react-ui-kit';


export default function ContactsPage() {
    return (
        <section className={['wrapper', s.container].join(' ')}>
            <div className={s.contacts}>
                <h6 className='text-uppercase fw-bold mb-4 text-muted '>Contact</h6>
                <p className='text-muted fs-6'>
                    <MDBIcon icon="home" className="me-2 fs-6 text-muted" />
                    Amsterdam, Dam Square, LT 1001, NL
                </p>
                <p className='text-muted fs-6'>
                    <MDBIcon icon="envelope" className="me-3 fs-6 text-muted" />
                    info@example.com
                </p>
                <p className='text-muted fs-6'>
                    <MDBIcon icon="phone" className="me-3 fs-6 text-muted" />+ 31 234 567 88
                </p>
                <p className='text-muted fs-6'>
                    <MDBIcon icon="print" className="me-3 fs-6 text-muted" />+ 31 234 567 89
                </p>
            </div>
            <div>
                <GoogleMapsContainer />
            </div>
        </section>
    );
}
