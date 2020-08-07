import React from 'react';
import View from './view.jsx';
import {withRouter} from 'react-router';
import {addRecord, getConsumeTypeList, getPayTypeList, modifyRecord} from "../../service/home";
import {getOneRecord} from "../../service/detial";
import {ActionTypes, routeId} from './config';
import {connect} from 'react-redux';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.init) {
            this.props.init();
        }
    }

    render() {
        return <View {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    const stateObj = state[routeId];
    return {
        title: stateObj.title,
        consumeTypeId: stateObj.consumeTypeId,
        payTypeId: stateObj.payTypeId,
        consumeData: stateObj.consumeData,
        count: stateObj.count,
        remark: stateObj.remark,
        id: stateObj.id,
        payTypes: stateObj.payTypes,
        consumeTypes: stateObj.consumeTypes,
        editing: stateObj.editing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        init() {
            dispatch({type: 'DETAIL_INIT', payload: {id: props.match.params.id}})
        },
        changePayDesc(e) {
            dispatch({type: ActionTypes.changeTitle, payload: {title: e.target.value}});
        },
        consumeTypeIdChange(e) {
            dispatch({type: ActionTypes.changeConsumeTypeId, payload: {consumeTypeId: e.target.value}});
        },
        payTypeChange(e) {
            dispatch({type: ActionTypes.changePayTypeId, payload: {payTypeId: e.target.value}});
        },
        consumeDataChange(e) {
            dispatch({type: ActionTypes.changeConsumeData, payload: {consumeData: e.target.value}});
        },
        countChange(e) {
            dispatch({type: ActionTypes.changeCount, payload: {count: e.target.value}});
        },
        remarkChange(e) {
            dispatch({type: ActionTypes.changeRemark, payload: {remark: e.target.value}});
        },
        toEdit() {
            dispatch({type: ActionTypes.changeEditing, payload: {editing: true}});
        },
        goBack(e) {
            props.history.push('/home');
        },
        toSave() {
            dispatch({type: 'SAVE_RECORD'});
        }
    }
};

const Detail = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withRouter(Detail);
