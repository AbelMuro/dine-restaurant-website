import React, {useState, useRef, useEffect} from 'react';
import SelectTimeOfDay from './SelectTimeOfDay';
import styles from './styles.module.css';

function ChooseTime() {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const hourInputRef = useRef();
    const minutesInputRef = useRef();
    const titleRef = useRef();
    const errorMessageRef = useRef();


    const addErrorStyles = () => {
        hourInputRef.current.style.borderBottom = '1px solid #B54949';
        minutesInputRef.current.style.borderBottom = '1px solid #B54949';
        hourInputRef.current.style.color = '#B54949';
        minutesInputRef.current.style.color = '#B54949';
        titleRef.current.style.color = '#B54949';
        hourInputRef.current.style.setProperty('--placeholder', 'rgba(181, 73, 73, 0.5)');
        minutesInputRef.current.style.setProperty('--placeholder', 'rgba(181, 73, 73, 0.5)');
        errorMessageRef.current.style.display = 'block';
    }

    const removeErrorStyles = () => {
        hourInputRef.current.style.borderBottom = '';
        minutesInputRef.current.style.borderBottom = '';
        hourInputRef.current.style.color = '';
        minutesInputRef.current.style.color = '';
        titleRef.current.style.color = '';
        hourInputRef.current.style.setProperty('--placeholder', '');
        minutesInputRef.current.style.setProperty('--placeholder', '');
        errorMessageRef.current.style.display = '';
    }


    const handleNumber = (e) => {
        if(e.key === 'e' || e.key === '.')
            return e.preventDefault() 
    }

    const handleHour = (e) => {
        e.target.setCustomValidity('')
        let userInput = e.target.value;
        if(userInput.length > 2) return;
        userInput = Number(userInput);
        if(userInput === NaN) return;
        if(0 <= userInput && userInput <= 12)
            setHour(e.target.value);
    }

    const handleMinutes = (e) => {
        e.target.setCustomValidity('')
        let userInput = e.target.value;
        if(userInput.length > 2) return;
        userInput = Number(userInput);
        if(userInput === NaN) return;
        if(0 <= userInput && userInput <= 59)
            setMinutes(e.target.value);
    }

    const handleBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            addErrorStyles();
    }

    const handleInvalid = (e) => {
        let isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            addErrorStyles();

        e.target.setCustomValidity(' ')
    }

    useEffect(() => {
        if(hour && minutes)
            removeErrorStyles();
    }, [hour, minutes])

    return(
        <section className={styles.time}>
            <h1 className={styles.time_title} ref={titleRef}>
                Pick a time
            </h1>
            <fieldset className={styles.time_inputs}>
                <input 
                    type='number' 
                    value={hour}
                    onChange={handleHour}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    onKeyDown={handleNumber}
                    placeholder='09'
                    className={styles.input}
                    name='hour'
                    required
                    ref={hourInputRef}
                    />
                <input 
                    type='number' 
                    value={minutes}
                    onChange={handleMinutes}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    onKeyDown={handleNumber}
                    placeholder='00'
                    className={styles.input}
                    name='minutes'
                    required
                    ref={minutesInputRef}
                    />
                <SelectTimeOfDay/>              
            </fieldset>
            <div className={styles.error_message} ref={errorMessageRef}>
                This field is incomplete
            </div>
        </section>
    )
}

export default ChooseTime;