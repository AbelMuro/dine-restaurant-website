import React, {useRef, useState, useEffect} from 'react';
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

    const handleNumber = (e) => {
        if(e.key === 'e' || e.key === '.')
            return e.preventDefault() 
    }

    const handleMonth = (e) => {
        e.target.setCustomValidity('');
        let userInput = e.target.value;
        if(userInput.includes('e')) return;
        if(0 <= userInput && userInput <= 12)
            setMonth(userInput);
    }

    const handleDay = (e) => {
        e.target.setCustomValidity('');
        let userInput = e.target.value;
        console.log(userInput.includes('e'))
        if(userInput.includes('e')) return;
        if(0 <= userInput && userInput <= 31)
            setDay(userInput);
    }

    const handleYear = (e) => {
        e.target.setCustomValidity('');
        let userInput = e.target.value;
        if(userInput.includes('e')) return;
        if(userInput.length > 4) return;
        setYear(e.target.value)
    }

    const handleBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty){
            addErrorStyles();
            errorMessageRef.current.style.display = 'block';
        }
    }

    const handleInvalid = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        addErrorStyles();

        if(isEmpty)
            errorMessageRef.current.style.display = 'block';
        
        e.target.setCustomValidity(' ');
    }

    useEffect(() => {
        if(!day || !month || !year) return;

        removeErrorStyles();
        errorMessageRef.current.style.display = '';          
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
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    onKeyDown={handleNumber}
                    type='number' 
                    placeholder='DD'
                    className={styles.input}
                    ref={dayInputRef}
                    required
                    name='day'/>                
                <input 
                    value={month}
                    onChange={handleMonth}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    onKeyDown={handleNumber}
                    type='number' 
                    placeholder='MM'
                    className={styles.input}
                    ref={monthInputRef}
                    required
                    name='month'/>
                <input 
                    value={year}
                    onChange={handleYear}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    onKeyDown={handleNumber}
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