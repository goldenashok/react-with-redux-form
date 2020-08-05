import React, { Component } from "react";
import axios from 'axios';
import { URLS } from './constants';

export default class CustomerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getCustoemrDetails(this.props.val);
    }

    componentDidUpdate(prevProps) {
        if (this.props.val !== prevProps.val) {
            this.getCustoemrDetails(this.props.val);
        }
    }

    getCustoemrDetails(id) {
        axios.get(`${URLS.customerDetails}${id}.json`)
            .then((resp) => {
                this.setState({ customerDetails: resp.data });
            })
            .catch((err) => {
                console.log('err');
            })
    }

    render() {
        if (!this.state.customerDetails)
            return (<p> Loading....</p>)
        return (
            <React.Fragment>
                <div className="panel panel-default" key="1">
                    <div className="panel-heading">Name : {this.state.customerDetails.name}</div>
                    <div className="panel-body">
                        <p>Name : {this.state.customerDetails.name}</p>
                        <p>Email : {this.state.customerDetails.email}</p>
                        <p>Phone : {this.state.customerDetails.phone}</p>
                        <p>City : {this.state.customerDetails.city}</p>
                        <p>Country: {this.state.customerDetails.county}</p>
                        <p>Organization: {this.state.customerDetails.orgonization}</p>
                        <p>Job Profile : {this.state.customerDetails.jobprofile}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}