import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import helper from "../../service/helper";
import {getConsumeRecords, getConsumeTypeList, addRecord} from "../../service/home";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.init();
    }

    async init() {
        const res = await getConsumeTypeList();
        if (res.result) {
            this.state = {
                records: res.records
            }
        } else {
            alert(res.msg);
        }
    }

    async addRecord() {
        this.props.history.push('/detail');
    }

    componentDidMount() {
    }

    goDetail(id) {
        this.props.history.push('/detail:' + id);
    }

    render() {
        const propsParams = {
            ...this.props,
            ...this.state,
            goDetail: (id) => this.goDetail(id),
            addRecord: async (id) => this.addRecord(id)
        };
        return (<View {...propsParams}/>);
    }
}

export default withRouter(Home);
