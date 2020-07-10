import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import service from '../../service/helper'
import Cookies from 'js-cookie'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            userName: '',
            password: '',
            checkCode: '',
            checkCodeText: '1234',
        }
    }

    async goLogin() {
        const params = {
            loginName: this.state.userName,
            password: this.state.password
        };
        let {user, msg, result} = await service('/signin', params, 'POST');
        if (result) {
            this.props.history.push('/home');
            sessionStorage.setItem("isLogin", "1");
            Cookies.set('userId', user.userId);
        }else{
            alert(msg);
        }
    }

    changeUserName(e) {
        this.setState({userName: e.target.value});
    }

    changePw(e) {
        this.setState({password: e.target.value});
    }

    changeCd(e) {
        this.setState({checkCode: e.target.value});
    }

    render() {
        const props = {
            ...this.props,
            ...this.state,
            goLogin: (e) => this.goLogin(e),
            changeUserName: (e) => this.changeUserName(e),
            changePw: (e) => this.changePw(e),
            changeCd: (e) => this.changeCd(e)
        }
        return (<View {...props}/>);
    }
}

export default withRouter(Login);
