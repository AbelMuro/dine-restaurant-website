import React from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from '~/Common/icons'
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function SourcedFood(){
    const [tablet] = useMediaQuery('(max-width: 840px)');
    const [mobile] = useMediaQuery('(max-width: 600px)');

    const setImage = () => {
        if(mobile)
            return images['foodMobile'];
        else if(tablet)
            return images['foodTablet'];
        else   
            return images['foodDesktop'];
    }

    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <img className={styles.content_line} src={icons['line']}/>
                <h2 className={styles.content_title}>
                    The most locally sourced food
                </h2>
                <p className={styles.content_desc}>
                    All our ingredients come directly 
                    from our farm or local fishery. So you can be sure 
                    that you’re eating the freshest, most sustainable food.
                </p>
            </div>
            <div className={styles.photo_container}>
                <img className={styles.photo} src={setImage()} />
                <img className={styles.pattern_lines} src={icons['patternLines']}/>                
            </div>
        </section>
    )
}

export default SourcedFood;