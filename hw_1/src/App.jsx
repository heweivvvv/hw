import React from 'react';
import Login from './views/login/container.jsx';
import Home from './views/home/container.jsx';
import Detail from "./views/detail/container.jsx";
import AuthRouter from './views/authRouter/view.jsx'
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';

import styles from './App.scss';


export class App extends React.Component {

    render() {
        return (
            <div className={styles.App}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        {/*登录权限控制组件*/}
                        <AuthRouter path='/home' component={Home}/>
                        <AuthRouter path='/detail:id' component={Detail}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
