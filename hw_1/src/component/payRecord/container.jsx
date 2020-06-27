import React from 'react'
import View from './view.jsx';

class PayRecord extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const propsParams = {...this.props}
        return <View {...propsParams}/>;
    }
}

export default PayRecord;
