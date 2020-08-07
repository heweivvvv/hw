import React from 'react';
import View from './view.jsx';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {stateId} from "../login/config";

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    const stateObj = state[stateId];
    return {
        userInfo: stateObj.userInfo
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout() {
           dispatch({type: 'LOGOUT'});
        }
    }
};

const AuthRouter = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withRouter(AuthRouter);
