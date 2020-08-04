import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.init) {
            this.props.init()
        }
    }

    render() {
        return (<View {...this.props}/>);
    }
}

const mapStateToProps = (state) => {

    const stateObj = state.home;
    return {
        recordsList: stateObj.recordsList
    }
};

const mapDispatchToProps = (dispatch, props) => {

    return {
        init() {
            dispatch({type: 'GETRECORDSLIST'});
        },
        goDetail(id) {
            props.history.push('/detail/' + id);
        },
        addRecord() {
            props.history.push('/detail');
        },
        deleteRecord(id) {
        }
    }
};

const Home = connect(mapStateToProps, mapDispatchToProps)(Component);

export default withRouter(Home);
