import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';

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

    goLogin() {

        // todo 接口功能没实现，默认直接成功
        this.setState({
            userName: '',
            checkCode: '',
            password: ''
        });
        sessionStorage.setItem("isLogin", "1");
        this.props.history.push('/home');
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
