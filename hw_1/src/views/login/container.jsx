import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import {buildCheckCode} from '../../utils/util'
import {connect} from 'react-redux';
import {stateId, ActionTypes} from "./config";

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        if(this.props.init){
            this.props.init();
        }
    }

    render() {
        return (<View {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    // console.log(state[stateId]);
    const stateObj = state[stateId];
    return {
        userName: stateObj.userName,
        password: stateObj.password,
        checkCode: stateObj.checkCode,
        checkCodeText: stateObj.checkCodeText,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        init(){
            dispatch({type: ActionTypes.changeCheckCodeText, payload: {checkCodeText: buildCheckCode()}});
        },
        changeUserName(e) {
            dispatch({type: ActionTypes.changeUserName, payload: {userName: e.target.value}});
        },
        changePw(e) {
            dispatch({type: ActionTypes.changePassword, payload: {password: e.target.value}});
        },
        updateCd() {
            dispatch({type: ActionTypes.changeCheckCodeText, payload: {checkCodeText: buildCheckCode()}});
        }
        ,
        changeCd(e) {
            dispatch({type: ActionTypes.changeCheckCode, payload: {checkCode: e.target.value}});
        },
        goLogin() {
            dispatch({type:'LOGIN'});
        }
    }
};

const Login = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withRouter(Login);
