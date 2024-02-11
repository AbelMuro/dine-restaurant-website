import React from 'react';
import Header from './Header';
import EnjoyablePlace from './EnjoyablePlace';
import SourcedFood from './SourcedFood';
import MenuHighlights from './MenuHighlights';
import ImageCarousel from './ImageCarousel'
import styles from './styles.module.css';
import images from './images';

function Home() {
    return(
        <main className={styles.main}>
            <img className={styles.bgPatternOne} src={images['bgPatternOne']}/>
            <img className={styles.bgPatternTwo} src={images['bgPatternTwo']}/>
            <Header/>
            <EnjoyablePlace/>
            <SourcedFood/>
            <MenuHighlights/>
            <ImageCarousel/>
        </main>
    )
}

export default Home;