import React from 'react'
import styles from './styles.scss';
import {Route, Redirect} from 'react-router-dom'

let Component = ({
                     // props
                     userName,
                     password,
                     checkCode,
                     checkCodeText,
                     // actions
                     goLogin,
                     changeUserName,
                     changePw,
                     changeCd,
                     updateCd
                 }) => {

    const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;
    return (
        <Route render={() => {
            return !isLogged ? <div className={styles.view}>
                <div className={styles.title}>
                    <svg className={styles.titleSVG} width="100%" height="100%">
                        <text textAnchor="middle" x="50%" y="50%" dominantBaseline="middle" fill="black"
                              style={{fontSize: 70, fontFamily: 'Microsoft Yahei', fontWeight: 600}}>
                            {window.appConfig.loginTitle}
                        </text>
                    </svg>
                </div>
                <div className={styles.login}>
                    <div className={styles.labelInput}>
                        <div className={styles.labelDom}>用户名</div>
                        <input value={userName} onChange={(e) => changeUserName(e)}
                               className={styles.inputDom}
                               type="text"/>
                    </div>
                    <div className={styles.labelInput}>
                        <div className={styles.labelDom}>密码</div>
                        <input value={password} onChange={(e) => changePw(e)}
                               className={styles.inputDom} type="password"/>
                    </div>
                    <div className={styles.labelInput}>
                        <div className={styles.labelDom}>验证码</div>
                        <input value={checkCode} onChange={e => changeCd(e)} className={styles.inputDom} type="text"/>
                        <div onClick={e => updateCd()} className={styles.checkCode}>{checkCodeText}</div>
                    </div>
                    <div className={styles.bnts}>
                        <button onClick={(e) => goLogin(e)}>登录</button>
                    </div>
                </div>
            </div> : <Redirect to="/home" />
        }
        }/>
    )
}

export default Component;
