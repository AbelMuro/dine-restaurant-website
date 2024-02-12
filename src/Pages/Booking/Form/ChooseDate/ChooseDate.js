import React, {useRef, useState, useEffect} from 'react';
import InputDate from './InputDate';
import styles from './styles.module.css';


//need to find a way to check all three states and determine when the error message should be displayed
function ChooseDate(){
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const errorMessageRef = useRef();
    const currentYear = new Date().getFullYear();


    useEffect(() => {
        //find out a way to display or remove the error message with the three states
    }, [day, month, year])

    return(
        <fieldset className={styles.date}>
            <h1 className={styles.date_title}>
                Pick a date
            </h1>
            <fieldset className={styles.date_inputs}>
                <InputDate min={0} max={12} placeholder='MM' date={day} setDate={setDay}/>
                <InputDate min={0} max={31} placeholder='DD' date={month} setDate={setMonth} />
                <InputDate min={0} max={Number(currentYear)} placeholder='YYYY' date={year} setDate={setYear}/>       
                <div className={styles.error_message} ref={errorMessageRef}>
                    This field is incomplete
                </div>
            </fieldset>

        </fieldset>
    )
}

export default ChooseDate;