import React from 'react';
import View from './view.jsx';
import {withRouter} from 'react-router';
import {addRecord, getConsumeTypeList, getPayTypeList, modifyRecord} from "../../service/home";
import {getOneRecord} from "../../service/detial";
import {routeId} from './config';
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

    toEdit() {
        this.setState({editing: true});
    }

    async toSave() {
        // 成功
        try {
            if (!this.state.id) {
                const record = {
                    title: this.state.title,
                    consumeTypeId: this.state.consumeTypeId,
                    payTypeId: this.state.payTypeId,
                    consumeData: this.state.consumeData,
                    count: parseInt(this.state.count, 10).toFixed(2),
                    remark: this.state.remark
                };

                if (this.checkRecord(record)) {
                    const res = await addRecord(record);
                    if (res.result) {
                        this.props.history.push('/home');
                    } else {
                        alert(res.msg);
                    }
                } else {
                    alert('输入不合法，请检查!')
                }

            } else {
                const record = {
                    title: this.state.title,
                    consumeTypeId: this.state.consumeTypeId,
                    payTypeId: this.state.payTypeId,
                    consumeData: this.state.consumeData,
                    count: parseInt(this.state.count, 10).toFixed(2),
                    remark: this.state.remark
                };
                if (this.checkRecord(record)) {
                    const res = await modifyRecord(record, this.state.id);
                    if (res.result) {
                        this.props.history.push('/home');
                    } else {
                        alert(res.msg);
                    }
                } else {
                    alert('输入不合法，请检查!')
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    // 检查输入信息，待实现 显示界面可以在输入错误时显示错误
    checkRecord(record) {
        let result = true;
        const checks = ['title', 'consumeData', 'count'];
        checks.forEach(k => {
            if (!record[k]) {
                result = false;
            }
        });
        return result;
    }

    goBack(e) {
        this.props.history.push('/home');
    }

    changePayDesc(e) {
        this.setState({title: e.target.value});
    }

    consumeTypeIdChange(e) {
        this.setState({consumeTypeId: e.target.value});
    }

    payTypeChange(e) {
        this.setState({payTypeId: e.target.value});
    }

    consumeDataChange(e) {
        console.log(e)
        this.setState({consumeData: e.target.value});
    }

    countChange(e) {
        this.setState({count: e.target.value});
    }

    remarkChange(e) {
        this.setState({remark: e.target.value});
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
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        init() {
            dispatch({type: 'DETAIL_INIT', payload: {id: props.match.params.id}})
        }
    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withRouter(Detail);
