import React, { Component } from "react";
import axios from 'axios';
import CustomerDetails from './CustomerDetails';
import { URLS } from './constants';
import PreHello from './PreHello';

export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: 1
        }
    }

    componentDidMount() {
        this.getCustomerList();
    }

    getCustomerList() {
        axios.get(URLS.customer).then((resp) => {
            this.setState({ customerList: resp.data });
        })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        if (!this.state.customerList)
            return (<p>Loading.....</p>)
        return (
            <div className="container">
                <PreHello />
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        {
                            this.state.customerList.map((customer) =>
                                <div className="panel panel-default" key={customer.name}>
                                    <div className="panel-heading">Name : {customer.name}</div>
                                    <div className="panel-body">
                                        <p>{customer.phone}</p>
                                        <p>{customer.email}</p>
                                        <button className="btn btn-primary" onClick={() => this.setState({ selectedCustomer: customer.id })}>Click Me</button>
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className="col-md-9 col-sm-6">
                        <CustomerDetails val={this.state.selectedCustomer} />
                    </div>
                </div>
            </div>
        )
    }

}