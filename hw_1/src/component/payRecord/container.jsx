import React from 'react'
import View from './view.jsx';

class PayRecord extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    toEdit(id) {

    }

    render() {
        const propsParams = {...this.props, toEdit: this.toEdit}
        return <View {...propsParams}/>;
    }
}

export default PayRecord;
