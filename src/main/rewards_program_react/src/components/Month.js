import React from 'react';

import axios from 'axios';

class Month extends React.Component {
    constructor() {
        super();
        this.state = {
            customerId: 1,
            month : 2,
            year : "2021",
            points : 20
        }
    }

    getPoints(){
        const data = {
            customerId:this.customerId,
            month:this.state.month,
            year:this.state.year

        }
        axios.post("/rewardsprogram/transaction/",data)
        .then(res=>{
            const points = res.data;
            this.setState({points})
        })
    }

    render() {
        return (
            <div className="month">
                <button onClick={this.getPoints.bind(this)}>{this.state.month}</button>
                <span>{this.state.points}</span>
            </div>
        )
    }
 
}

export default Month;