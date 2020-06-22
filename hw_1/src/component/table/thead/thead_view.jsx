import React from 'react'
import styles from './thead_styles.scss';

let Component = ({columns}) => {
    columns.sort((a, b) => a.order -b.order)
        .forEach((c,index) => {if(!c.key){
            c.key = `column_${index}`
        }});
    return(<div className={styles.view}>
        {
            columns.map(c => (<div key={c.key} className={styles.headCell}>
                {c.name}
            </div>))
        }
    </div>)
}

export default Component;
