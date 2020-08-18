
let initState = {
    value: 0
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {...state, value: state.value + 1 }
        }
        default:
            return state
    }
}

export default Reducer

