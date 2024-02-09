import React from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from '~/Common/icons'

function SourcedFood(){
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
            <img className={styles.photo} src={images['foodDesktop']} />
        </section>
    )
}

export default SourcedFood;