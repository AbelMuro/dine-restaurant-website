import React from 'react';
import Form from './Form';
import styles from './styles.module.css';
import icons from '~/Common/icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import images from './images';
import {useNavigate} from 'react-router-dom';

function Booking() {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/')
    }

    return(
        <>
            <section className={styles.reservations}>
                <div className={styles.reservations_content}>
                    <img className={styles.reservations_logo} src={icons['logo']} onClick={handleNavigate}/>
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
                    {mobile && <button className={styles.reservations_button}>
                        reserve place    
                    </button>}
                    <Form/>                
                </div>
            </section>        
            <div className={styles.reservations_images}>
                <img className={styles.reservations_pattern} alt='background pattern' src={images['bgPattern']}/>
                <img className={styles.reservations_lines} alt='background lines' src={icons['patternLines']}/>
            </div>        
        </>

    )
}

export default Booking;