import React from 'react';
import styles from './styles.module.css';
import icons from '~/Common/icons';

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <img className={styles.header_logo} src={icons['logo']} alt='dine'/>
                <h1 className={styles.header_title}>
                    Exquisite dining since 1989
                </h1>
                <p className={styles.header_desc}>
                    Experience our seasonal menu in beautiful country surroundings. 
                    Eat the freshest produce from the comfort of our farmhouse.
                </p>
                <button type='button' className={styles.header_book}>
                    book a table
                </button>                
            </section>

        </header>
    )
}

export default Header;