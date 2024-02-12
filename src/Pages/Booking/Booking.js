import React from 'react';
import Form from './Form';
import styles from './styles.module.css';
import icons from '~/Common/icons';

function Booking() {
    return(
        <section className={styles.reservations}>
            <div className={styles.reservations_content}>
                <img className={styles.reservations_logo} src={icons['logo']}/>
                <div className={styles.reservations_header}>
                    <h1>
                        Reservations
                    </h1>
                    <p>
                        We can’t wait to host you. 
                        If you have any special requirements 
                        please feel free to call on the phone 
                        number below. We’ll be happy to accommodate you.
                    </p>                
                </div>   
                <Form/>                
            </div>
        </section>
    )
}

export default Booking;