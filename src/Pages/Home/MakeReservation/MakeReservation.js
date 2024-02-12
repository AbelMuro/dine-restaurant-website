import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function MakeReservations() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Booking');
    }


    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Ready to make a reservation?
                </h1>
                <button onClick={handleNavigate}>
                    book a table
                </button>
            </div>
        </section>
    )
}

export default MakeReservations;