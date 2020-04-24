import React from 'react'
import styles from './Styles.module.scss';
import { FiSearch } from 'react-icons/fi';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className={styles['search_container']}>
            <FiSearch style={{ color: 'grey', }}/>
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
