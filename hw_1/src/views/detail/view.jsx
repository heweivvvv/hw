import React from 'react';
import styles from './styles.scss';

const component = ({
                       payDesc,
                       typeId,
                       consumeTypes,
                       payTypeId,
                       payTypes,
                       payDate,
                       payMenoy,
                       remark,
                       id
                   }) => {
    return (
        <div className={styles.view}>
            <div className={styles.content}>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        描述
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {payDesc}
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        消费类型
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {consumeTypes[typeId]}
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        支付类型
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {payTypes[payTypeId]}
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        时间
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {payDate}
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        金额
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {payMenoy}
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        备注
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {remark}
                    </div>
                </div>
            </div>
            <div className={styles.btns}>
                <button>保存</button>
                <button>返回</button>
            </div>
        </div>
    )
}

export default component;
