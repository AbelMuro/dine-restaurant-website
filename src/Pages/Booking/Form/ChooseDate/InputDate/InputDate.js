import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css'


const InputDate = forwardRef( ({min, max, placeholder, setIsEmpty}, ref)  => {
    const [date, setDate] = useState('');
    const inputRef = useRef();

    const addErrorStyles = () => {
        inputRef.current.style.borderBottom = '1px solid #B54949';
        inputRef.current.style.color = '#B54949'; 
        inputRef.current.style.setProperty('--date-placeholder', 'rgba(181, 73, 73, 0.5)');
    }

    const removeErrorStyles = () => {
        inputRef.current.style.borderBottom = '';
        inputRef.current.style.color = ''; 
        inputRef.current.style.setProperty('--date-placeholder', 'rgba(17, 17, 17, 0.5)');
        setIsEmpty(false)
    }


    const handleDate = (e) => {
        const value = Number(e.target.value);
        if(value === NaN) return

        if(min <= value && value <= max) {
            setDate(e.target.value);
            removeErrorStyles()
        }
           
        
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty){
            addErrorStyles();
            setIsEmpty(true);
        }

    }

    useImperativeHandle(ref, () => ({
        get date() {
            return date
        }
    }))


    return(
        <input 
            value={date}
            onChange={handleDate}
            onBlur={handleBlur}
            type='number' 
            placeholder={placeholder} 
            className={styles.input}
            ref={inputRef}
            required/>
    )
})

export default InputDate;