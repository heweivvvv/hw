import React from 'react'
import styles from './styles.scss';
import PayRecord from '../../component/payRecord/container.jsx';

let Component = ({records, goDetail, addRecord}) => {

    return (
        <div className={styles.view}>

            <div className={styles.btns}>
                <button onClick={e => addRecord()}>新增</button>
            </div>
            <div className={styles.content}>
                {
                    records.map(r => (<PayRecord key={r.id} {...r} goDetail={goDetail}/>))
                }
            </div>
        </div>
    )
}

export default Component;
