import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './CustomerPoints.css'
import Month from './Month';

class CustomerPoints extends React.Component{

    state = {
        transactionData:[],
        pointsData:0,
        
    }


    componentDidMount(){
        axios.get("/rewardsprogram/transaction/customer/"+this.props.match.params.customerId)
        .then(res=>{
            const transactionData = res.data;
            console.log(res.data);
            this.setState({transactionData});
        })
    }

    

    render() {
        const custId = this.props.match.params.customerId;
        const february = "February";
        const march = "March";
        const april = "April";
        const total = 0;
       

        return (<div>
            <h2>Reward Points</h2>
            <Month name={february} value="2" customerId={custId}></Month>
            <Month name={march} value="3" customerId={custId}></Month>
            <Month name={april} value="4" customerId={custId}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ></Month>
            <div className="total">
                <button>Total</button>
                <span>{total}</span>
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