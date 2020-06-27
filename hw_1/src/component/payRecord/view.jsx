import React from 'react';
import styles from './styles.scss'

const component = ({
                       id,
                       payMenoy,
                       payDate,
                       type,
                       payDesc,
                       goDetail

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
                    {payDate}
                </div>
            </div>
            <div className={styles.payMenoy}>
                ￥{payMenoy}
            </div>
            <div className={styles.edit}>
                <button onClick={() => goDetail(id)}>详情</button>
            </div>
        </div>
    )
}

export default component;
