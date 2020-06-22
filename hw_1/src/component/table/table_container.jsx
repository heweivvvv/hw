import React from 'react'
import View from './table_view.jsx';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (<View {...this.props}/>);
    }
}

export default Table;