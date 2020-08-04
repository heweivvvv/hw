import React from 'react'
import styles from './styles.scss';
import PayRecord from '../../component/payRecord/container.jsx';

let Component = ({recordsList = [], goDetail, addRecord, deleteRecord}) => {
    // console.log(recordsList)
    return (
        <div className={styles.view}>

            <div className={styles.btns}>
                <button onClick={e => addRecord()}>新增</button>
            </div>
            <div className={styles.content}>
                {
                    recordsList.map(r => (
                        <PayRecord key={r.id} {...r} goDetail={goDetail} deleteRecord={deleteRecord}/>))
                }
            </div>
        </div>
    )
}

export default Component;
