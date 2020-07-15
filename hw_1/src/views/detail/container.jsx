import React, {Component} from 'react';
import View from './view.jsx';
import {withRouter} from 'react-router';
import {addRecord, getConsumeTypeList, getPayTypeList} from "../../service/home";
import {getOneRecord} from "../../service/detial";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        const id = this.props.match.params.id;
        // const popState = this.props.location.state || {};
        this.state = {
            title: '',
            consumeTypeId: '',
            payTypeId: '',
            consumeData: '',
            count: 0,
            remark: '',
            id: id || '',
            payTypes: [],
            consumeTypes: [],
            editing: id ? false : true
        };
    }

    async componentDidMount() {
        try {
            const consumeTypes = await getConsumeTypeList();
            const payTypes = await getPayTypeList();
            if (consumeTypes[0] && payTypes[0]) {
                this.setState({
                    consumeTypes,
                    payTypes,
                    consumeTypeId: consumeTypes[0].typeId,
                    payTypeId: payTypes[0].typeId
                });
            }
            if (this.state.id) {
                const {record, result, msg} = await getOneRecord({id: this.state.id});
                console.log(result, record);
                if (result && record) {
                    this.setState(record);
                } else {
                    alert(msg);
                }
            }
        } catch (e) {
            console.log(e);
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
                    count: this.state.count.toFixed(2),
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
        const propsPrams = {
            ...this.props,
            ...this.state,
            toSave: async () => this.toSave(),
            toEdit: () => this.toEdit(),
            goBack: () => this.goBack(),
            changePayDesc: (e) => this.changePayDesc(e),
            consumeTypeIdChange: (e) => this.consumeTypeIdChange(e),
            payTypeChange: (e) => this.payTypeChange(e),
            consumeDataChange: (e) => this.consumeDataChange(e),
            countChange: (e) => this.countChange(e),
            remarkChange: (e) => this.remarkChange(e)
        };
        return <View {...propsPrams}/>
    }

}

export default withRouter(Detail);
