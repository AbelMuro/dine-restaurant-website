import React from 'react';
import Header from './Header';
import styles from './styles.module.css';
import icons from '~/Common/icons';

function Home() {
    return(
        <main className={styles.home}>
            <header className={styles.home_header}>
                <img className={styles.home_logo} src={icons['logo']}/>
                <h1 className={styles.home_title}>
                    Exquisite dining since 1989
                </h1>
                <p className={styles.home_desc}>
                    Experience our seasonal menu in beautiful country surroundings. 
                    Eat the freshest produce from the comfort of our farmhouse.
                </p>
                <button className={styles.home_book}>
                    book a table
                </button>

            </header>

        </main>
    )
}

export default Home;