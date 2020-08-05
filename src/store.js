import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

//Actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

export const PUSH = 'push';
export const POP = 'pop';

export const SETDATA = 'setData';
export const REMOVEDATA = 'removeData';

const countInitialState = {
    count: 0
}

const counterReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            console.log(state.count);
            return { ...state, count: state.count + 1 };
        }
        case COUNTER_DECREMENT: {
            console.log(state.count);
            return { ...state, count: state.count - 1 };
        }
        default: {
            return state;
        }
    }
}


const testReducer = (state = [], action) => {
    switch (action.type) {
        case 'push': {
            const pushData = [...state];
            pushData.push(action.value);
            return [...pushData];
        }
        case 'pop': {
            const popData = [...state];
            popData.pop();
            return [...popData];
        }
        default: {
            return state;
        }
    }
}

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case SETDATA: {
            return { data: action.data };
        }
        case REMOVEDATA: {
            return { data: null };
        }
        default: {
            return state;
        }
    }
}

// const rootReducer = (state = {}, action) => {
//     return {
//         counter: counterReducer(state.counter, action),
//         tester: testReducer(state.tester, action),
//         storage: dataReducer(state.storage, action)
//     }
// }

const rootReducer = redux.combineReducers({
    counter: counterReducer,
    tester: testReducer,
    storage: dataReducer,
    form: formReducer
});

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
export default store;