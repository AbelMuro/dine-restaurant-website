import React from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from '~/Common/icons';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function EnjoyablePlace() {
    const [tablet] = useMediaQuery('(max-width: 840px)');
    const [mobile] = useMediaQuery('(max-width: 600px)');

    const setImage = () => {
        if(mobile)
            return images['farmMobile'];
        else if(tablet)
            return images['farmTablet'];
        else    
            return images['farmDesktop'];
    }

    return(
        <section className={styles.container}>
            <img className={styles.photo} src={setImage()}/>
            <div className={styles.content}>
                <img alt='line' src={icons['line']} className={styles.content_line}/>
                <h1 className={styles.content_title}>
                    Enjoyable place for all the family
                </h1>
                <p className={styles.content_desc}>
                    Our relaxed surroundings make 
                    dining with us a great experience for everyone. 
                    We can even arrange a tour of the farm 
                    before your meal.
                </p>
            </div>
        </section>
    )
}

export default EnjoyablePlace;