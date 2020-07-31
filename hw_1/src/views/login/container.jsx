import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import service from '../../service/helper'
import Cookies from 'js-cookie'
import {buildCheckCode} from '../../utils/util'
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            userName: '',
            password: '',
            checkCode: '',
            checkCodeText: buildCheckCode(),
        }
    }


    async goLogin() {
        try {
            const params = {
                loginName: this.state.userName,
                password: this.state.password
            };
            if (!params.loginName) {
                alert('请输入用户名');
                return;
            }

            if (!params.password) {
                alert('请输入密码');
                return;
            }

            if (this.state.checkCodeText.toUpperCase() !== this.state.checkCode.toUpperCase()) {
                alert('验证码错误');
                this.setState({
                    checkCodeText: buildCheckCode()
                });
                return;
            }

            let {user, msg, result} = await service('/signin', params, 'POST');
            if (result) {
                sessionStorage.setItem("isLogin", "1");
                this.props.history.push('/home');
                Cookies.set('userId', user.userId);
            } else {
                alert(msg);
            }
        } catch (e) {

        }
    }

    changeUserName(e) {
        this.setState({userName: e.target.value});
    }

    changePw(e) {
        this.setState({password: e.target.value});
    }

    updateCd(e) {
        this.setState({checkCodeText: buildCheckCode()});
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
            changeCd: (e) => this.changeCd(e),
            updateCd: (e) => this.updateCd(e),

        }
        return (<View {...props}/>);
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const


export default withRouter(Login);
