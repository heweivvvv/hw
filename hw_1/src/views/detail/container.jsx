import React, {Component} from 'react';
import View from './view.jsx';
import {withRouter} from 'react-router';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const id = this.props.match.params.id;
        //console.log(this.props.match.params.id)
        this.state = {
            payDesc: "在xxx吃饭",
            typeId: '1',
            payTypeId: '1',
            payDate: '2020-06-12',
            payMoney: 23.22,
            remark: '',
            id: id,
            editing: false,
            consumeTypes: {
                "1": "微信",
                "2": "支付宝",
            },
            payTypes: {
                "1": "餐饮",
                "2": "购物",
            }
        }
    }

    toEdit() {
        this.setState({editing: true});
    }

    toSave() {
        // 成功
        this.setState({editing: false});
    }

    goBack(e){
        this.props.history.push('/home');
    }

    changePayDesc(e) {
        this.setState({payDesc: e.target.value});
    }

    typeIdChange(e) {
        this.setState({typeId: e.target.value});
    }

    payTypeChange(e){
        this.setState({payTypeId: e.target.value});
    }

    payDateChange(e){
        console.log(e)
        this.setState({payDate: e.target.value});
    }

    payMoneyChange(e){
        this.setState({payMoney: e.target.value});
    }

    remarkChange(e){
        this.setState({remark: e.target.value});
    }

    render() {
        const propsPrams = {
            ...this.props,
            ...this.state,
            toSave: () => this.toSave(),
            toEdit: () => this.toEdit(),
            goBack: () => this.goBack(),
            changePayDesc: (e) => this.changePayDesc(e),
            typeIdChange: (e) => this.typeIdChange(e),
            payTypeChange: (e) => this.payTypeChange(e),
            payDateChange: (e) => this.payDateChange(e),
            payMoneyChange: (e) => this.payMoneyChange(e),
            remarkChange: (e) => this.remarkChange(e),

        };
        return <View {...propsPrams}/>
    }

}

export default withRouter(Detail);
