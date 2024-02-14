import React, {useState, useRef} from 'react';
import styles from './styles.module.css';

function Input({type, placeholder, name}) {
    const [text, setText] = useState('');
    const emptyMessage = useRef();
    const invalidMessage = useRef();
    const inputRef = useRef();

    const addErrorStyles = () => {
        inputRef.current.style.borderColor = '#B54949';
        inputRef.current.style.color = '#B54949';
        inputRef.current.style.setProperty('--placeholder', 'rgba(181, 73, 73, 0.5)')
    }

    const removeErrorStyles = () => {
        inputRef.current.style.borderColor = '';
        inputRef.current.style.color = '';
        inputRef.current.style.setProperty('--placeholder', 'rgba(17, 17, 17, 0.5)');
        emptyMessage.current.style.display = '';
        invalidMessage.current.style.display = '';
    }

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        removeErrorStyles();
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty){
            emptyMessage.current.style.display = 'block';
            addErrorStyles();
        }
        else if(isInvalid){
            invalidMessage.current.style.display = 'block';
            addErrorStyles();
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty){
            emptyMessage.current.style.display = 'block';
            addErrorStyles();
        }
        else{
            invalidMessage.current.style.display = 'block';
            addErrorStyles();
        }
    }



    return(
        <fieldset className={styles.container}>
            <input 
                type={type} 
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder={placeholder} 
                className={styles.input}
                ref={inputRef}
                name={name}
                required
                />          
                <label className={styles.error_message} ref={emptyMessage}>
                    This field is required
                </label>  
                <label className={styles.error_message} ref={invalidMessage}>
                    Email is invalid
                </label>  
        </fieldset>

    )
}

export default Input;