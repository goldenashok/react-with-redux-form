import React, { Component } from "react";
import Hello from "./Hello";
import store from "./store";
import Form from './form';
import { Provider } from 'react-redux';

class PreHello extends Component {
    render() {
        return (
            <Provider store={store}>
                <Hello />
                <Form/>
            </Provider>
        )
    }
}

export default PreHello;