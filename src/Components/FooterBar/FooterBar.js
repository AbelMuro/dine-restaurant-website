import React from 'react';
import icons from '~/Common/icons';
import styles from './styles.module.css';

function FooterBar() {
    return( 
        <footer className={styles.footer}>
            <section className={styles.footer_content}>
                <img src={icons['logo']} className={styles.footer_logo}/>
                <address className={styles.footer_address}>
                    marth waite, sedbergh <br/>
                    cumbria<br/>
                    +00 44 123 4567
                </address>
                <p className={styles.footer_times}>
                    open times <br/>
                    mon - fri: 09:00 AM - 10:00 PM<br/>
                    sat - sun: 09:00 AM - 11:30 PM
                </p>

            </section>
            

        </footer>
    )
}

export default FooterBar;