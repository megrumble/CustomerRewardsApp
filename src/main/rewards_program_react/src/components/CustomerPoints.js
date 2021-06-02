import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './CustomerPoints.css'
import Month from './Month';

class CustomerPoints extends React.Component{

    state = {
        transactionData:[],
        pointsData:0
        
    }


    componentDidMount(){
        axios.get("/rewardsprogram/transaction/customer/"+this.props.match.params.customerId)
        .then(res=>{
            const transactionData = res.data;
            console.log(res.data);
            this.setState({transactionData});
        })
    }
    // getPoints(customerId, year, month) {
    //     customerId= this.transactionData.customerId;
    //     year= this.transactionData.orderDate.year;
    //     month=this.transactionData.orderDate.month
    //     const data = {
    //         customerId,
    //         year,
    //         month
    //         // customerId:this.transactionData.customerId,
    //         // year:this.transactionData.orderDate.year,
    //         // month:this.transactionData.orderDate.month
    //     }
    //     axios.post("rewardsprogram/transaction/",data)
    //     .then(res=>{
    //         const pointsData = res.data;
    //         this.setState({pointsData})
    //     })
    // }

    

    render() {
        return (<div>
            <h2>Reward Points</h2>
            <Month value="February"></Month>
            <Month value="March"></Month>
            <Month value="April"></Month>
            <div className="total">
                <button>Total</button>
                <span></span>
            </div>
            <br>
            </br>
            <div >
                <span><Link to={'/'}>Home</Link></span>
                        
            </div>

        </div>)
    }
}

export default CustomerPoints;