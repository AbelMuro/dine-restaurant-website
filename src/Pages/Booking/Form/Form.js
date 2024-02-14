import React from 'react';
import Input from './Input'
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';
import ChoosePeople from './ChoosePeople';
import styles from './styles.module.css';

function Form(){

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputs = e.target.elements;
        let name = inputs.name.value;
        let email = inputs.email.value;
        let hour = inputs.hour.value;
        let minutes = inputs.minutes.value;
        let timeOfDay = inputs.timeOfDay.value;
        let people = inputs.people.value;
        let month = inputs.month.value;
        let day = inputs.day.value;
        let year = inputs.year.value;        
        console.log('submitted');  
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type='text' placeholder='Name' name='name'/>
            <Input type='email' placeholder='Email' name='email'/>
            <ChooseDate/>
            <ChooseTime/>
            <ChoosePeople/>
            <input type='submit' value='make reservation' className={styles.form_submit}/>
        </form>
    )
}

export default Form;