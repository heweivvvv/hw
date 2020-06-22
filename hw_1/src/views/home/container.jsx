import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            records: []
        };
    }

    componentDidMount() {
        const data = [
            {
                id: 0,
                payMenoy: 23.22,
                createDate: '2020-06-12 11:11:11',
                createDateRec: 123412341234124,
                payType: '微信',
                payTypeId: 1,
                payDesc: '在xxx吃饭',
                type: '餐饮',
                typeId: 1
            },
            {
                id: 1,
                payMenoy: 33.22,
                createDate: '2020-06-12 12:11:11',
                createDateRec: 123412341234124,
                payType: '支付宝',
                payTypeId: 2,
                payDesc: '在淘宝买了xxx',
                type: '购物',
                typeId: 2
            }
        ];

        this.setState({
            records: data
        })
    }

    render() {
        const propsParams = {...this.props, ...this.state};
        return (<View {...propsParams}/>);
    }
}

export default withRouter(Home);
