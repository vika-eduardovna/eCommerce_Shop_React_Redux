import React from 'react';
import s from './style.module.sass'
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
            <div className={s.map_box}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8522903853095!2d4.890907201929244!3d52.37309830475803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609d9faf2eaab%3A0x28528186b9782ff2!2sDam%20Square!5e0!3m2!1sru!2sde!4v1675939696444!5m2!1sru!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}
