import React, {useRef} from 'react';
import Input from './Input'
import ChooseDate from './ChooseDate';
import styles from './styles.module.css';

function Form(){

    return(
        <form className={styles.form}>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='Email' />
            <ChooseDate/>
            <input type='submit' value='make reservation' className={styles.form_submit}/>
        </form>
    )
}

export default Form;