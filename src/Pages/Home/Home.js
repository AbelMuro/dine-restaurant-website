import React from 'react';
import Header from './Header';
import CaptionOne from './CaptionOne';
import CaptionTwo from './CaptionTwo';
import MenuHighlights from './MenuHighlights';
import ImageCarousel from './ImageCarousel'
import MakeReservation from './MakeReservation';
import styles from './styles.module.css';
import images from './images';

function Home() {
    return(
        <main className={styles.main}>
            <img className={styles.bgPattern} src={images['bgPatternOne']}/>
            <img className={styles.bgPattern} src={images['bgPatternTwo']}/>
            <img className={styles.bgPattern} src={images['bgPatternOne']} />
            <Header/>
            <CaptionOne/>
            <CaptionTwo/>
            <MenuHighlights/>
            <ImageCarousel/>
            <MakeReservation/>
        </main>
    )
}

export default Home;