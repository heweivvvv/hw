import React from 'react'
import View from './thead_view.jsx';
class Thead extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(<View {...this.props} />);
    }
}

export default Thead;