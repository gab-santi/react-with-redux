import React from 'react'
import styles from './Styles.module.scss';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className={styles['search_container']}>
            <input 
                className={styles['search_box']}
                type='search'
                placeholder='Search People..'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
