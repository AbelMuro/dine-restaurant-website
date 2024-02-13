import React from 'react';
import Input from './Input'
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';
import ChoosePeople from './ChoosePeople';
import styles from './styles.module.css';

function Form(){

    return(
        <form className={styles.form}>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='Email' />
            <ChooseDate/>
            <ChooseTime/>
            <ChoosePeople/>
            <input type='submit' value='make reservation' className={styles.form_submit}/>
        </form>
    )
}

export default Form;