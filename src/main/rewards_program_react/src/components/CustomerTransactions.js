import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CustomerTransactions extends React.Component{

    state = {
        transactionData:[],
        customerData:[]
    }

    componentDidMount(){
        console.log("/rewardsprogram/transaction/customer/"+this.props.match.params.customerId);
        axios.get("/rewardsprogram/transaction/customer/"+this.props.match.params.customerId)
        .then(res=>{
            const transactionData = res.data;
            console.log(res.data);
            this.setState({transactionData});
        });
        axios.get('/rewardsprogram/api/customers/'+this.props.match.params.customerId).then(res=>{
            const customerData = res.data;
            this.setState({customerData})
        })
    }


    render(){
        return (<div>
                <h2>Customer Details:</h2>
                First Name: {this.state.customerData.firstName}<br/>
                Last Name: {this.state.customerData.lastName}<br/>
                <h2>Transaction Details:</h2>
                <table align='center'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactionData.map(transaction=><RowCreator item={transaction}/>)}
                    </tbody>
                    <div >
                        <span><Link to={'/'}>Home</Link></span>
                        <span>          </span>
                        <span><Link to={'/customerPoints/'+this.props.customerId}>Reward Points</Link></span>
                    </div>
                    
                </table>
        </div>)
    }
}

class RowCreator extends React.Component{
    render() {
        var transaction = this.props.item;
        return <tr>
            <td>{transaction.orderDate}</td>
            <td>{transaction.amount}</td>
            {/* <td><Link to={'/customerPoints/'+customer.id}>Points</Link></td> */}
        </tr>
    }


}
export default CustomerTransactions;