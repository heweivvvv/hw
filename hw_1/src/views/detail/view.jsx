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

    const consumeType = consumeTypeId && consumeTypes.length > 0 ? consumeTypes.find(c => c.typeId === consumeTypeId) : {};
    const payType = payTypeId && payTypes.length > 0 ? payTypes.find(c => c.typeId === payTypeId) : {};

    return (
        <div className={styles.view}>
            <div className={styles.content}>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        描述
                    </div>
                    <div className={`${styles.recodeInfoValue} ${!title ? styles.illegalInput: ''}`}>
                        {
                            editing ? <input onChange={e => changePayDesc(e)} value={title}></input> :
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
                                        consumeTypes.map((c, index) => <option key={`consumeType_${index}`}
                                                                               value={c.typeId}>{c.name}</option>)
                                    }
                                </select> :
                                <span>
                                     {consumeType.name || ''}
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
                                        payTypes.map((c, index) => <option key={`payTypes_${index}`}
                                                                               value={c.typeId}>{c.name}</option>)
                                    }
                                </select> :
                                <span> {payType.name || ''}</span>
                        }

                    </div>
                </div>
                <div className={styles.recodeInfo}>
                    <div className={styles.recodeInfoName}>
                        时间
                    </div>
                    <div className={`${styles.recodeInfoValue} ${!consumeData ? styles.illegalInput: ''}`}>
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
                    <div className={`${styles.recodeInfoValue} ${!count ? styles.illegalInput: ''}`}>
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
