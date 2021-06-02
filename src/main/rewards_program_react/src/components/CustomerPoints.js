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

    

    render() {
        const february = "February";
        const march = "March";
        const may = "May";
        const april = "April"
        return (<div>
            <h2>Reward Points</h2>
            <Month name={february} value = "2"></Month>
            <Month name={march} value = "3"></Month>
            <Month name={april} value = "4"></Month>
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