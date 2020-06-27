import React from 'react'
import styles from './styles.scss';
import PayRecord from '../../component/payRecord/container.jsx';

let Component = ({records, goDetail}) => {

    return (
        <div className={styles.view}>
            {
                records.map(r => (<PayRecord key={r.id} {...r} goDetail={goDetail}/>))
            }
        </div>
    )
}

export default Component;
