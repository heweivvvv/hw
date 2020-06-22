import React from 'react';
import styles from './styles.scss'

const component = ({
                       id,
                       payMenoy,
                       createDate,
                       type,
                       payDesc,
                       toEdit


                   }) => {
    return (
        <div className={styles.view}>
            <div className={styles.payInfo}>
                <div className={styles.payDesc}>
                    {payDesc}
                </div>
                <div className={styles.payType}>
                    {type}
                </div>
                <div className={styles.payDate}>
                    {createDate}
                </div>
            </div>
            <div className={styles.payMenoy}>
                ￥{payMenoy}
            </div>
            <div className={styles.edit}>
                <button onClick={() => toEdit(id)}>编辑</button>
            </div>
        </div>
    )
}

export default component;
