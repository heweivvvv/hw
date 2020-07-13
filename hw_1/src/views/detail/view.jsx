import React from 'react';
import styles from './styles.scss';

const component = ({
                       title,
                       consumeTypeId,
                       consumeTypes,
                       payTypeId,
                       payTypes,
                       consumeData,
                       count,
                       remark,
                       editing,
                       id,
                       // action
                       toEdit,
                       toSave,
                       goBack,
                       changePayDesc,
                       consumeTypeIdChange,
                       payTypeChange,
                       consumeDataChange,
                       countChange,
                       remarkChange,
                   }) => {
    return (
        <div className={styles.view}>
            <div className={styles.content}>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        描述
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ? <input onChange={e => changePayDesc(e)} value={payDesc}></input> :
                                <span>{title}</span>
                        }
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        消费类型
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ? <select onChange={(e) => consumeTypeIdChange(e)} value={consumeTypeId}>
                                    {
                                        Object.keys(consumeTypes).map(typeKey => <option key={`typeOp_ ${typeKey}`}
                                                                                         value={typeKey}>{consumeTypes[typeKey]}</option>)
                                    }
                                </select> :
                                <span>
                                     {consumeTypes[consumeTypeId]}
                                </span>
                        }
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        支付类型
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ? <select onChange={e => payTypeChange(e)} value={payTypeId}>
                                    {
                                        Object.keys(payTypes).map(i => <option key={`type_${i}`}
                                                                               value={i}>{payTypes[i]}</option>)
                                    }
                                </select> :
                                <span> {payTypes[payTypeId]}</span>
                        }

                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        时间
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ?
                                <input onChange={e => consumeDataChange(e)} type='date' value={consumeData}></input> :
                                <span>
                                {consumeData}
                            </span>
                        }

                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        金额
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ? <input type="number" onChange={e => countChange(e)} value={count}></input> :
                                <span> {count}</span>
                        }
                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        备注
                    </div>
                    <div className={styles.recodeInfoValue}>
                        {
                            editing ? <input type="text" onChange={e => remarkChange(e)} value={remark}></input> :
                                <span> {remark}</span>
                        }

                    </div>
                </div>
            </div>
            <div className={styles.btns}>
                <button className={editing ? styles.hide : styles.show} onClick={(e) => toEdit()}>编辑</button>
                <button className={editing ? styles.show : styles.hide} onClick={(e) => toSave()}>保存</button>
                <button onClick={e => goBack(e)}>返回</button>
            </div>
        </div>
    )
}

export default component;
