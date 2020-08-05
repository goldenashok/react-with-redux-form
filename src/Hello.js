import React, { Component } from "react";
import { connect } from 'react-redux';
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT, PUSH, POP, SETDATA, REMOVEDATA } from './store'
import axios from 'axios';
import { URLS } from './constants';

class Hello extends Component {

    state = {
        storageData: []
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>
                    <button className="btn btn-primary" onClick={this.props.decrement}>Decrement</button>
                    <button className="btn btn-primary" onClick={this.props.push}>Push</button>
                    <button className="btn btn-primary" onClick={this.props.pop}>Pop</button>
                    <button className="btn btn-primary" onClick={this.props.setData}>Set Data</button>
                    <button className="btn btn-primary" onClick={this.props.removeData}>Remove Data</button>
                    <p>Hello Count : {this.props.count}</p>
                    <p>Tester: {this.props.data.length}</p>
                    {this.props.storageData.map((data, i) => <p key={i}>{data.userId} - {data.title}</p>)}
                </div>
            </div>
        )
    }
}

const getData = (name) => {
    return (dispatch) => {
        axios.get(URLS.getUserData)
            .then((result) => {
                dispatch({ type: SETDATA, data: result.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        data: state.tester,
        storageData: state.storage.data || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch({ type: COUNTER_INCREMENT });
        },
        decrement: () => {
            dispatch({ type: COUNTER_DECREMENT });
        },
        push: () => {
            dispatch({ type: PUSH, value: Math.random() });
        },
        pop: () => {
            dispatch({ type: POP })
        },
        setData: (data) => {
            dispatch(getData());
        },
        removeData: () => {
            dispatch({ type: REMOVEDATA });
            console.log(store.getState());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);