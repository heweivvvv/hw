import React from 'react';
import styles from './styles.scss'

const component = ({
                       id,
                       count,
                       consumeData,
                       consumeTypeText,
                       title,
                       goDetail

                   }) => {
    return (
        <div className={styles.view}>
            <div className={styles.payInfo}>
                <div className={styles.payDesc}>
                    {title}
                </div>
                <div className={styles.payType}>
                    {consumeTypeText}
                </div>
                <div className={styles.payDate}>
                    {consumeData}
                </div>
            </div>
            <div className={styles.payMenoy}>
                ￥{count}
            </div>
            <div className={styles.edit}>
                <button onClick={() => goDetail(id)}>详情</button>
            </div>
        </div>
    )
}

export default component;
