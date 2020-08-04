import React from 'react';
import Login from './views/login/container.jsx';
import Home from './views/home/container.jsx';
import Detail from "./views/detail/container.jsx";
import AuthRouter from './views/authRouter/view.jsx'
import {Route, BrowserRouter, Switch, NavLink, Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import styles from './App.scss';
import {browserHistory} from './history';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <div className={styles.App}>
                    <Router history={browserHistory}>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" exact component={Login}/>
                            {/*登录权限控制组件*/}
                            <AuthRouter path='/home' component={Home}/>
                            <AuthRouter path='/detail/:id' component={Detail}/>
                            <AuthRouter path='/detail' component={Detail}/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        )
    }
}
