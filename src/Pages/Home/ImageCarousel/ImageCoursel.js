import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from './icons'
import commonIcons from '~/Common/icons';
import data from './Data';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function ImageCoursel() {
    const [carousel, setCarousel] = useState('Family Gathering');
    const [tablet] = useMediaQuery('(max-width: 840px)');
    const buttonsRef = useRef();

    const handleCarousel = (e) => {
        if(!e.target.matches('button')) return;
        const id = e.target.getAttribute('data-id');
        setCarousel(id);
    }

    const handleImage = () => {
        return images[carousel + ' Desktop']
    }

    const handleDesc = () => {
        return data[carousel] && data[carousel].desc
    }

    useEffect(() => {
        const buttons = buttonsRef.current.children;
        
        Array.from(buttons).forEach((li) => {
            let button = li.lastChild;
            button.style.color = '';
        })

        Array.from(buttons).forEach((li) => {
            let button = li.lastChild;

            if(button.getAttribute('data-id') === carousel)
                button.style.color = '#4C4C4C';
        })

    }, [carousel])

    return(
        <section className={styles.carousel}>
            <div className={styles.carousel_imageContainer}>
                <img className={styles.carousel_patternLines} src={commonIcons['patternLines']}/>                
                <img className={styles.carousel_image} src={handleImage()}/>                
            </div>
            <h1 className={styles.carousel_title}>
                {carousel}
            </h1>
            <p className={styles.carousel_desc}>
                {handleDesc()}
            </p>
            <button className={styles.carousel_button}>
                book a table
            </button>
            <ul className={styles.carousel_list} ref={buttonsRef} onClick={handleCarousel}>
                <li>
                    {carousel === 'Family Gathering' && <img className={styles.line} src={icons['line']}/>}
                    <button type='button' className={styles.carousel_update} data-id='Family Gathering'>
                        Family Gathering
                    </button>
                </li>
                <li>
                    {carousel === 'Special Events' && <img className={styles.line} src={icons['line']}/>}
                    <button type='button' className={styles.carousel_update} data-id='Special Events'>
                        Special Events
                    </button>
                </li>
                <li>
                    {carousel === 'Social Events' && <img className={styles.line} src={icons['line']}/>}
                    <button type='button' className={styles.carousel_update} data-id='Social Events'>
                        Social Events
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default ImageCoursel;