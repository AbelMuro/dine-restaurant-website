import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function ChoosePeople() {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);    
    }

    const handleDecrement = () => {
        setCount((prev) => {
            if(prev - 1 <= 0)
                return 1;
            else    
                return prev - 1;
        })
    }

    return(
        <div className={styles.people}>
            <button type='button' className={styles.people_minus} onClick={handleDecrement}>
            </button>
            {`${count} people`}
            <button type='button' className={styles.people_plus} onClick={handleIncrement}>
            </button>   
            <input type='hidden' value={count} name='people'/>
        </div>
    )
}

export default ChoosePeople;