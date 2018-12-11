import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    empty: () => {
        return {};
    }
});

export default rootReducer;
