import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component{
    state ={
        customerData:[]
    }

    componentDidMount(){
         axios.get('/rewardsprogram/api/customers').then(res=>{
            const customerData = res.data;
            this.setState({customerData})
        })
    }

    render(){
        return (<div>
            <h2>Customers:</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customerData.map(customer=><RowCreator item={customer}/>)}
                </tbody>
            </table>
            {/* <Link  to={'/addCustomer'}>New Customer</Link> */}
        </div>)
    }
}

class RowCreator extends React.Component{
    render(){
        var customer = this.props.item;
        return <tr>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td><Link to={'/customerTransactions/'+customer.id}>Transactions</Link></td>
            <td><Link to={'/customerPoints/'+customer.id}>Reward Points</Link></td>
        </tr>
    }
}

export default Home;