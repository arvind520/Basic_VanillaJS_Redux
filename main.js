//initial state
const initialState = { counter: 0 }

//action creator 
const incrementCounter = () => {
    return {
        type: 'increment',
    }
}

const decrementCounter = () => {
    return {
        type: 'decrement',
    }
}

//reducer 
const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            return state
    }
}

const store = Redux.createStore(counterReducer);
store.subscribe(() => {
    document.querySelector('#counter').innerHTML = store.getState().counter;
})



document.querySelector('#increment').addEventListener('click', function() {
    store.dispatch(incrementCounter())
})

document.querySelector('#decrement').addEventListener('click', function() {
    store.dispatch(decrementCounter())
})