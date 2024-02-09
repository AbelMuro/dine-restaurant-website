import React from 'react';
import styles from './styles.module.css';
import icons from '~/Common/icons';

function MenuHighlights() {
    return(
        <section className={styles.highlights}>
            <img className={styles.highlights_line} src={icons['line']}/>
            <h1 className={styles.highlights_title}>
                A few highlights from our menu
            </h1>
            <p className={styles.highlights_desc}>
                We cater for all dietary requirements, 
                but here’s a glimpse at some of our diner’s favourites. 
                Our menu is revamped every season.
            </p>
            <ul className={styles.highlights_list}>
                <li>
                    <h2>
                        Seared Salmon Fillet
                    </h2>
                    <p>
                        Our locally sourced salmon served with a refreshing buckwheat summer salad.
                    </p>
                </li>
                <li>
                    <h2>
                        Rosemary Filet Mignon
                    </h2>
                    <p>
                        Our prime beef served to your taste with a delicious choice of seasonal sides.
                    </p>
                </li>
                <li>
                    <h2>
                        Summer Fruit Chocolate Mousse
                    </h2>
                    <p>
                        Creamy mousse combined with summer fruits and dark chocolate shavings.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default MenuHighlights;