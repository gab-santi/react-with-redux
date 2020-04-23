import React from 'react'
import styles from './Styles.module.scss';

const Card = ({name, email, id, icon}) => {
    return (
        <div className={styles['card']}>
            <img alt="people" src={icon} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;
