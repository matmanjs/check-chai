import { combineReducers } from 'redux';

import { codeDemoInfo } from '../pages/dashboard/data/data-code-demo';

const rootReducer = combineReducers({
    empty: () => {
        return {};
    },
    codeDemoInfo
});

export default rootReducer;
