import React, {useRef, useState, useEffect} from 'react';
import InputDate from './InputDate';
import styles from './styles.module.css';

function ChooseDate(){
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const errorMessageRef = useRef();
    const monthInputRef = useRef();
    const dayInputRef = useRef();
    const yearInputRef = useRef();
    const titleRef = useRef();
    const skipFirstRender = useRef(true);
    const currentYear = new Date().getFullYear();

    const addErrorStyles = () => {
        dayInputRef.current.style.borderBottom = '1px solid #B54949';
        yearInputRef.current.style.borderBottom = '1px solid #B54949';
        monthInputRef.current.style.borderBottom = '1px solid #B54949';
        dayInputRef.current.style.color = '#B54949';
        yearInputRef.current.style.color = '#B54949';
        monthInputRef.current.style.color = '#B54949';
        titleRef.current.style.color = '#B54949';
        dayInputRef.current.style.setProperty('--date-placeholder', 'rgba(181, 73, 73, 0.5)');
        monthInputRef.current.style.setProperty('--date-placeholder', 'rgba(181, 73, 73, 0.5)');
        yearInputRef.current.style.setProperty('--date-placeholder', 'rgba(181, 73, 73, 0.5)');
        errorMessageRef.current.style.display = 'block';
    }

    const removeErrorStyles = () => {
        dayInputRef.current.style.borderBottom = '';
        yearInputRef.current.style.borderBottom = '';
        monthInputRef.current.style.borderBottom = '';
        dayInputRef.current.style.color = '';
        yearInputRef.current.style.color = '';
        monthInputRef.current.style.color = '';
        titleRef.current.style.color = '';
        dayInputRef.current.style.setProperty('--date-placeholder', 'rgba(17, 17, 17, 0.5)');
        monthInputRef.current.style.setProperty('--date-placeholder', 'rgba(17, 17, 17, 0.5)');
        yearInputRef.current.style.setProperty('--date-placeholder', 'rgba(17, 17, 17, 0.5)');
    }

    const handleMonth = (e) => {
        let userInput = e.target.value;
        if(0 <= userInput && userInput <= 12)
            setMonth(userInput);
    }

    const handleDay = (e) => {
        let userInput = e.target.value;
        if(0 <= userInput && userInput <= 31)
            setDay(userInput);
    }

    const handleYear = (e) => {
        setYear(e.target.value)
    }

    const handleDayBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty)
            addErrorStyles();
    }

    const handleMonthBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty)
            addErrorStyles();
    }

    const handleYearBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty)
            addErrorStyles();
    }

    useEffect(() => {
        if(skipFirstRender.current){
            skipFirstRender.current = false;
            return
        }
        
        if(day && month && year){
            removeErrorStyles();
            errorMessageRef.current.style.display = '';            
        }
        
    }, [day, month, year])

    return(
        <section className={styles.date}>
            <h1 className={styles.date_title} ref={titleRef}>
                Pick a date
            </h1>
            <fieldset className={styles.date_inputs}>
                <input 
                    value={day}
                    onChange={handleDay}
                    onBlur={handleDayBlur}
                    type='number' 
                    placeholder='DD'
                    className={styles.input}
                    ref={dayInputRef}
                    required
                    name='day'/>                
                <input 
                    value={month}
                    onChange={handleMonth}
                    onBlur={handleMonthBlur}
                    type='number' 
                    placeholder='MM'
                    className={styles.input}
                    ref={monthInputRef}
                    required
                    name='month'/>
                <input 
                    value={year}
                    onChange={handleYear}
                    onBlur={handleYearBlur}
                    type='number' 
                    placeholder='YYYY'
                    className={styles.input}
                    ref={yearInputRef}
                    required
                    name='year'/>
            </fieldset>
            <div className={styles.error_message} ref={errorMessageRef}>
                This field is incomplete
            </div>
        </section>
    )
}

export default ChooseDate;