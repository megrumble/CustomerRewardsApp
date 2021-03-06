import React from 'react';

import axios from 'axios';

class Month extends React.Component {

        state = {
            customerData: [],
            customerId: this.props.customerId,
        
            month : {
                name: this.props.name,
                value: this.props.value
            },
            year : "2021",
            points : 20
        }
    

    componentDidMount() {
    
        axios.post("/rewardsprogram/transaction/",{"customerId": this.state.customerId, "year": this.state.year, "month": this.convertMonth()})
        .then(res=>{
            const points = res.data;
            this.setState({points})
        })
    }

    convertMonth() {
        const month = this.state.month;
        if(this.name === "February") {
           this.setState(month.value= "2");
           console.log(this);
           
        }else if (this.name === "March") {
           this.setState(month.value = "3");
           console.log(this);
        }else if (this.name === "April") {
           this.setState(month.value = "4")
        }else if(this.name === "May") {
           this.setState(month.value = "5")
        }
      return month.value;

    }


    render() {
        return (
            <div className="month">
                <button>{this.state.month.name}</button>
                <span>{this.state.points}</span>
            </div>
        )
    }
}

export default Month;