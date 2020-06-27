import React from 'react'
import View from './view.jsx';
import {withRouter} from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

       /* this.state = {
            records: []
        };*/
       this.init();
    }

    init(){
        const data = [
            {
                id: 0,
                payMenoy: 23.22,
                payDate: '2020-06-12 11:11:11',
                // createDate: '2020-06-12 11:11:11',
                createDateRec: 123412341234124,
                payType: '微信',
                payTypeId: 1,
                payDesc: '在xxx吃饭',
                type: '餐饮',
                typeId: 1,
                remark: 'adsadfasd'
            },
            {
                id: 1,
                payMenoy: 33.22,
                //createDate: '2020-06-12 12:11:11',
                payDate: '2020-06-12 12:11:11',
                createDateRec: 123412341234124,
                payType: '支付宝',
                payTypeId: 2,
                payDesc: '在淘宝买了xxx',
                type: '购物',
                typeId: 2,
                remark: 'adsadfasd'
            }
        ];

        this.state = {
            records: data
        }
       /* this.setState({
            records: data
        })*/
    }

    componentDidMount() {
      /*  const data = [
            {
                id: 0,
                payMenoy: 23.22,
                payDate: '2020-06-12 11:11:11',
               // createDate: '2020-06-12 11:11:11',
                createDateRec: 123412341234124,
                payType: '微信',
                payTypeId: 1,
                payDesc: '在xxx吃饭',
                type: '餐饮',
                typeId: 1,
                remark: 'adsadfasd'
            },
            {
                id: 1,
                payMenoy: 33.22,
                //createDate: '2020-06-12 12:11:11',
                payDate: '2020-06-12 12:11:11',
                createDateRec: 123412341234124,
                payType: '支付宝',
                payTypeId: 2,
                payDesc: '在淘宝买了xxx',
                type: '购物',
                typeId: 2,
                remark: 'adsadfasd'
            }
        ];

        this.setState({
            records: data
        })*/
    }

    goDetail(id){
        this.props.history.push('/detail:'+ id);
    }

    render() {
        const propsParams = {...this.props, ...this.state, goDetail:(id) => this.goDetail(id)};
        return (<View {...propsParams}/>);
    }
}

export default withRouter(Home);
