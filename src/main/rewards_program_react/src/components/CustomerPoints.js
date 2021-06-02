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
        return (<div>
            <h2>Reward Points</h2>
            <Month name="February" ></Month>
            <Month name="March"></Month>
            <Month name="April"></Month>
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