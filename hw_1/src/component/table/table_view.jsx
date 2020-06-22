import React from 'react'
import Thead from './thead/thead_container.jsx';
import styles from './table_styles.scss';

let Component = ({columns}) => {

    return (
        <div className={styles.view}>
            <div className={styles.thead}>
                <Thead columns={columns}/>
            </div>
            <div className={styles.tbody}>

            </div>
            <div className={styles.tfoot}>

            </div>
        </div>
    )
}

export default Component;
