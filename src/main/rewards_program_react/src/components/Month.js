import React from 'react';

import axios from 'axios';

class Month extends React.Component {
    constructor() {
        super();
        this.state = {
            customerId: 1,
            month : "March",
            year : "2021",
            points : 20
        }
    }

    componentDidMount(){
        const data = {
            customerId:this.customerId,
            month:this.state.month,
            year:this.state.year

        }
        axios.post("/rewardsprogram/transaction/",{"customerId": 1, "year": "2021", "month": "3"})
        .then(res=>{
            const points = res.data;
            this.setState({points})
        })
    }

    render() {
        return (
            <div className="month">
                <button>{this.state.month}</button>
                <span>{this.state.points}</span>
            </div>
        )
    }
 
}

export default Month;