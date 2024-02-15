import React from 'react';
import Input from './Input'
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';
import ChoosePeople from './ChoosePeople';
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';

function Form(){
    const navigate = useNavigate();
    const calendar = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputs = e.target.elements;
        let month = Number(inputs.month.value);
        let day = Number(inputs.day.value);
        let year = Number(inputs.year.value);  
        
        if(day > calendar[month - 1] || day === 0){     //we check if the day is a valid day for the month (29, feb)
            alert('Reservation date is invalid');
            return;
        }

        let reservationDate = new Date(`${month}/${day}/${year}`).getTime(); 
        let currentDate = new Date().getTime();  

        if(currentDate > reservationDate){
            alert('Reservation date must be after today')
            return;
        }


        alert('Reservation has been made');
        navigate('/')
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