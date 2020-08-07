import React from 'react'
import styles from './styles.scss';
import {Route, NavLink, Redirect} from 'react-router-dom'

let Component = (props) => {

    const {component: Component, userInfo, logout, ...rest} = props;
    const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;
    const userName = sessionStorage.getItem("userName") || '';

    return (
        <Route {...rest} render={propParams => {
            return isLogged ?
                <div className={styles.view}>
                    <div className={styles.header}>
                        <NavLink className={styles.menuLink} activeClassName={styles.menuLinkActive}
                                 to='/home'>首页</NavLink>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>{userName}</div>
                            <button className={styles.logoutBtn} onClick={() => logout()}>退出</button>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <Component {...propParams} />
                    </div>
                </div>
                : <Redirect to="/login"/>
        }}/>
    )
}

export default Component;//withRouter(Component);
