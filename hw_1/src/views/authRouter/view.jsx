import React from 'react'
import styles from './styles.scss';
import {withRouter} from 'react-router'
import {Route, NavLink, Redirect} from 'react-router-dom'

let Component = (props) => {

    const {component: Component, ...rest} = props;
    const isLogged = sessionStorage.getItem("isLogin") === "1" ? true : false;

    return (
        <Route {...rest} render={propParams => {
            return isLogged ?
                <div className={styles.view}>
                    <div className={styles.header}>
                        <NavLink className={styles.menuLink} activeClassName= {styles.menuLinkActive}
                                 to='/home'>首页</NavLink>
                    </div>
                    <div className={styles.content}>
                        <Component {...propParams} />
                    </div>
                </div>
                : <Redirect to="/login"/>
        }}/>
    )
}

export default withRouter(Component);
