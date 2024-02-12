import React from 'react';
import Header from './Header';
import EnjoyablePlace from './EnjoyablePlace';
import SourcedFood from './SourcedFood';
import MenuHighlights from './MenuHighlights';
import ImageCarousel from './ImageCarousel'
import MakeReservations from './MakeReservation';
import styles from './styles.module.css';
import images from './images';

function Home() {
    return(
        <main className={styles.main}>
            <img className={styles.bgPattern} src={images['bgPatternOne']}/>
            <img className={styles.bgPattern} src={images['bgPatternTwo']}/>
            <img className={styles.bgPattern} src={images['bgPatternOne']} />
            <Header/>
            <EnjoyablePlace/>
            <SourcedFood/>
            <MenuHighlights/>
            <ImageCarousel/>
            <MakeReservations/>
        </main>
    )
}

export default Home;