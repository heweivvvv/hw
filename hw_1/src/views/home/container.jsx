import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import helper from "../../service/helper";
import {getConsumeRecords, getConsumeTypeList, addRecord} from "../../service/home";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            records: []
        };
    }

    async addRecord() {
        this.props.history.push('/detail');
    }

    async componentDidMount() {
        const res = await getConsumeRecords();
        if (res.result) {
            this.setState({records: res.records});
        } else {
            alert(res.msg);
        }
    }

    goDetail(id) {
        this.props.history.push('/detail:' + id);
    }

    async deleteRecord(id){

    }

    render() {
        const propsParams = {
            ...this.props,
            ...this.state,
            goDetail: (id) => this.goDetail(id),
            addRecord: async () => this.addRecord(),
            deleteRecord: async (id) => this.deleteRecord(id)
        };
        return (<View {...propsParams}/>);
    }


}

export default withRouter(Home);
