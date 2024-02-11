import React from 'react';
import styles from './styles.module.css';
import commonIcons from '~/Common/icons';
import images from './images';
import icons from './icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function MenuHighlights() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    const setImage = (name) => {
        if(mobile)
            return images[`${name}Mobile`];
        else    
            return images[`${name}DesktopTablet`];
    }

    return(
        <section className={styles.highlights}>
            <div className={styles.highlights_content}>
                <img className={styles.highlights_line} src={commonIcons['line']}/>
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
                        <img className={styles.list_image} src={setImage('salmon')} alt='salmon'/>
                        <img className={styles.list_line} src={icons['line']}/>
                        <h2>
                            Seared Salmon Fillet
                        </h2>
                        <p>
                            Our locally sourced salmon served with a refreshing buckwheat summer salad.
                        </p>
                    </li>
                    <li>
                        <img className={styles.list_image} src={setImage('beef')} alt='beef'/>
                        <img className={styles.list_line} src={icons['line']}/>
                        <h2>
                            Rosemary Filet Mignon
                        </h2>
                        <p>
                            Our prime beef served to your taste with a delicious choice of seasonal sides.
                        </p>
                    </li>
                    <li>
                        <img className={styles.list_image} src={setImage('chocolate')} alt='chocolate'/>
                        <img className={styles.list_line} src={icons['line']}/>
                        <h2>
                            Summer Fruit Chocolate Mousse
                        </h2>
                        <p>
                            Creamy mousse combined with summer fruits and dark chocolate shavings.
                        </p>
                    </li>
                </ul>                
            </div>

        </section>
    )
}

export default MenuHighlights;