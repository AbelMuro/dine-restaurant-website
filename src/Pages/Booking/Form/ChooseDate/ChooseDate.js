import React, {useRef, useState} from 'react';
import InputDate from './InputDate';
import styles from './styles.module.css';


//need to find a way to check all three states and determine when the error message should be displayed
function ChooseDate(){
    const [isEmpty, setIsEmpty] = useState(false)
    const currentYear = new Date().getFullYear();
    const day = useRef();
    const month = useRef();
    const year = useRef();


    return(
        <fieldset className={styles.date}>
            <h1 className={styles.date_title}>
                Pick a date
            </h1>
            <fieldset className={styles.date_inputs}>
                <InputDate min={0} max={12} placeholder='MM' setIsEmpty={setIsEmpty} ref={day}/>
                <InputDate min={0} max={31} placeholder='DD' setIsEmpty={setIsEmpty} ref={month}/>
                <InputDate min={0} max={Number(currentYear)} placeholder='YYYY' setIsEmpty={setIsEmpty} ref={year}/>       
                {isEmpty && <div className={styles.error_message}>
                    This field is incomplete
                </div>}      
            </fieldset>

        </fieldset>
    )
}

export default ChooseDate;