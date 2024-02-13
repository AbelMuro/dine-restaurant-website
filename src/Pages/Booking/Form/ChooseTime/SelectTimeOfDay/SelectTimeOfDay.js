import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function SelectTimeOfDay() {
    const [time, setTime] = useState('AM');
    const [open, setOpen] = useState(false);
    const arrowRef = useRef();
    const dialogRef = useRef();

    const handleSelect = (e) => {
        if(!e.target.matches('li')) return;
        let timeOfDay = e.target.getAttribute('data-id');
        setTime(timeOfDay);
    }

    const handleOpen = () => {
        setOpen(!open);
    }


    useEffect(() => {
        if(open){
            dialogRef.current.style.transform = 'scale(1)';
            arrowRef.current.style.transform = 'rotate(180deg)';                
        }  
        else{
            dialogRef.current.style.transform = '';
            arrowRef.current.style.transform = '';                
        }    
    }, [open])

    return(
        <div className={styles.select} onClick={handleOpen}>
            <strong className={styles.select_time}>
                {time}
            </strong>
            <img src={icons['arrow']} alt='arrow' ref={arrowRef} className={styles.select_arrow}/>
            <dialog open={true} className={styles.select_dropdown} ref={dialogRef}>
                <ul className={styles.select_list} onClick={handleSelect}>
                    <li data-id='AM'>
                        {time === 'AM' && <img src={icons['check']}/>}
                        AM
                    </li>
                    <li data-id='PM'> 
                        {time === 'PM' && <img src={icons['check']}/>}
                        PM
                    </li>
                </ul>
            </dialog>
            <input type='hidden' value={time} name='timeOfDay'/>
        </div>
    )
}

export default SelectTimeOfDay;